import { useSeoMeta } from "@unhead/react";
import { Layout } from "../components/Layout";

const Resources = () => {
  useSeoMeta({
    title: "Nostr Resources & Tools",
    description:
      "A curated list of recommended Nostr clients, signers, directories, relay info, and educational links to help you navigate the Nostr ecosystem.",
  });

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">
          Nostr Resources & Tools
        </h1>

        <p className="text-lg text-gray-300 mb-12">
          A curated collection of apps, tools, and educational resources to help
          you navigate the Nostr ecosystem.
        </p>

        {/* Clients */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            📱 Clients (Apps to Use Nostr)
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Social & Microblogging
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://primal.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Primal
                    </a>
                    :
                  </strong>{" "}
                  Fast, polished, and beginner-friendly
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://damus.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Damus
                    </a>
                    :
                  </strong>{" "}
                  Clean iOS client with a Twitter-like feel
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Amethyst
                    </a>
                    :
                  </strong>{" "}
                  Feature-rich Android client
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://ditto.pub/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Ditto
                    </a>
                    :
                  </strong>{" "}
                  Community & group-focused
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://iris.to/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Iris
                    </a>
                    :
                  </strong>{" "}
                  Simple web-based client
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://olas.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Olas
                    </a>
                    :
                  </strong>{" "}
                  Minimalist, privacy-focused
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Blogging & Long-form
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://habla.news/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Habla.news
                    </a>
                    :
                  </strong>{" "}
                  Long-form blogging on Nostr
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://highlighter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Highlighter
                    </a>
                    :
                  </strong>{" "}
                  Articles with highlighting and annotations
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://yakihonne.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Yakihonne
                    </a>
                    :
                  </strong>{" "}
                  Publication platform with curation
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Audio, Video & V4V
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://wavlake.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Wavlake
                    </a>
                    :
                  </strong>{" "}
                  Music streaming with V4V payments
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://fountain.fm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Fountain
                    </a>
                    :
                  </strong>{" "}
                  Podcast app with zaps and V4V
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://zap.stream/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Zap.stream
                    </a>
                    :
                  </strong>{" "}
                  Live video streaming
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://nostrnests.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Nostr Nests
                    </a>
                    :
                  </strong>{" "}
                  Live audio spaces
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Community & Group Chat
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://flotilla.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Flotilla
                    </a>
                    :
                  </strong>{" "}
                  Group chat and communities
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://chachi.chat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Chachi
                    </a>
                    :
                  </strong>{" "}
                  Chat rooms on Nostr
                </li>
                <li>
                  <strong className="text-purple-300">
                    <a
                      href="https://0xchat.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      0xchat
                    </a>
                    :
                  </strong>{" "}
                  Private messaging
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Management */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            🔑 Key Management & Signers
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://getalby.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Alby
                  </a>
                  :
                </strong>{" "}
                Browser extension for key management and Lightning payments
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://github.com/greenart7c3/Amber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Amber
                  </a>
                  :
                </strong>{" "}
                Android key signer
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://apps.apple.com/us/app/nostore/id1666553677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Nostore
                  </a>
                  :
                </strong>{" "}
                Browser extension signer
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://nsec.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    nsec.app Bunker
                  </a>
                  :
                </strong>{" "}
                Remote signing service
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://github.com/erskingardner/keycast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Keycast
                  </a>
                  :
                </strong>{" "}
                Hardware signer integration
              </li>
            </ul>
          </div>
        </section>

        {/* Relay Software */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            📡 Relay Software & Infrastructure
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://github.com/hoytech/strfry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Strfry
                  </a>
                  :
                </strong>{" "}
                High-performance relay implementation
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://github.com/bitvora/haven"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Haven
                  </a>
                  :
                </strong>{" "}
                Personal relay for sovereign data storage
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://github.com/hzrd149/blossom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Blossom
                  </a>
                  :
                </strong>{" "}
                Media server for images and files
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/96.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    NIP-96
                  </a>
                  :
                </strong>{" "}
                Media upload server specification
              </li>
              <li>
                <strong className="text-purple-300">Third-Party Hosting:</strong>{" "}
                Services like{" "}
                <a
                  href="https://nostr.build"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  nostr.build
                </a>{" "}
                or{" "}
                <a
                  href="https://primal.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Primal
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Directories */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            🔍 Directories, Search & Verification
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://nostr.directory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Nostr.directory
                  </a>
                  :
                </strong>{" "}
                Find users by interests and topics
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://nostr.band"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Nostr.band
                  </a>
                  :
                </strong>{" "}
                Search and analytics for Nostr
              </li>
              <li>
                <strong className="text-purple-300">Primal Advanced Search:</strong>{" "}
                Built into Primal client
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://nostr.watch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Nostr.watch
                  </a>
                  :
                </strong>{" "}
                Relay monitoring and statistics
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/05.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    NIP-05 Identifiers
                  </a>
                  :
                </strong>{" "}
                Verify your domain with username@yourdomain.com - get one at{" "}
                <a
                  href="https://nostrplebs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  nostrplebs.com
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Educational */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            📚 Educational & Technical Resources
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://github.com/nostr-protocol/nips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    NIPs (Nostr Implementation Possibilities)
                  </a>
                  :
                </strong>{" "}
                Technical specifications for Nostr
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://nostr.how"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Nostr.how
                  </a>
                  :
                </strong>{" "}
                Beginner-friendly guides and tutorials
              </li>
              <li>
                <strong className="text-purple-300">Video:</strong>{" "}
                <a
                  href="https://www.youtube.com/watch?v=NVm_jGdwTjQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Nostr Explained by Jack Mallers (Strike CEO)
                </a>
              </li>
              <li>
                <strong className="text-purple-300">Video:</strong>{" "}
                <a
                  href="https://www.youtube.com/watch?v=Qd4Po4i7wvc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Nostr Introduction by Odell
                </a>
              </li>
              <li>
                <strong className="text-purple-300">Video:</strong>{" "}
                <a
                  href="https://www.youtube.com/watch?v=fG1IDm-lQek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  What is Nostr? - Simple Explanation
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Awesome Lists */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            ⭐ Awesome Nostr Lists & Articles
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://github.com/aljazceru/awesome-nostr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Awesome Nostr (GitHub)
                  </a>
                  :
                </strong>{" "}
                Comprehensive list of Nostr projects
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://nostrapps.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Nostr Apps
                  </a>
                  :
                </strong>{" "}
                Curated directory of apps
              </li>
              <li>
                <strong className="text-purple-300">Article:</strong>{" "}
                <a
                  href="https://reason.com/2024/08/13/can-nostr-make-twitters-dreams-come-true/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Can Nostr Make Twitter's Dreams Come True?
                </a>{" "}
                by Alex Gladstein
              </li>
              <li>
                <strong className="text-purple-300">Article:</strong>{" "}
                <a
                  href="https://www.lynalden.com/the-power-of-nostr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  The Power of Nostr
                </a>{" "}
                by Lyn Alden
              </li>
              <li>
                <strong className="text-purple-300">Article:</strong>{" "}
                <a
                  href="https://river.com/learn/what-is-nostr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  What is Nostr?
                </a>{" "}
                by River Financial
              </li>
            </ul>
          </div>
        </section>

        {/* Lightning Wallets */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-6">
            ⚡ Bitcoin Lightning Wallets (for Zaps)
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://primal.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Primal Wallet
                  </a>
                  :
                </strong>{" "}
                Built into Primal client
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://coinos.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Coinos Wallet
                  </a>
                  :
                </strong>{" "}
                Web-based Lightning wallet
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://strike.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Strike
                  </a>
                  :
                </strong>{" "}
                User-friendly Lightning wallet
              </li>
              <li>
                <strong className="text-purple-300">
                  <a
                    href="https://hub.getalby.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Alby Hub
                  </a>
                  :
                </strong>{" "}
                Self-hosted Lightning wallet
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Have a Resource to Share?
          </h2>
          <p className="text-gray-300 mb-6">
            Know of a great Nostr tool or resource we should add? Let us know!
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
