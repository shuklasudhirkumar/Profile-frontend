import React from "react";
import { Mail, Linkedin, Github, Twitter, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">Sudhirkumar Shukla</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com/shuklasudhirkumar"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/shuklasudhirkumar"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
