"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "react-simple-typewriter";

type SkillType = {
  [skill: string]: string[];
};

const skills: SkillType[] = [
  {
    Frontend: ["TypeScript", "JavaScript", "React", "Next.js", "TailwindCSS"],
  },
  { Backend: ["Node.js", "Express.js", "Python"] },
  { "Cloud & database": ["Apache Kafka", "Microsoft Azure", "SQLite3"] },
  { Miscellaneous: ["REST API", "OAuth 2.0", "Gen AI", "Grafana", "GitHub"] },
];

export default function Test() {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 md:gap-y-2">
        <div className="text-2xl font-medium md:col-span-2">
          Hey! My name is
        </div>
        <div className="border-2 border-transparent border-b-indigo-500 bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-5xl font-extrabold text-transparent md:col-span-2 md:text-8xl">
          Otso Saarinen
        </div>
        <div className="flex items-center justify-start">
          <div className="text-2xl font-medium">
            ICT engineering student <br /> who likes building stuff with{" "}
            <div className="bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl font-semibold text-transparent sm:block md:inline">
              {"\u200B"}
              <Typewriter
                words={[
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Azure",
                  "Node.js",
                  "TypeScript",
                ]}
                typeSpeed={80}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center md:row-span-3">
          <div className="text-2xl font-medium">My Tech Stack</div>
          <div className="flex flex-row flex-wrap gap-3">
            {skills.map((skilltype, index) => {
              const skillType = Object.keys(skilltype)[0];
              const skillList = skilltype[skillType];

              return (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start gap-1 bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl font-semibold text-transparent"
                >
                  <div>{skillType}</div>
                  {skillList.map((skill, skillIndex) => {
                    return (
                      <Badge
                        key={skillIndex}
                        className="border-indigo-500 text-base"
                        variant="secondary"
                      >
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-start bg-linear-to-r from-sky-500 to-indigo-500 p-2 text-2xl font-semibold text-white hover:cursor-pointer">
          <Link href="/projects">Click here to view my projects</Link>
        </div>
      </div>
    </>
  );
}
