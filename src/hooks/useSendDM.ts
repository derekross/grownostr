import { useState } from "react";
import { nip19, nip04, generateSecretKey, getPublicKey } from "nostr-tools";
import { NostrEvent } from "@nostrify/nostrify";
import { useNostr } from "@nostrify/react";
import { finalizeEvent } from "nostr-tools/pure";

// GNI's npub
const GNI_NPUB = "npub195t386gf4f67kg58jw6u6jf8vf9xm5ultrzpgm6em3tr8t046l5q6rgwhq";
const GNI_PUBKEY = nip19.decode(GNI_NPUB).data as string;

interface SendDMParams {
  message: string;
  subject?: string;
  useAnonymous?: boolean;
}

export function useSendDM() {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { nostr } = useNostr();

  const sendDM = async ({ message, subject, useAnonymous = true }: SendDMParams): Promise<boolean> => {
    setIsSending(true);
    setError(null);

    try {
      // Generate random keys for anonymous messaging
      const randomSecretKey = generateSecretKey();
      const senderPubkey = getPublicKey(randomSecretKey);

      // Encrypt the message using NIP-04
      const encryptedContent = await nip04.encrypt(randomSecretKey, GNI_PUBKEY, message);

      // Create and sign the event manually
      const dmEvent = {
        kind: 4,
        created_at: Math.floor(Date.now() / 1000),
        tags: [["p", GNI_PUBKEY]],
        content: encryptedContent,
        pubkey: senderPubkey,
      };

      const signedEvent = finalizeEvent(dmEvent, randomSecretKey) as NostrEvent;

      // Publish to relays using the event method
      try {
        await nostr.event(signedEvent, {
          signal: AbortSignal.timeout(10000),
        });

        console.log("DM published successfully");
        setIsSending(false);
        return true;
      } catch (publishError) {
        console.error("Error publishing DM:", publishError);
        throw publishError;
      }
    } catch (err) {
      console.error("Error sending DM:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
      setIsSending(false);
      return false;
    }
  };

  return {
    sendDM,
    isSending,
    error,
  };
}
