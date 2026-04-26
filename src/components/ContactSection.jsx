import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_wn2fu7h",
        "template_uxb4is3",
        formRef.current,
        "FcBw0s8TKG0r7hG9D"
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          formRef.current.reset();
        },
        () => {
          setIsSending(false);
          alert("Failed to send message ❌");
        }
      );
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/melvin-benjamin-b746a022b/",
    },
    {
      icon: Twitter,
      href: "https://x.com/Melvyn__Breeze",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/breeze__mel/",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Have a project in mind? Let’s build something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* Contact Info */}
            <div className="space-y-6">

              <div className="flex gap-4">
                <Mail className="text-primary" />
                <p>melvinbenjamin777@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <Phone className="text-primary" />
                <p>+234 816 692 7834</p>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-primary" />
                <p>Kubwa, Abuja, Nigeria</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Map */}
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Kubwa+Abuja&output=embed"
              width="100%"
              height="260"
              className="rounded-xl"
            />
          </div>

          {/* FORM */}
          <div className="bg-card p-8 rounded-xl shadow-sm">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            {isSent ? (
              <div className="text-green-500 font-medium text-center">
                Message sent successfully 🎉
              </div>
            ) : (
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border rounded-md"
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border rounded-md"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 border rounded-md resize-none"
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-primary text-white py-3 rounded-md"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/2348166927834"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        <MessageCircle />
      </a>
    </section>
  );
};