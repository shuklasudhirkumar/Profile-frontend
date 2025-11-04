import React, { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Twitter, PhoneCallIcon } from "lucide-react";
import api from "../services/api";

const Contact = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    api
      .get("/about")
      .then((res) => {
        setAbout(res.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

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
              <a
                href="tel: +91 8624091241"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneCallIcon className="w-5 h-5" />
                +91 8624091241
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-2 gap-6 text-center bg-background border border-border rounded-2xl p-8 shadow-sm">
            <div>
              <h4 className="text-3xl font-bold text-primary">1+</h4>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">5+</h4>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">10+</h4>
              <p className="text-muted-foreground">Technologies</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">100%</h4>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
