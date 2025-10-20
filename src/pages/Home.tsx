import { useSeoMeta } from "@unhead/react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const quotes = [
  {
    text: "Nostr takes the digital public square out of the hands of corporations.",
    author: "Lyn Alden",
    link: "https://njump.me/npub1a2cww4kn9wqte4ry70vyfwqyqvpswksna27rtxd8vty6c74era8sdcw83a",
    handle: "@lyn",
  },
  {
    text: "Zaps represent the only fundamentally new innovation in social media.",
    author: "Jack Dorsey",
    link: "https://njump.me/npub1sg6plzptd64u62a878hep2kev88swjh3tw00gjsfl8f237lmu63q0uf63m",
    handle: "@jack",
  },
  {
    text: "I feel like I'm looking at the future.",
    author: "Edward Snowden",
    link: "https://njump.me/npub1sn0wdenkukak0d9dfczzeacvhkrgz92ak56egt7vdgzn8pv2wfqqhrjdv9",
    handle: "@snowden",
  },
  {
    text: "Nostr is only necessary because our existing internet is so broken.",
    author: "Alex Gladstein",
    link: "https://njump.me/npub1trr5r2nrpsk6xkjk5a7p6pfcryyt6yzsflwjmz6r7uj7lfkjxxtq78hdpu",
    handle: "@gladstein",
  },
];

const Home = () => {
  useSeoMeta({
    title: "Grow Nostr Initiative",
    description:
      "Empowering the future of decentralized social communication through community initiatives, education, and outreach. Help us grow nostr by fostering innovation and expanding the nostr protocol to unlock its full potential.",
  });

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToQuote = (index: number) => {
    setCurrentQuote(index);
  };

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 px-4">
        <div className="w-48 h-48 mx-auto mb-4">
          <img
            src="/images/grow_nostr_initiative-logo.svg"
            alt="Grow Nostr Initiative Logo"
            className="w-48 h-48 mx-auto"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-purple-400 mt-8 mb-6">
          Grow Nostr Initiative
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300 mb-10">
          Empowering the future of decentralized social communication through
          community initiatives, education, and outreach. Help us build a
          freer, more open internet on Nostr.
        </p>
        <div className="flex flex-col space-y-4 items-center md:flex-row md:space-y-0 md:space-x-4 md:justify-center">
          <Link
            to="/get-started"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold text-lg transition duration-150 ease-in-out no-underline w-full md:w-auto"
          >
            Get Started with Nostr
          </Link>
          <a
            href="#explore-sections"
            className="inline-block px-8 py-3 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-400 hover:text-gray-900 font-semibold text-lg transition duration-150 ease-in-out no-underline w-full md:w-auto"
          >
            Explore Resources
          </a>
        </div>
      </section>

      {/* Why Nostr Snippet */}
      <section className="py-12 bg-gray-800 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            Take Back Control
          </h2>
          <p className="text-lg text-gray-300">
            Nostr is more than just social media – it's an open protocol putting{" "}
            <span className="font-semibold text-purple-400">you</span> in charge
            of your identity, audience, and experience online. Free from
            censorship and corporate control.
            <Link
              to="/get-started"
              className="text-purple-400 hover:text-purple-200 font-medium underline ml-2"
            >
              Learn More →
            </Link>
          </p>
        </div>
      </section>

      {/* Cycling Quotes Section */}
      <section className="py-16 md:py-20 bg-gray-900 px-4 relative">
        <h2 className="text-3xl font-semibold text-purple-400 mb-10 text-center">
          Voices from the Network
        </h2>
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="relative h-48 overflow-hidden">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentQuote
                    ? "opacity-100"
                    : "opacity-0 hidden"
                }`}
              >
                <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-4">
                  "{quote.text}"
                </blockquote>
                <cite className="block text-base text-gray-400 not-italic">
                  — {quote.author} (
                  <a
                    href={quote.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    {quote.handle}
                  </a>
                  )
                </cite>
              </div>
            ))}
          </div>
          <button
            onClick={prevQuote}
            className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-purple-400 z-10"
            aria-label="Previous quote"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={nextQuote}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-purple-400 z-10"
            aria-label="Next quote"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <div className="flex justify-center space-x-2 mt-6">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToQuote(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentQuote ? "bg-purple-400" : "bg-gray-600"
                } hover:bg-gray-500`}
                aria-label={`Go to quote ${index + 1}`}
                aria-current={index === currentQuote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content Showcase Section */}
      <section id="explore-sections" className="py-16 md:py-20 bg-gray-800 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-purple-400 mb-10 text-center">
            Dive Deeper
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col hover:bg-gray-700 transition duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Get Started
              </h3>
              <p className="text-gray-400 text-sm flex-grow mb-4">
                New to Nostr? Follow our simple step-by-step guide to create
                your identity and join the network.
              </p>
              <Link
                to="/get-started"
                className="self-start text-purple-400 hover:text-purple-200 font-medium text-sm no-underline"
              >
                Start Here →
              </Link>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col hover:bg-gray-700 transition duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Strategy Guide
              </h3>
              <p className="text-gray-400 text-sm flex-grow mb-4">
                For creators & businesses: Learn how to leverage Nostr for
                audience ownership, V4V monetization, and sovereign communities.
              </p>
              <Link
                to="/strategy"
                className="self-start text-purple-400 hover:text-purple-200 font-medium text-sm no-underline"
              >
                Explore Strategies →
              </Link>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col hover:bg-gray-700 transition duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Case Studies
              </h3>
              <p className="text-gray-400 text-sm flex-grow mb-4">
                See real-world examples of how musicians like Ainsley Costello
                and platforms like Fountain are succeeding with Nostr.
              </p>
              <Link
                to="/case-studies"
                className="self-start text-purple-400 hover:text-purple-200 font-medium text-sm no-underline"
              >
                Read Success Stories →
              </Link>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col hover:bg-gray-700 transition duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Events & Collaboration
              </h3>
              <p className="text-gray-400 text-sm flex-grow mb-4">
                Find out where GNI is participating, learn about past events,
                and discover how to partner with us for your Nostr event.
              </p>
              <Link
                to="/events"
                className="self-start text-purple-400 hover:text-purple-200 font-medium text-sm no-underline"
              >
                View Events & Partner →
              </Link>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col hover:bg-gray-700 transition duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Tools & Resources
              </h3>
              <p className="text-gray-400 text-sm flex-grow mb-4">
                A curated list of recommended Nostr clients, signers,
                directories, relay info, and educational links.
              </p>
              <Link
                to="/resources"
                className="self-start text-purple-400 hover:text-purple-200 font-medium text-sm no-underline"
              >
                Find Resources →
              </Link>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col hover:bg-gray-700 transition duration-200 ease-in-out">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Support GNI
              </h3>
              <p className="text-gray-400 text-sm flex-grow mb-4">
                Help fuel community growth, events, and outreach. Support the
                Grow Nostr Initiative with a Bitcoin donation.
              </p>
              <Link
                to="/donate"
                className="self-start text-purple-400 hover:text-purple-200 font-medium text-sm no-underline"
              >
                Donate Now →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
