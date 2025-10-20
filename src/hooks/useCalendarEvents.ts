import { useNostr } from "@nostrify/react";
import { useQuery } from "@tanstack/react-query";
import { NostrEvent, NostrFilter } from "@nostrify/nostrify";
import { nip19 } from "nostr-tools";

// GNI's npub converted to hex
const GNI_NPUB = "npub195t386gf4f67kg58jw6u6jf8vf9xm5ultrzpgm6em3tr8t046l5q6rgwhq";
const GNI_PUBKEY = nip19.decode(GNI_NPUB).data as string;

export interface CalendarEvent {
  id: string;
  pubkey: string;
  created_at: number;
  kind: number;
  title: string;
  summary?: string;
  description: string;
  start: number; // Unix timestamp
  end?: number;
  location?: string;
  image?: string;
  participants: Array<{
    pubkey: string;
    role?: string;
  }>;
  tags: string[][];
}

function parseCalendarEvent(event: NostrEvent): CalendarEvent | null {
  try {
    const getTag = (name: string) => event.tags.find((t) => t[0] === name)?.[1];
    const getTags = (name: string) =>
      event.tags.filter((t) => t[0] === name).map((t) => t.slice(1));

    const title = getTag("title") || getTag("name") || "Untitled Event";
    const summary = getTag("summary");
    const location = getTag("location");
    const image = getTag("image");

    // Get participants
    const participants = getTags("p").map((p) => ({
      pubkey: p[0],
      role: p[2],
    }));

    let start: number;
    let end: number | undefined;

    if (event.kind === 31922) {
      // Date-based event - convert YYYY-MM-DD to Unix timestamp
      const startDate = getTag("start");
      const endDate = getTag("end");
      if (!startDate) return null;

      start = new Date(startDate).getTime() / 1000;
      end = endDate ? new Date(endDate).getTime() / 1000 : undefined;
    } else if (event.kind === 31923) {
      // Time-based event - already Unix timestamps
      const startStr = getTag("start");
      const endStr = getTag("end");
      if (!startStr) return null;

      start = parseInt(startStr);
      end = endStr ? parseInt(endStr) : undefined;
    } else {
      return null;
    }

    return {
      id: event.id,
      pubkey: event.pubkey,
      created_at: event.created_at,
      kind: event.kind,
      title,
      summary,
      description: event.content,
      start,
      end,
      location,
      image,
      participants,
      tags: event.tags,
    };
  } catch (error) {
    console.error("Error parsing calendar event:", error);
    return null;
  }
}

export function useCalendarEvents() {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ["nostr", "calendar-events", GNI_PUBKEY],
    queryFn: async () => {
      const filters: NostrFilter[] = [
        // Events created by GNI
        {
          kinds: [31922, 31923],
          authors: [GNI_PUBKEY],
        },
        // Events where GNI is a participant
        {
          kinds: [31922, 31923],
          "#p": [GNI_PUBKEY],
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

      // Parse and filter valid events
      const calendarEvents = events
        .map(parseCalendarEvent)
        .filter((e): e is CalendarEvent => e !== null);

      // Sort by start time (most recent first)
      calendarEvents.sort((a, b) => b.start - a.start);

      const now = Date.now() / 1000;

      // Separate into upcoming and past
      const upcoming = calendarEvents.filter((e) => {
        const eventEnd = e.end || e.start;
        return eventEnd >= now;
      });

      const past = calendarEvents.filter((e) => {
        const eventEnd = e.end || e.start;
        return eventEnd < now;
      });

      // Sort upcoming by start time (soonest first)
      upcoming.sort((a, b) => a.start - b.start);

      return {
        all: calendarEvents,
        upcoming,
        past,
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
