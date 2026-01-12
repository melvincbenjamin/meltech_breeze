import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Twitch,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useRef, useState } from "react";

export const ContactSection = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    toast.loading("Sending message...", { id: "contactToast" });

    const form = formRef.current;
    const data = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/melvinbenjamin777@gmail.com",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success(
          "Thank you for reaching out to me, I will get back to you shortly",
          { id: "contactToast" }
        );
        form.reset();
      } else {
        toast.error("Failed to send message ❌", { id: "contactToast" });
      }
    } catch (error) {
      toast.error("Failed to send message ❌", { id: "contactToast" });
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/melvin-benjamin-b746a022b/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/Melvyn__Breeze",
      label: "Twitter",
    },
    {
      icon: Twitch,
      href: "https://www.twitch.tv/settings/profile",
      label: "Twitch",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/breeze__mel/",
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <Toaster position="top-right" />

      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:melvinbenjamin777@gmail.com"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      melvinbenjamin777@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+2348166927834"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      +234 816 692 7834
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Maryland, Ikeja, Lagos State.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
  {/* REQUIRED: FormSubmit settings */}
  <input type="hidden" name="_subject" value="New Contact Message 🚀" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_captcha" value="false" />

  {/* Optional but recommended */}
  <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I’ll get back to you shortly." />

  <input
    type="text"
    name="name"
    required
    placeholder="Your Name"
    className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary"
  />

  <input
    type="email"
    name="email"
    required
    placeholder="Your Email"
    className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary"
  />

  <textarea
    name="message"
    rows="4"
    required
    placeholder="Tell me about your project..."
    className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary resize-none"
  />

  <button
    type="submit"
    disabled={isSending}
    className={`w-full py-3 rounded-md font-medium transition ${
      isSending
        ? "bg-primary/70 cursor-not-allowed"
        : "bg-primary hover:opacity-90 text-white"
    }`}
  >
    {isSending ? "Sending..." : "Send Message"}
  </button>
</form>

          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2348166927834"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </section>
  );
};
