import { NextResponse } from "next/server";

const blogs = [
  {
    id: 1,
    title: "Web Development",
    desc: "Web development is the craft of building and maintaining websites, ensuring functionality, user experience, and design.",
  },
  {
    id: 2,
    title: "Application Development",
    desc: "An app is a software application designed to perform specific tasks on mobile devices or computers, offering users a streamlined experience.",
  },
  {
    id: 3,
    title: "ChatGPT",
    desc: "ChatGPT is an AI language model that generates human-like text responses based on user input, designed to assist with various tasks and conversations.",
  },

  {
    id: 4,
    title: "AI (Artificial Intelligence) ",
    desc: "AI (Artificial Intelligence) is the simulation of human intelligence in machines, enabling them to learn, reason, and perform tasks autonomously.",
  },

  {
    id: 5,
    title: "GitHub",
    desc: "GitHub is a platform for version control and collaboration, allowing developers to host, review, and manage code repositories.",
  },
];

export async function GET() {
  return NextResponse.json(blogs);
}
