import { useSeoMeta } from "@unhead/react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";

const GetStarted = () => {
  useSeoMeta({
    title: "Get Started with Nostr - Simple Guide",
    description:
      "New to Nostr? Follow our simple step-by-step guide to create your identity and join the decentralized social network.",
  });

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">
          Get Started with Nostr: Your Simple Guide
        </h1>

        <p className="text-lg text-gray-300 mb-12">
          Welcome! This guide will walk you through the essentials of getting
          started with Nostr—from generating your identity to choosing an app
          and finding your community.
        </p>

        {/* Step 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            Step 1: Get Your Nostr Identity (Keys)
          </h2>
          <p className="text-gray-300 mb-4">
            On Nostr, you control your identity with a pair of cryptographic
            keys:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>
              <strong className="text-purple-300">Public Key (npub...):</strong>{" "}
              Your public address that others use to find and follow you.
            </li>
            <li>
              <strong className="text-purple-300">Private Key (nsec...):</strong>{" "}
              Your secret password. Never share this with anyone!
            </li>
          </ul>

          <div className="bg-red-900/30 border-l-4 border-red-600 p-4 rounded-lg mb-6">
            <p className="text-red-200 font-bold mb-2">
              CRITICAL SECURITY WARNING:
            </p>
            <p className="text-red-200 mb-3">
              <strong>NEVER</strong> share your Private Key (<code>nsec</code>)
              with anyone or paste it into websites. Treat it like the master key
              to your entire digital identity on Nostr.
            </p>
            <ul className="list-disc list-inside text-red-200 space-y-1">
              <li>
                If someone gets your <code>nsec</code>, they can impersonate you
                completely
              </li>
              <li>
                If you lose your <code>nsec</code>, you lose your account forever
                - there is no password reset
              </li>
              <li>
                Write it down on paper and store it somewhere safe (like a
                password manager or encrypted backup)
              </li>
              <li>
                Using a dedicated signer app (Option 2) minimizes the risk of
                accidentally exposing your private key
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-purple-300 mb-4">
            Two Paths to Get Your Keys:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-300 mb-3">
                Option 1: Generate Keys in an App (Easier)
              </h4>
              <p className="text-gray-300 mb-4">
                Download a Nostr client and create your account directly. The
                app will generate your keys for you:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  <a
                    href="https://apps.apple.com/ca/app/damus/id1628663131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    <strong>Damus</strong>
                  </a>{" "}
                  (iOS)
                </li>
                <li>
                  <a
                    href="https://primal.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    <strong>Primal</strong>
                  </a>{" "}
                  (iOS, Android, Web)
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    <strong>Amethyst</strong>
                  </a>{" "}
                  (Android)
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4">
                <strong>Important:</strong> After creating your account, make
                sure to back up your private key (nsec) immediately!
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-300 mb-3">
                Option 2: Use a Signer First (Recommended for Security)
              </h4>
              <p className="text-gray-300 mb-4">
                A signer is a dedicated app that manages your keys securely and
                lets you log into multiple Nostr apps without copying your
                private key:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  <a
                    href="https://nsec.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    <strong>nsec.app</strong>
                  </a>{" "}
                  (Web, cross-platform)
                </li>
                <li>
                  <a
                    href="https://getalby.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    <strong>Alby</strong>
                  </a>{" "}
                  (Browser extension)
                </li>
                <li>
                  <a
                    href="https://github.com/greenart7c3/Amber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    <strong>Amber</strong>
                  </a>{" "}
                  (Android)
                </li>
                <li>
                  <a
                    href="https://apps.apple.com/us/app/nostore/id1666553677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    <strong>Nostore</strong>
                  </a>{" "}
                  (Browser extension)
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4">
                <strong>How it Works:</strong> Install the signer first → Generate
                your keys <em>within the signer</em> → Back up the private key
                (nsec) shown by the signer → Proceed to Step 2 and choose client
                apps → When logging into clients, choose the option to connect with
                your signer (e.g., "Login with extension" or follow app prompts).
              </p>
              <p className="text-gray-400 text-sm mt-2">
                With a signer, you can log into various Nostr clients safely, and
                your private key never leaves the signer app.
              </p>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            Step 2: Choose Your App (Client)
          </h2>
          <p className="text-gray-300 mb-4">
            Clients are the apps you use to browse Nostr feeds and interact. If
            you chose Option 2 above, you now pick clients to use <em>with</em>{" "}
            your signer. If you chose Option 1, you already have one client, but
            you can now try others using the private key you backed up (ideally by
            importing it into a signer first!).
          </p>

          <h3 className="text-2xl font-semibold text-purple-300 mb-3">
            Popular Clients:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li>
              <strong>
                <a
                  href="https://primal.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Primal
                </a>{" "}
                (Web, iOS, Android)
              </strong>
            </li>
            <li>
              <strong>
                <a
                  href="https://apps.apple.com/ca/app/damus/id1628663131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Damus
                </a>{" "}
                (iOS)
              </strong>
            </li>
            <li>
              <strong>
                <a
                  href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Amethyst
                </a>{" "}
                (Android)
              </strong>
            </li>
            <li>
              <strong>
                <a
                  href="https://ditto.pub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Ditto
                </a>{" "}
                (Web)
              </strong>
            </li>
            <li>
              <strong>
                <a
                  href="https://iris.to/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Iris
                </a>{" "}
                (Web)
              </strong>
            </li>
          </ul>

          <p className="text-gray-300 mb-4">
            Remember to look for the "Login with signer/extension" option when
            using these clients if you used Option 2 for key generation. If you
            used Option 1, you will not need to perform these steps.
          </p>

          <p className="text-gray-300 mb-6">
            When you open a client for the first time, it will usually ask you to
            log in. Choose the option to "use a signer" or "use NIP-07 extension"
            or follow the specific instructions for connecting Amber. The client
            will then ask your signer app to confirm your identity without seeing
            your private key.
          </p>
        </section>

        {/* Step 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            Step 3: Find People & Content
          </h2>
          <p className="text-gray-300 mb-4">
            Nostr is about connections! Once you're logged into a client:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
            <li>
              <strong className="text-purple-300">Use Search:</strong> Most clients
              have a search function. (Primal's Advanced Search is excellent!) Try
              searching for topics or names you're interested in.
            </li>
            <li>
              <strong className="text-purple-300">Explore Directories:</strong>{" "}
              Websites help you find people based on interests or existing social
              media profiles:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  <a
                    href="https://nostr.directory/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Nostr.directory
                  </a>
                </li>
                <li>
                  <a
                    href="https://nostr.band/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Nostr.band
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-purple-300">Follow Us!:</strong> Get started
              by following the{" "}
              <a
                href="https://njump.me/npub195t386gf4f67kg58jw6u6jf8vf9xm5ultrzpgm6em3tr8t046l5q6rgwhq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Grow Nostr Initiative
              </a>{" "}
              and key community members.
            </li>
            <li>
              <strong className="text-purple-300">Create Your Feeds:</strong> Some
              clients have "Feed Marketplaces" showing posts from various feed
              types with diverse content. Build and configure your feeds to your
              liking. You're in control of your attention.
            </li>
          </ul>
        </section>

        {/* Step 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            Step 4: Basic Concepts
          </h2>

          <h3 className="text-2xl font-semibold text-purple-300 mb-3">
            Relays
          </h3>
          <p className="text-gray-300 mb-6">
            Relays are servers that store and distribute Nostr messages. Your
            client connects to multiple relays to send and receive notes. You can
            add or remove relays anytime—giving you control over where your data
            lives.
          </p>

          <h3 className="text-2xl font-semibold text-purple-300 mb-3">
            Zaps ⚡
          </h3>
          <p className="text-gray-300 mb-6">
            Zaps are Bitcoin Lightning payments sent directly through Nostr. It's
            an easy way to support creators and show appreciation for great
            content. To send zaps, you'll need a Lightning wallet integrated with
            your client (like Primal Wallet, Alby, or Strike).
          </p>
        </section>

        {/* CTAs */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4 text-center">
            Ready to Go Deeper?
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/strategy"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out text-center"
            >
              Learn More: Nostr Strategy
            </Link>
            <Link
              to="/case-studies"
              className="inline-block px-6 py-3 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-400 hover:text-gray-900 font-semibold transition duration-150 ease-in-out text-center"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
