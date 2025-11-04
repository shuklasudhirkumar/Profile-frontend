import React, { useState } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   setSubmitted(true);
  //   setFormData({ name: "", email: "", message: "" });
  //   setTimeout(() => setSubmitted(false), 3000);
  // };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and
            opportunities
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out to me about any project or collaboration
                opportunity. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:shuklasudhirkumar2000@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                shuklasudhirkumar2000@gmail.com
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/shuklasudhirkumar"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              {/* <a
                href="https://twitter.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a> */}
            </div>
          </div>

          {/* Contact Form */}
          {/* <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
