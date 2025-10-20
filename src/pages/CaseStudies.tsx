import { useSeoMeta } from "@unhead/react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  useSeoMeta({
    title: "Nostr Case Studies",
    description:
      "See real-world examples of how creators and platforms are using Nostr to overcome platform restrictions and build thriving communities.",
  });

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">
          Nostr Case Studies
        </h1>

        <p className="text-lg text-gray-300 mb-12">
          Discover how real creators and businesses are leveraging Nostr to
          overcome the limitations of traditional platforms, own their
          audiences, and unlock new monetization opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fountain Case Study */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/images/fountain.png"
              alt="Fountain App"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">
                Fountain App
              </h2>
              <p className="text-gray-400 mb-6">
                How Fountain broke free from the walled garden of traditional
                podcast apps by integrating Nostr, dramatically expanding their
                reach and enabling true user ownership.
              </p>
              <Link
                to="/fountain"
                className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out"
              >
                Read Fountain Study →
              </Link>
            </div>
          </div>

          {/* Ainsley Costello Case Study */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/images/ainsleycostello.jpg"
              alt="Ainsley Costello"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">
                Ainsley Costello
              </h2>
              <p className="text-gray-400 mb-6">
                How this Nashville singer-songwriter is building a sustainable
                music career using the Value-for-Value model on Nostr platforms
                like Wavlake and Fountain—leaving Spotify behind.
              </p>
              <Link
                to="/ainsley-costello"
                className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out"
              >
                Read Ainsley's Story →
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Context */}
        <div className="mt-12 bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Why Case Studies Matter
          </h2>
          <p className="text-gray-300 mb-4">
            These aren't just success stories—they're blueprints. Each case
            study demonstrates practical applications of Nostr's core
            principles:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong className="text-purple-300">Audience Ownership:</strong>{" "}
              Your followers belong to you, not the platform
            </li>
            <li>
              <strong className="text-purple-300">
                Direct Monetization:
              </strong>{" "}
              Value-for-Value payments via Bitcoin Lightning
            </li>
            <li>
              <strong className="text-purple-300">
                Censorship Resistance:
              </strong>{" "}
              No single entity can silence you or shut you down
            </li>
            <li>
              <strong className="text-purple-300">Interoperability:</strong>{" "}
              Reach users across multiple clients and platforms
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-gray-300 mb-6">
            Learn how to implement these strategies for your own project or
            business.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/strategy"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold transition duration-150 ease-in-out"
            >
              Explore Strategies
            </Link>
            <Link
              to="/get-started"
              className="inline-block px-6 py-3 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-400 hover:text-gray-900 font-semibold transition duration-150 ease-in-out"
            >
              Get Started with Nostr
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;
