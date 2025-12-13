"use client";
import { useState } from "react";
import { Button } from "./ui/button";

const validateData = (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const { name, email, message } = data;

  if (!name.trim() || !email.trim() || !message.trim()) {
    throw new Error("All fields are required.");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid Email");
  }
};

export function PhoneContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      validateData(formData);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (_error) {
      console.error("Error submitting form");
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] ">
        <img
          src="/phone.png"
          alt="Phone mockup"
          className="w-full h-auto relative z-10 pointer-events-none"
        />
        <div
          className="absolute inset-0 flex items-center justify-center mx-[4%] mt-[2.5%] mb-[4%] rounded-[25px] bg-gradient-to-b from-[#C04848] 
    to-[#480048]"
        >
          <div className="w-full h-full flex flex-col justify-center px-3 sm:px-4 md:px-6 py-4 overflow-y-auto">
            <h1 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-3 sm:mb-4 text-center">
              Interested in working together? Let’s talk
            </h1>

            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-background/80 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground transition-all duration-200"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-background/80 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground transition-all duration-200"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  maxLength={150}
                  rows={5}
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-background/80 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground resize-none transition-all duration-200"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-xs sm:text-sm py-1.5 sm:py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-xs text-green-600 dark:text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-destructive text-center">
                  Failed to send message. Try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
