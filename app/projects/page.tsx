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
            Description:
                "A web application featuring a GPT-4o-powered chatbot that assists users with settings adjustments, navigation, and answering questions. The language model is built using a RAG (Retrieval-Augmented Generation) model for optimal responses and is controlled through Microsoft Azure.",
            GitHub: "https://github.com/otsosaarinen/klemmari",
            Badges: [
                "Microsoft Azure",
                "Generative AI",
                "OpenAI",
                "JavaScript",
                "React",
                "Python",
            ],
        },
    ],
    Thesis: [
        {
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
            Description:
                "A web application that allows users to control their Spotify playback. It utilizes the Spotify Developer API for managing playback, with user authentication handled via the OAuth 2.0 protocol.",
            GitHub: "https://github.com/otsosaarinen/spotify-web-controller",
            Badges: [
                "TypeScript",
                "Spotify API",
                "OAuth 2.0",
                "React",
                "Tailwind CSS",
            ],
        },
    ],
    "9ways": [
        {
            Description:
                "Developed a transportation application for Abuja, Nigeria as a part of Turku UAS Innovation project. Website tracks the local buses and timetables. User can also search for routes through the website.",
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
            <div className="min-h-screen w-auto my-10 flex flex-col justify-center items-center gap-10">
                <div className="text-2xl font-medium">My projects</div>

                <div className="flex flex-col flex-wrap gap-7.5">
                    {Object.entries(projects).map(
                        ([projectKey, projectArray]) => (
                            <div
                                className="flex flex-col items-start gap-2 border-transparent border-b-indigo-500 border-1 py-3"
                                key={projectKey}
                            >
                                <div className="text-2xl font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                                    {projectKey}
                                </div>
                                <div className="flex flex-row flex-wrap gap-2">
                                    {projectArray[0].Badges.map(
                                        (badge, index) => (
                                            <Badge
                                                key={index}
                                                className="text-base border-indigo-500"
                                                variant="secondary"
                                            >
                                                {badge}
                                            </Badge>
                                        )
                                    )}
                                </div>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button
                                            className="hover:cursor-pointer"
                                            variant="outline"
                                        >
                                            Read more
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                {projectKey}
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                {projectArray[0].Description}
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogAction>
                                                Close
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        )
                    )}
                </div>

                <div className="p-2 text-2xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 text-white hover:cursor-pointer">
                    <Link href="/">Go back</Link>
                </div>
            </div>
        </>
    );
}
