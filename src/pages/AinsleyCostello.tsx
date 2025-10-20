import { useSeoMeta } from "@unhead/react";
import { Layout } from "../components/Layout";

const AinsleyCostello = () => {
  useSeoMeta({
    title: "Breaking Free from Spotify: Ainsley Costello and Value-for-Value",
    description:
      "How Nashville singer-songwriter Ainsley Costello is building a sustainable music career using the Value-for-Value model on Nostr platforms.",
  });

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">
          Breaking Free from Spotify: Ainsley Costello and the Rise of
          Value-for-Value Music
        </h1>

        <div className="mb-8">
          <img
            src="/images/ainsleycostello.jpg"
            alt="Ainsley Costello"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* The Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            The Problem: Streaming Doesn't Pay the Bills
          </h2>
          <p className="text-gray-300 mb-6">
            Like countless independent artists, Ainsley Costello faced a harsh
            reality: traditional music streaming platforms barely compensate
            musicians. On Spotify, artists earn approximately $0.003 per
            stream—meaning you'd need 333,000 streams to make just $1,000.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-gray-300 text-center text-lg">
              For most independent musicians, making a living from streaming
              alone is nearly impossible. The middlemen take the lion's share,
              and artists are left scrambling for scraps.
            </p>
          </div>
        </section>

        {/* The Shift */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            The Shift: Discovering Value for Value
          </h2>
          <p className="text-gray-300 mb-6">
            Ainsley discovered a different approach: the Value-for-Value (V4V)
            model on Nostr. Instead of earning fractions of a penny per stream,
            she connects directly with fans who support her music with Bitcoin
            Lightning payments—zaps.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                How It Works
              </h3>
              <p className="text-gray-400">
                Ainsley uploads her music to platforms like{" "}
                <strong className="text-purple-300">Wavlake</strong> and{" "}
                <strong className="text-purple-300">Fountain</strong>, both built
                on Nostr. Fans can stream her songs for free, but if they love
                the music, they can send instant Bitcoin payments (zaps) directly
                to her—no middlemen, no delays.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Real-Time, Direct Payments
              </h3>
              <p className="text-gray-400">
                Every zap goes straight to Ainsley via the Bitcoin Lightning
                Network. Fans pay what they feel the music is worth—whether
                that's 10 cents or $10—and Ainsley gets paid instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Real-World Proof */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            Real-World Proof: Performing at Antone's & First Avenue
          </h2>
          <p className="text-gray-300 mb-6">
            Ainsley's success with V4V isn't theoretical—it's real. In December
            2024, she performed at iconic venues including{" "}
            <strong className="text-purple-300">Antone's Nightclub</strong> in
            Austin, Texas, and{" "}
            <strong className="text-purple-300">First Avenue</strong> in
            Minneapolis, Minnesota.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <img
                src="/images/ainsley-austin.jpg"
                alt="Ainsley Costello at Antone's"
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-400 text-center">
                Ainsley at Antone's, Austin
              </p>
            </div>
            <div>
              <img
                src="/images/ainsley-austin2.jpg"
                alt="V4V Showcase"
                className="w-full rounded-lg shadow-lg mb-2"
              />
              <p className="text-sm text-gray-400 text-center">
                V4V Showcase Performance
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300">
              These weren't just any gigs—they were{" "}
              <strong className="text-purple-300">V4V showcases</strong>,
              demonstrating live how the Value-for-Value model empowers musicians
              to connect with audiences and earn sustainable income from their
              craft.
            </p>
          </div>
        </section>

        {/* The Future */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            The Future: Why More Artists Are Making the Switch
          </h2>
          <p className="text-gray-300 mb-6">
            Ainsley's story is part of a growing movement. Independent artists
            worldwide are discovering that V4V on Nostr offers something
            traditional platforms never could:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Direct Fan Support
              </h3>
              <p className="text-gray-400">
                No algorithms determining who sees your music. Fans who love your
                work can support you directly and generously.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                No Middlemen
              </h3>
              <p className="text-gray-400">
                Keep nearly 100% of what you earn. No record labels, no
                distributors taking a cut.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Global Payments
              </h3>
              <p className="text-gray-400">
                Bitcoin Lightning works anywhere in the world. Fans from any
                country can support you instantly.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                Sustainable Income
              </h3>
              <p className="text-gray-400">
                Build a dedicated fanbase that values your work and compensates
                you fairly, creating a sustainable music career.
              </p>
            </div>
          </div>
        </section>

        {/* Blueprint */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            Ainsley Costello: A Blueprint for Independent Artists
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              Ainsley's approach is simple but powerful:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>
                Upload music to{" "}
                <strong className="text-purple-300">Wavlake</strong> (music
                streaming) and{" "}
                <strong className="text-purple-300">Fountain</strong> (podcasts &
                music)
              </li>
              <li>
                Build a presence on Nostr using her Nostr identity to connect
                with fans across clients
              </li>
              <li>
                Engage directly with listeners, sharing updates, behind-the-scenes
                content, and live performance info
              </li>
              <li>
                Receive zaps in real-time as fans stream her music and support
                her work
              </li>
              <li>
                Perform at V4V-focused events to demonstrate the model and grow
                her audience
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4 text-center">
            Ready to Take Back Control of Your Music?
          </h2>
          <p className="text-gray-300 mb-6 text-center">
            Whether you're a musician, podcaster, or creator, the Value-for-Value
            model on Nostr can transform how you connect with your audience and
            earn from your work.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
            <a
              href="https://wavlake.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out text-center"
            >
              Explore Wavlake
            </a>
            <a
              href="https://fountain.fm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out text-center"
            >
              Check Out Fountain
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Also check out:{" "}
              <a
                href="https://phantompowermusic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Phantom Power Music
              </a>{" "}
              and{" "}
              <a
                href="https://tunestr.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Tunestr
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AinsleyCostello;
