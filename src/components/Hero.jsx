import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import api from "../services/api";

const Hero = ({ setActiveSection }) => {
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  console.log(about);

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
                <span className="text-foreground">Build amazing</span>
                <br />
                <span className="text-primary">digital experiences</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I'm a full-stack developer passionate about creating beautiful,
              functional websites and applications. Let's bring your ideas to
              life.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            <div className="relative h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-bold text-primary/20">
                  <img
                    src={
                      about.imgUrl ||
                      "https://ik.imagekit.io/storybird/images/9d53e2ee-4f54-47ee-9e39-4a6caadf0ef4/0_357297611.webp?tr=q-80"
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
