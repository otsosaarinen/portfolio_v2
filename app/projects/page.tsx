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
    "Spotify Web Controller": [
        {
            Description:
                "A web application that allows users to control their Spotify playback. It utilizes the Spotify Developer API for managing playback, with user authentication handled via the OAuth 2.0 protocol.",
            GitHub: "github.com/otsosaarinen/spotify-web-controller",
            Badges: [
                "TypeScript",
                "React",
                "Tailwind CSS",
                "Spotify API",
                "OAuth 2.0",
            ],
        },
    ],
    Klemmari: [
        {
            Description:
                "A web application featuring a GPT-4o-powered chatbot that assists users with settings adjustments, navigation, and answering questions. The language model is built using a RAG (Retrieval-Augmented Generation) model for optimal responses and is controlled through Microsoft Azure.",
            GitHub: "github.com/otsosaarinen/klemmari",
            Badges: [
                "Microsoft Azure",
                "OpenAI",
                "Gen AI",
                "JavaScript",
                "React",
                "Python",
            ],
        },
    ],
    "My thesis": [
        {
            Description:
                "My thesis focuses on real-time patient data collection and analysis using the Apache Kafka platform. As part of the research, I developed a prototype for healthcare that integrates Apache Kafka, Python, InfluxDB, and Grafana to enable real-time health data visualization.",
            GitHub: "github.com/otsosaarinen/thesis",
            Badges: [
                "Apache Kafka",
                "Python",
                "InfluxDB",
                "Grafana",
                " Real-time Analytics",
            ],
        },
    ],
};

export default function Projects() {
    return (
        <>
            <div className="h-[95vh] w-auto m-0 flex flex-col justify-center items-center gap-3">
                <div className="text-2xl font-medium">My projects</div>
                <div className="flex flex-col flex-wrap gap-10">
                    {Object.entries(projects).map(
                        ([projectKey, projectArray]) => (
                            <div
                                className="flex flex-col justify-center items-start gap-2"
                                key={projectKey}
                            >
                                <div className="">
                                    {projectArray.map(
                                        (project, projectIndex) => (
                                            <div
                                                className="flex flex-col gap-2 "
                                                key={projectIndex}
                                            >
                                                <div className="text-2xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                                                    {projectKey}
                                                </div>
                                                <div className="flex flex-row flex-wrap gap-1">
                                                    {project.Badges.map(
                                                        (badge, badgeIndex) => (
                                                            <Badge
                                                                key={badgeIndex}
                                                                className="text-base border-indigo-500"
                                                                variant={
                                                                    "secondary"
                                                                }
                                                            >
                                                                {badge}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                                {projectArray.map((project, index) => (
                                    <AlertDialog key={index}>
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
                                                    {project.Description}
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogAction>
                                                    Close
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                ))}
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="h-[5vh] w-full flex flex-row gap-3 justify-center items-center bg-indigo-500 text-white">
                <Link
                    href={"https://vercel.com/home"}
                    className="hover:underline"
                >
                    Hosted on Vercel
                </Link>
                <span>{"</>"}</span>
                <Link
                    href={"https://github.com/otsosaarinen"}
                    className="hover:underline"
                >
                    GitHub
                </Link>
                <span>{"</>"}</span>
                <Link
                    href={"https://github.com/otsosaarinen/portfolio_v2"}
                    className="hover:underline"
                >
                    Source code
                </Link>
            </div>
        </>
    );
}
