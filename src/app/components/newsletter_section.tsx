import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isPro, setIsPro] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your newsletter logic here
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-xl mx-auto bg-white/80 rounded-2xl shadow-lg px-8 py-10 text-center backdrop-blur-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
          Sign up for our Journey Beyond Newsletter
        </h2>
        <p className="text-gray-700 mb-6">
          The Great Lakes Safaris Journey Beyond newsletter, sent irregularly, roughly once per month, provides updates on our activities and the ‘Great Lakes’ region, including conservation efforts, community initiatives, and new travel experiences.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="flex items-center gap-2 justify-center">
            <input
              type="checkbox"
              checked={isPro}
              onChange={() => setIsPro((v) => !v)}
              className="accent-green-700"
            />
            <span className="text-gray-700">I am a travel professional</span>
          </label>
          <button
            type="submit"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors shadow"
          >
            {submitted ? "Thank you for subscribing!" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;