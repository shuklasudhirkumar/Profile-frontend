import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Skills() {
  const [skillCategories, setSkillCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/skills")
      .then((res) => {
        const skills = res.data;

        // Group skills by bgColor (Frontend, Backend, Tools, etc.)
        const grouped = skills.reduce((acc, skill) => {
          const categoryName = formatCategoryName(skill.bgColor);
          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }
          acc[categoryName].push(skill.name);
          return acc;
        }, {});

        // Convert object → array to match original UI structure
        const formatted = Object.entries(grouped).map(([name, skills]) => ({
          name,
          skills,
        }));

        setSkillCategories(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
        setLoading(false);
      });
  }, []);

  // Utility function to standardize category names
  const formatCategoryName = (name) => {
    if (!name) return "Others";
    switch (name.toLowerCase()) {
      case "frontend":
        return "Frontend";
      case "backend":
        return "Backend";
      case "tools":
      case "others":
      case "tools & others":
        return "Tools & Others";
      default:
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
  };

  if (loading)
    return <div className="text-center py-20">Loading skills...</div>;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I specialize in modern web technologies and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
