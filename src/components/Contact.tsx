"use client";

import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    if (email.trim() === "" || message.trim() === "") {
      alert("Please fill out both fields before sending.");
      return;
    }

    const mailtoLink = `mailto:support@example.com?subject=Contact Us&body=${encodeURIComponent(
      `From: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-gray-100 py-20 px-6 rounded-md">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-lg mb-8">
          Have any questions or feedback? Send us an email, and we’ll get back
          to you as soon as possible.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Message Textarea */}
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md text-gray-700 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Send Button */}
          <button
            onClick={handleSendEmail}
            className="w-full bg-blue-500 text-white font-bold py-4 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;