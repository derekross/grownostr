import { useNostr } from "@nostrify/react";
import { useQuery } from "@tanstack/react-query";
import { NostrEvent, NostrFilter } from "@nostrify/nostrify";
import { nip19 } from "nostr-tools";

export interface NostrProfile {
  pubkey: string;
  npub: string;
  name?: string;
  display_name?: string;
  displayName?: string;
  picture?: string;
  banner?: string;
  about?: string;
  nip05?: string;
  lud16?: string;
  website?: string;
}

function parseProfileMetadata(event: NostrEvent): NostrProfile {
  try {
    const metadata = JSON.parse(event.content);
    return {
      pubkey: event.pubkey,
      npub: nip19.npubEncode(event.pubkey),
      name: metadata.name,
      display_name: metadata.display_name || metadata.displayName,
      displayName: metadata.display_name || metadata.displayName,
      picture: metadata.picture,
      banner: metadata.banner,
      about: metadata.about,
      nip05: metadata.nip05,
      lud16: metadata.lud16,
      website: metadata.website,
    };
  } catch (error) {
    console.error("Error parsing profile metadata:", error);
    return {
      pubkey: event.pubkey,
      npub: nip19.npubEncode(event.pubkey),
    };
  }
}

export function useNostrProfiles(npubs: string[]) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ["nostr", "profiles", npubs],
    queryFn: async () => {
      // Convert npubs to hex pubkeys
      const pubkeys = npubs.map((npub) => {
        try {
          const decoded = nip19.decode(npub);
          return decoded.data as string;
        } catch (error) {
          console.error(`Error decoding npub ${npub}:`, error);
          return null;
        }
      }).filter((pk): pk is string => pk !== null);

      if (pubkeys.length === 0) {
        return [];
      }

      const filters: NostrFilter[] = [
        {
          kinds: [0], // Profile metadata events
          authors: pubkeys,
        },
      ];

      const events: NostrEvent[] = [];

      for await (const msg of nostr.req(filters, { signal: AbortSignal.timeout(5000) })) {
        if (msg[0] === "EVENT") {
          events.push(msg[2]);
        } else if (msg[0] === "EOSE") {
          break;
        }
      }

      // Get the most recent profile event for each pubkey
      const profileMap = new Map<string, NostrEvent>();

      for (const event of events) {
        const existing = profileMap.get(event.pubkey);
        if (!existing || event.created_at > existing.created_at) {
          profileMap.set(event.pubkey, event);
        }
      }

      // Parse profiles and maintain the original order
      const profiles: NostrProfile[] = [];
      for (const pubkey of pubkeys) {
        const event = profileMap.get(pubkey);
        if (event) {
          profiles.push(parseProfileMetadata(event));
        } else {
          // Return a minimal profile if no metadata found
          profiles.push({
            pubkey,
            npub: nip19.npubEncode(pubkey),
          });
        }
      }

      return profiles;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    enabled: npubs.length > 0,
  });
}
