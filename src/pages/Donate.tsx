import { useSeoMeta } from "@unhead/react";
import { Layout } from "../components/Layout";
import { useState } from "react";
import { Button } from "../components/ui/button";

const Donate = () => {
  useSeoMeta({
    title: "Support the Grow Nostr Initiative",
    description:
      "Help us build a vibrant, free, and open future for communication. Donate Bitcoin to support Nostr community growth and events.",
  });

  const [copiedBitcoin, setCopiedBitcoin] = useState(false);
  const [copiedLightning, setCopiedLightning] = useState(false);

  const bitcoinAddress = "bc1qqth2gy38tam67f4pen83thhf32tv768anz9k7r";
  const lightningAddress = "gni@coinos.io";

  const copyToClipboard = async (text: string, type: "bitcoin" | "lightning") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "bitcoin") {
        setCopiedBitcoin(true);
        setTimeout(() => setCopiedBitcoin(false), 2000);
      } else {
        setCopiedLightning(true);
        setTimeout(() => setCopiedLightning(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">
          Support the Grow Nostr Initiative
        </h1>

        <p className="text-xl text-gray-300 mb-12">
          Help us build a vibrant, free, and open future for communication.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">
            How Your Donation Helps Grow Nostr
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Growing the Nostr Community
              </h3>
              <p className="text-gray-400">
                We produce educational content, support grassroots outreach, and
                connect newcomers with the resources they need to thrive on
                Nostr.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Hosting Events & Meetups
              </h3>
              <p className="text-gray-400">
                From local meetups to large-scale gatherings, your contributions
                help us sponsor and organize community events that bring
                Nostriches together.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Organizing Conferences
              </h3>
              <p className="text-gray-400">
                We plan and facilitate conferences dedicated to advancing Nostr,
                featuring talks, workshops, and networking opportunities for
                developers, creators, and users.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Conference & Expo Presence
              </h3>
              <p className="text-gray-400">
                We bring Nostr to major Bitcoin and tech conferences worldwide,
                showcasing its capabilities and onboarding new users directly at
                the booth.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">
            Choose Your Donation Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">
                Bitcoin (On-Chain ⛓️)
              </h3>
              <div className="mb-4">
                <img
                  src="/images/bitcoin_qr.png"
                  alt="Bitcoin QR Code"
                  className="w-48 h-48 mx-auto mb-4"
                />
              </div>
              <p className="text-sm text-gray-400 mb-2 break-all font-mono">
                {bitcoinAddress}
              </p>
              <Button
                onClick={() => copyToClipboard(bitcoinAddress, "bitcoin")}
                className="mt-4 bg-purple-600 hover:bg-purple-700"
              >
                {copiedBitcoin ? "Copied!" : "Copy Address"}
              </Button>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">
                Bitcoin (Lightning ⚡)
              </h3>
              <div className="mb-4">
                <img
                  src="/images/lightning_qr.png"
                  alt="Lightning QR Code"
                  className="w-48 h-48 mx-auto mb-4"
                />
              </div>
              <p className="text-sm text-gray-400 mb-2 font-mono">
                {lightningAddress}
              </p>
              <Button
                onClick={() => copyToClipboard(lightningAddress, "lightning")}
                className="mt-4 bg-purple-600 hover:bg-purple-700"
              >
                {copiedLightning ? "Copied!" : "Copy Lightning Address"}
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-lg text-gray-300">
            Every satoshi counts! Your support fuels the open, decentralized
            future of social communication.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Thank you for believing in Nostr and supporting the Grow Nostr
            Initiative.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
