import { useSeoMeta } from "@unhead/react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";

const Fountain = () => {
  useSeoMeta({
    title: "Case Study: How Fountain Escaped the Walled Garden with Nostr",
    description:
      "Discover how Fountain broke free from traditional podcast app limitations by integrating Nostr, unlocking massive growth and true user ownership.",
  });

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">
          Case Study: How Fountain Escaped the Walled Garden & Unlocked Growth
          with Nostr
        </h1>

        <div className="mb-8">
          <img
            src="/images/fountain.png"
            alt="Fountain App"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* The Challenge */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            The Challenge: Breaking Free from the Social Silo
          </h2>
          <p className="text-gray-300 mb-6">
            Fountain faced the same problem as many innovative platforms: they
            built a social layer within their app, but that meant their users
            were trapped in a walled garden. This created several critical
            limitations:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Limited Reach
              </h3>
              <p className="text-gray-400">
                Fountain's social features only worked within Fountain.
                Podcasters couldn't reach listeners on other platforms, and users
                couldn't interact with the broader podcast community.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Fragmented User Experience
              </h3>
              <p className="text-gray-400">
                Users had to manage separate identities and social graphs across
                multiple podcast apps, making discovery and engagement
                cumbersome.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Platform Risk & Bottlenecks
              </h3>
              <p className="text-gray-400">
                All social data lived on Fountain's servers. If Fountain went
                down or changed policies, users could lose their connections and
                content.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Rising User Demand
              </h3>
              <p className="text-gray-400">
                Both creators and listeners wanted more—more reach, more
                ownership, and the ability to take their audience anywhere.
              </p>
            </div>
          </div>
        </section>

        {/* The Strategic Shift */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            The Strategic Shift: Embracing Nostr for Decentralized Social
          </h2>
          <p className="text-gray-300 mb-6">
            Rather than continuing to build a proprietary social layer, Fountain
            made a bold decision: migrate their social functionality to Nostr,
            the open, decentralized social protocol.
          </p>
          <p className="text-gray-300">
            This meant podcasters and listeners could now use their Nostr
            identity across any Nostr client—not just Fountain. Comments, likes,
            and zaps became interoperable, and users gained true ownership of
            their social graph.
          </p>
        </section>

        {/* The Transformation */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            The Transformation: Benefits Realized
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Massively Increased Reach & Interoperability
              </h3>
              <p className="text-gray-400 mb-4">
                Fountain's content and social interactions now appear on any
                Nostr client—Primal, Damus, Amethyst, and more. Podcasters reach
                listeners across the entire Nostr ecosystem, not just within
                Fountain.
              </p>
              <img
                src="/images/sarah-jade.png"
                alt="Content interoperability"
                className="w-full rounded-lg"
              />
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Enhanced User Experience & Retention
              </h3>
              <p className="text-gray-400 mb-4">
                Users no longer need separate accounts for podcasting and social
                media. One Nostr identity works everywhere, making onboarding
                seamless and reducing friction.
              </p>
              <img
                src="/images/my-friend-jimi.png"
                alt="User experience"
                className="w-full rounded-lg"
              />
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                True User Ownership & Control
              </h3>
              <p className="text-gray-400">
                Listeners and creators own their identities and social
                connections. If they ever leave Fountain, they take their
                audience with them. This builds trust and long-term loyalty.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Future-Proofing the Platform
              </h3>
              <p className="text-gray-400">
                By building on an open standard, Fountain doesn't have to
                reinvent the social wheel. They can focus on what they do
                best—delivering great podcast experiences—while the broader Nostr
                community innovates on social features.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Tapping into Innovation
              </h3>
              <p className="text-gray-400">
                Every improvement to Nostr clients, relay infrastructure, and
                social features benefits Fountain automatically. They're part of
                a growing, collaborative ecosystem.
              </p>
              <img
                src="/images/ben-wehrman.png"
                alt="Innovation ecosystem"
                className="w-full rounded-lg mt-4"
              />
            </div>
          </div>
        </section>

        {/* The Blueprint */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            The Blueprint: What Nostr Can Do for Your Platform
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Attract a Broader Audience
              </h3>
              <p className="text-gray-400">
                Connect with users across the entire Nostr ecosystem, not just
                your app.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Boost Retention & Engagement
              </h3>
              <p className="text-gray-400">
                Give users ownership and portability—they'll stay because they
                want to, not because they're locked in.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Integrate at Your Own Pace
              </h3>
              <p className="text-gray-400">
                Start with basic Nostr login, then add comments, zaps, and more
                as you grow.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Foster Innovation
              </h3>
              <p className="text-gray-400">
                Let the community build on top of your platform using open
                standards.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Foundation */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            Technical Foundation: Key Nostr Features (NIPs)
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              Fountain's integration leverages several key Nostr Implementation
              Possibilities (NIPs):
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                <strong className="text-purple-300">NIP-01:</strong> Basic
                protocol for events and identities
              </li>
              <li>
                <strong className="text-purple-300">NIP-05:</strong> Verification
                via domain names
              </li>
              <li>
                <strong className="text-purple-300">NIP-07:</strong> Browser
                extension for signing
              </li>
              <li>
                <strong className="text-purple-300">NIP-23:</strong> Long-form
                content
              </li>
              <li>
                <strong className="text-purple-300">NIP-25:</strong> Reactions
                (likes)
              </li>
              <li>
                <strong className="text-purple-300">NIP-57:</strong> Lightning
                Zaps
              </li>
              <li>
                <strong className="text-purple-300">NIP-58:</strong> Badges and
                awards
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Discuss Your Nostr Integration Strategy
          </h2>
          <p className="text-gray-300 mb-6">
            Want to explore how Nostr can transform your platform? Let's talk
            about your use case and build a roadmap together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Fountain;
