import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProjectItem = {
  Title: string;
  Description: string;
  GitHub: string;
  Badges: string[];
};

type ProjectType = {
  [project: string]: ProjectItem[];
};

const projects: ProjectType = {
  Klemmari: [
    {
      Title: "AI assistant for web application",
      Description:
        "A web application featuring a GPT-4o-powered chatbot that assists users with settings adjustments, navigation, and answering questions. The language model is built using a RAG (Retrieval-Augmented Generation) model for optimal responses and is controlled through Microsoft Azure.",
      GitHub: "https://github.com/otsosaarinen/klemmari",
      Badges: [
        "Microsoft Azure",
        "Generative AI",
        "OpenAI",
        "Python",
        "React",
        "JavaScript",
      ],
    },
  ],
  Thesis: [
    {
      Title:
        "Real-time patient data collection and analysis using the Apache Kafka platform",
      Description:
        "My thesis focuses on real-time patient data collection and analysis using the Apache Kafka platform. As part of the research, I developed a prototype for healthcare that integrates Apache Kafka, Python, InfluxDB, and Grafana to enable real-time health data visualization.",
      GitHub: "https://github.com/otsosaarinen/thesis",
      Badges: [
        "Apache Kafka",
        "Python",
        "InfluxDB",
        "Grafana",
        "Real-time Analytics",
      ],
    },
  ],
  "Spotify Web Controller": [
    {
      Title: "Web controller for Spotify",
      Description:
        "A web application that allows users to control their Spotify playback. It utilizes the Spotify Developer API for managing playback, with user authentication handled via the OAuth 2.0 protocol.",
      GitHub: "https://github.com/otsosaarinen/spotify-web-controller",
      Badges: [
        "TypeScript",
        "Spotify API",
        "REST API",
        "OAuth 2.0",
        "React",
        "Tailwind CSS",
      ],
    },
  ],
  "9ways": [
    {
      Title: "Real-time transportation application",
      Description:
        "Developed a prototype transportation application for Abuja, Nigeria as a part of Turku UAS Innovation project. Website tracks the local buses in real-time, allows users to view timetables and search for routes.",
      GitHub: "https://github.com/otsosaarinen/9ways",
      Badges: [
        "Leaflet",
        "Node.js",
        "Express.js",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },
  ],
};

export default function Projects() {
  return (
    <>
      <div className="my-10 flex flex-col items-start gap-10">
        <div className="text-2xl font-medium">My projects</div>

        <div className="flex flex-col gap-10">
          {Object.entries(projects).map(([projectKey, projectArray]) => (
            <div
              className="flex flex-col items-start gap-2 border-1 border-transparent border-b-indigo-500 pb-3"
              key={projectKey}
            >
              <div className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl font-semibold text-transparent">
                {projectKey}
              </div>
              <div className="text-neutral-500 italic">
                {projectArray[0].Title}
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                {projectArray[0].Badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="border-indigo-500 text-base"
                    variant="secondary"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="hover:cursor-pointer" variant="outline">
                    Read more
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{projectKey}</AlertDialogTitle>
                    <AlertDialogDescription>
                      {projectArray[0].Description}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction className="bg-indigo-500">
                      Close
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-sky-500 to-indigo-500 p-2 text-2xl font-semibold text-white hover:cursor-pointer">
          <Link href="/">Go back</Link>
        </div>
      </div>
    </>
  );
}
