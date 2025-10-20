import { useSeoMeta } from "@unhead/react";
import { Layout } from "../components/Layout";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useSendDM } from "../hooks/useSendDM";

const Contact = () => {
  useSeoMeta({
    title: "Contact Us - Grow Nostr Initiative",
    description:
      "Get in touch with the Grow Nostr Initiative. Send us an encrypted message via Nostr.",
  });

  const { sendDM, isSending, error: dmError } = useSendDM();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nostrAddress: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const getSubjectText = (value: string) => {
    switch (value) {
      case "general":
        return "General inquiry";
      case "meetup":
        return "Start a local meetup";
      case "partner":
        return "Partner with GNI for an event";
      case "other":
        return "Other";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    // Compose the full message with contact details
    const fullMessage = `
Name: ${formData.name}
Email: ${formData.email}
${formData.nostrAddress ? `Nostr: ${formData.nostrAddress}` : ""}
Subject: ${getSubjectText(formData.subject)}

Message:
${formData.message}
    `.trim();

    const success = await sendDM({
      message: fullMessage,
      subject: getSubjectText(formData.subject),
      useAnonymous: true, // Always send anonymously
    });

    if (success) {
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! Your encrypted DM has been sent to GNI. We'll get back to you via email or via Nostr if you provided your Nostr address.",
      });
      setFormData({
        name: "",
        email: "",
        nostrAddress: "",
        subject: "",
        message: "",
      });
    } else if (dmError) {
      setSubmitStatus({
        type: "error",
        message: dmError,
      });
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">
          Contact Us via Nostr
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Your message will be sent as an encrypted Direct Message to our Nostr
          profile. We'll get back to you via the email address you provide.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name <span className="text-red-400">*</span>
            </label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-gray-800 border-gray-700 text-gray-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address <span className="text-red-400">*</span>
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-gray-800 border-gray-700 text-gray-200"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="nostrAddress"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Nostr Address (optional)
            </label>
            <Input
              id="nostrAddress"
              type="text"
              value={formData.nostrAddress}
              onChange={(e) =>
                setFormData({ ...formData, nostrAddress: e.target.value })
              }
              className="w-full bg-gray-800 border-gray-700 text-gray-200"
              placeholder="npub... or username@domain.com"
            />
            <p className="text-sm text-gray-500 mt-1">
              Enter your npub or NIP-05 identifier
            </p>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Subject <span className="text-red-400">*</span>
            </label>
            <Select
              required
              value={formData.subject}
              onValueChange={(value) =>
                setFormData({ ...formData, subject: value })
              }
            >
              <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-gray-200">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="general">General inquiry</SelectItem>
                <SelectItem value="meetup">Start a local meetup</SelectItem>
                <SelectItem value="partner">
                  Partner with GNI for an event
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-gray-800 border-gray-700 text-gray-200 min-h-[150px]"
              placeholder="Your message..."
            />
          </div>

          {submitStatus.type && (
            <div
              className={`p-4 rounded-md ${
                submitStatus.type === "success"
                  ? "bg-green-900/50 text-green-200"
                  : "bg-red-900/50 text-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSending}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Encrypted Message"}
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
