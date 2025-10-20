import { useSeoMeta } from "@unhead/react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import { useCalendarEvents, CalendarEvent } from "../hooks/useCalendarEvents";

const Events = () => {
  useSeoMeta({
    title: "Events - Grow Nostr Initiative",
    description:
      "Find out where GNI is participating, learn about past events, and discover how to partner with us for your Nostr event.",
  });

  const { data: events, isLoading } = useCalendarEvents();

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateRange = (start: number, end?: number) => {
    const startDate = new Date(start * 1000);
    const endDate = end ? new Date(end * 1000) : null;

    if (!endDate || startDate.toDateString() === endDate.toDateString()) {
      return formatDate(start);
    }

    const startStr = startDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
    const endStr = endDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return `${startStr} - ${endStr}`;
  };

  const renderEvent = (event: CalendarEvent) => (
    <div key={event.id} className="bg-gray-800 p-6 rounded-lg">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-2xl font-semibold text-purple-300 mb-2">
        {event.title}
      </h3>
      <p className="text-gray-400 mb-2">
        <strong>Date:</strong> {formatDateRange(event.start, event.end)}
      </p>
      {event.location && (
        <p className="text-gray-400 mb-4">
          <strong>Location:</strong> {event.location}
        </p>
      )}
      {event.description && (
        <p className="text-gray-300">{event.description}</p>
      )}
      {event.summary && !event.description && (
        <p className="text-gray-300">{event.summary}</p>
      )}
    </div>
  );

  // No fallback events needed - show message if no upcoming events

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">
          Events: Connecting the Nostr World
        </h1>

        <p className="text-lg text-gray-300 mb-12">
          From global Bitcoin conferences to local meetups, we're bringing Nostr
          to communities everywhere. Join us, or bring us to your event!
        </p>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            Find Us At Upcoming Events
          </h2>
          {isLoading ? (
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <p className="text-gray-400">Loading events from Nostr...</p>
            </div>
          ) : events?.upcoming && events.upcoming.length > 0 ? (
            <div className="space-y-6">
              {events.upcoming.map(renderEvent)}
            </div>
          ) : (
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <p className="text-gray-400">
                No upcoming events scheduled at this time. Check back soon or{" "}
                <Link to="/contact" className="text-purple-400 hover:text-purple-300">
                  contact us
                </Link>{" "}
                to partner on an event!
              </p>
            </div>
          )}
        </section>

        {/* Past Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            Highlights from Past Events
          </h2>
          {isLoading ? (
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <p className="text-gray-400">Loading past events...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Nostr events (if any) */}
              {events?.past && events.past.length > 0 &&
                events.past.map((event) => (
                  <div
                    key={event.id}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                  >
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-purple-300 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {formatDateRange(event.start, event.end)}
                      </p>
                      {event.location && (
                        <p className="text-gray-400 text-sm mb-2">
                          {event.location}
                        </p>
                      )}
                      {(event.summary || event.description) && (
                        <p className="text-gray-400 text-sm">
                          {truncateText(event.summary || event.description)}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              }

              {/* Static manual events (always show) */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/gni-logo.jpg"
                  alt="Nostrbama 2025"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Nostrbama
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">July 15-17, 2025</p>
                  <p className="text-gray-400 text-sm mb-2">Mobile, AL</p>
                  <p className="text-gray-400 text-sm">
                    A grassroots Nostr conference bringing together developers,
                    creators, and enthusiasts for workshops, talks, and networking.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/gni-logo.jpg"
                  alt="Bitcoin 2025 / Nos Vegas"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Bitcoin 2025 / Nos Vegas
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">May 27-29, 2025</p>
                  <p className="text-gray-400 text-sm mb-2">Las Vegas, NV</p>
                  <p className="text-gray-400 text-sm">
                    The world's largest Bitcoin conference, featuring a dedicated
                    Nostr track and community gathering.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/gni-logo.jpg"
                  alt="Launch Music Conference & Festival"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Launch Music Conference & Festival
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">April 17-20, 2025</p>
                  <p className="text-gray-400 text-sm mb-2">Lancaster, PA</p>
                  <p className="text-gray-400 text-sm">
                    A music conference celebrating the Value-for-Value model and
                    showcasing artists building sustainable careers.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/nostr-booth2.jpg"
                  alt="BTC Prague 2024"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    BTC Prague 2024
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">June 2024</p>
                  <p className="text-gray-400 text-sm">
                    We brought Nostr to one of Europe's premier Bitcoin
                    conferences, connecting with thousands of attendees.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/nostr-booth-riga.jpg"
                  alt="Baltic Honeybadger 2024"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Baltic Honeybadger 2024
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">August 2024</p>
                  <p className="text-gray-400 text-sm">
                    GNI represented Nostr in Riga, Latvia, at this legendary
                    Bitcoin-only conference.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/nostr-valley.jpg"
                  alt="Nostr Valley 2024"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Nostr Valley 2024
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">October 2024</p>
                  <p className="text-gray-400 text-sm">
                    A community-focused Nostr conference in Silicon Valley
                    featuring developer talks and workshops.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/satsbysw.jpg"
                  alt="Sats By SW 2024"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Sats By SW 2024
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">December 2024</p>
                  <p className="text-gray-400 text-sm">
                    A Bitcoin and Nostr meetup series across the southwestern
                    United States.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Local Meetups */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            Fostering Local Connections: Nostr Meetups
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-6">
              Local meetups are the heart of the Nostr community. Whether you're
              in a major city or a small town, we encourage you to start or join
              a Nostr meetup. GNI is here to help with resources, promotional
              support, and connections.
            </p>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out"
              >
                Contact Us About Your Meetup
              </Link>
            </div>
          </div>
        </section>

        {/* Partner with GNI */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            Partner with GNI for Your Next Nostr Event
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-6">
              Planning a conference, meetup, or community event? Let's
              collaborate! GNI can help with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <strong className="text-purple-300">
                  Expertise & Content Curation:
                </strong>{" "}
                Speakers, panel discussions, and workshop topics
              </li>
              <li>
                <strong className="text-purple-300">Network Connections:</strong>{" "}
                Introductions to developers, creators, and Nostr projects
              </li>
              <li>
                <strong className="text-purple-300">Promotional Support:</strong>{" "}
                Amplify your event across Nostr and beyond
              </li>
              <li>
                <strong className="text-purple-300">
                  Organizational Guidance:
                </strong>{" "}
                Best practices for hosting successful Nostr events
              </li>
            </ul>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out"
              >
                Contact Us About Your Event
              </Link>
            </div>
          </div>
        </section>

        {/* Submit Event */}
        <section>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Know About a Nostr Event?
            </h2>
            <p className="text-gray-300 mb-6">
              Help us keep the community informed. Submit your event information
              and we'll help spread the word!
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out"
            >
              Submit Event Information
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;
