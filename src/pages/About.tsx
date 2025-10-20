import { useSeoMeta } from "@unhead/react";
import { Layout } from "../components/Layout";
import { useNostrProfiles } from "../hooks/useNostrProfiles";

// Team member npubs - update these with the correct values
const TEAM_MEMBERS = [
  {
    npub: "npub18ams6ewn5aj2n3wt2qawzglx9mr4nzksxhvrdc4gzrecw7n5tvjqctp424",
    role: "Co-Founder",
  },
  {
    npub: "npub1hqaz3dlyuhfqhktqchawke39l92jj9nt30dsgh2zvd9z7dv3j3gqpkt56s",
    role: "Co-Founder",
  },
  {
    npub: "npub1a6c3jcdj23ptzcuflek8a04f4hc2cdkat95pd6n3r8jjrwyzrw0q43lfrr",
    role: "Co-Founder",
  },
];

const About = () => {
  useSeoMeta({
    title: "About Grow Nostr Initiative",
    description:
      "Learn about the Grow Nostr Initiative's mission to foster growth, adoption, and understanding of Nostr through decentralized, censorship-resistant communication networks.",
  });

  const { data: profiles, isLoading } = useNostrProfiles(
    TEAM_MEMBERS.map((m) => m.npub)
  );

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">
          About Grow Nostr Initiative
        </h1>

        <div className="prose prose-invert max-w-none">
          <div className="mb-12">
            <img
              src="/images/nostr-booth.jpg"
              alt="Nostr booth at conference"
              className="float-right ml-6 mb-4 w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              The Grow Nostr Initiative (GNI) is dedicated to fostering growth,
              adoption, and understanding of Nostr. We believe in the power of
              decentralized, censorship-resistant communication networks to
              empower individuals and communities worldwide.
            </p>
          </div>

          <div className="clear-both mb-12">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Our Goals
            </h2>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>
                  <strong className="text-purple-300">
                    Grow the Nostr Community:
                  </strong>{" "}
                  Expand awareness and adoption through education, resources,
                  and grassroots engagement.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>
                  <strong className="text-purple-300">
                    Host & Support Events:
                  </strong>{" "}
                  Organize and sponsor local meetups, educational sessions, and
                  community gatherings.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>
                  <strong className="text-purple-300">
                    Facilitate Conferences:
                  </strong>{" "}
                  Bring Nostr to major Bitcoin and tech conferences, showcasing
                  its potential to a global audience.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>
                  <strong className="text-purple-300">
                    Increase Visibility:
                  </strong>{" "}
                  Promote Nostr's benefits and use cases to individuals,
                  creators, businesses, and developers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>
                  <strong className="text-purple-300">
                    Promote Innovation:
                  </strong>{" "}
                  Support developers and entrepreneurs building on Nostr by
                  sharing knowledge and connecting talent.
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-300 mb-6">
              Meet the Team
            </h2>
            {isLoading ? (
              <div className="text-center text-gray-400 py-8">
                Loading team profiles from Nostr...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {profiles?.map((profile, index) => {
                  const member = TEAM_MEMBERS[index];
                  const displayName =
                    profile.display_name ||
                    profile.displayName ||
                    profile.name ||
                    "Nostrich";
                  const username = profile.name || profile.nip05?.split("@")[0] || "nostr";

                  return (
                    <div key={profile.pubkey} className="text-center">
                      <img
                        src={
                          profile.picture ||
                          `https://robohash.org/${profile.pubkey}?set=set4`
                        }
                        alt={displayName}
                        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover bg-gray-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://robohash.org/${profile.pubkey}?set=set4`;
                        }}
                      />
                      <h3 className="text-xl font-semibold text-purple-300 mb-2">
                        {displayName}
                      </h3>
                      <p className="text-gray-400 mb-2">{member.role}</p>
                      <a
                        href={`https://njump.me/${profile.npub}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 text-sm"
                      >
                        @{username}
                      </a>
                      {profile.nip05 && (
                        <p className="text-gray-500 text-xs mt-1">
                          ✓ {profile.nip05}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
