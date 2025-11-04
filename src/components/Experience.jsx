import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/experiences")
      .then((res) => {
        // Transform the API data
        const transformed = res.data.flatMap((item) =>
          item.works.map((work) => ({
            role: work.name,
            company: work.company,
            period: item.year, // from "year"
            description: work.desc,
            skills: [], // API doesn't have this field, leave empty for now
          }))
        );
        setExperiences(transformed);
      })
      .catch((err) => console.error("Error fetching experiences:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="text-center py-20">Loading experiences...</div>;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A quick look at my work experience and career progression
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <span className="text-sm text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{exp.company}</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              {exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
