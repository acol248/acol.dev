export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "external" | "other";
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  paragraphs: string[];
  images?: ProjectImage[];
  links?: ProjectLink[];
  highlight?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: "strapi-analytics",
    title: "Strapi Analytics",
    description: "Strapi plugin for lightweight, self-hosted analytics.",
    date: "2026 - Present",
    highlight: true,
    tags: ["Strapi", "React", "TypeScript", "Recharts"],
    paragraphs: [
      "Strapi analytics is a plugin for Strapi v5 that enables lightweight, self-hosted event tracking and native database document validation.",
      "The plugin is built using React and TypeScript, with Recharts used for the charting library.",
      "The plugin is designed to be as plug and play as it can be for the developer. There is an easy script snippet to paste into your frontend codebase to start tracking events, and the plugin will handle the rest.",
      "In the Strapi CMS admin panel, dashboards are drag and drop populated with charts that can be configured to display the data you want to see.",
      "When you're ready as the developer to start tracking more in depth event data, you can easily call a function on the frontend to track a list of preset events, or even custom events, coupled with additional data relevant to documents in Strapi itself. For example, if you're tracking analytics on your Strapi driven blog, you can track the specific blog post being viewed by document and model. The plugin will handle the rest, and you can view the data in your dashboards.",
    ],
    images: [
      {
        src: "/assets/strapi-analytics-1.jpg",
        alt: "Screenshot of Strapi Analytics plugin dashboard dark mode",
      },
      {
        src: "/assets/strapi-analytics-2.jpg",
        alt: "Screenshot of Strapi Analytics plugin dashboard dark mode",
      },
      {
        src: "/assets/strapi-analytics-3.jpg",
        alt: "Screenshot of Strapi Analytics plugin dashboard light mode",
      },
      {
        src: "/assets/strapi-analytics-5.jpg",
        alt: "Screenshot of Strapi Analytics plugin dashboard light mode with tooltip",
      },
    ],
    links: [
      {
        label: "Project source on GitHub",
        href: "https://github.com/acol248/strapi-analytics",
        type: "github",
      },
      {
        label: "Check it out on NPM",
        href: "https://www.npmjs.com/package/strapi-analytics",
        type: "external",
      },
    ],
  },
  {
    id: "our-view",
    title: "Our View",
    description:
      "A disposable camera like web application for group photography",
    date: "2025 - 2026",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    highlight: true,
    paragraphs: [
      "This is a project I started working on in my spare time in late 2025, running into 2026. The idea was to create a web application that people could log into, join/create a group and start taking photos together.",
      "The application was being built with the intentions of being used at my wedding, with the potential for future commercialisation.",
      "The application is built using NextJS with a React frontend, custom written backend in the NextJS codebase, with an additional NodeJS backend service that was responsible for handling CRON tasks and a MongoDB database.",
    ],
    images: [
      {
        src: "/assets/our-view-1.png",
        alt: "Screenshot of Our View application home",
      },
      {
        src: "/assets/our-view-2.png",
        alt: "Screenshot of Our View application camera view",
      },
      {
        src: "/assets/our-view-3.png",
        alt: "Screenshot of Our View application join screen",
      },
    ],
  },
  {
    id: "dash-pi",
    title: "Dash Pi",
    description:
      "A dashboard camera application designed to run on a Raspberry Pi",
    date: "2025 - Present",
    tags: ["Rust", "Raspberry Pi", "IoT", "Embedded"],
    highlight: true,
    paragraphs: [
      "An experimental project to play with the Raspberry Pi, worked on and off since 2025.",
      "A dashboard camera application designed to run on a Raspberry Pi, written in Rust.",
      "Bursts of video are taken and saved to a local file system. The application manages the files created and deletes old files when storage limits are reached.",
      "The long term vision for this project will allow the camera to be easily accessible from a mobile device, keeping the hardware on the dash camera as simple as possible to reduce setup costs for users.",
      "The application is being developed with a Raspberry Pi Zero 2 in mind.",
    ],
    links: [
      {
        label: "Project source on GitHub",
        href: "https://github.com/acol248/rs-dash-pi",
        type: "github",
      },
    ],
  },
  {
    id: "bills",
    title: "Bills",
    description:
      "A basic application that helps the user keep track of their financial obligations",
    date: "2023 - 2024",
    tags: ["React", "TypeScript", "Local Storage", "Vibration API"],
    paragraphs: [
      "A basic application that helps the user keep track of their financial obligations. All app data is stored locally in the browser using localstorage. This is a frontend only application, built using React in Typescript.",
      "It makes use of a number of modern web APIs that not only run the core of the application, but add additional functionality (Web Vibration API).",
    ],
    links: [
      {
        label: "Try it out",
        href: "https://acol.dev/app/bills",
        type: "external",
      },
      {
        label: "Project source on GitHub",
        href: "https://github.com/acol248/bills",
        type: "github",
      },
    ],
  },
  {
    id: "focus",
    title: "Focus",
    description:
      "A basic experiment that makes use of the WakeLock API, now available in all mainstream browsers",
    date: "2023",
    tags: ["React", "TypeScript", "Wake Lock API", "PWA"],
    paragraphs: [
      "A basic experiment that makes use of the WakeLock API, now available in all mainstream browsers. This is a frontend only application, built using React in Typescript.",
      "The goal is to encourage a user to put down their phone and focus on doing something in the real world",
    ],
    links: [
      {
        label: "Try it out",
        href: "https://acol.dev/app/focus",
        type: "external",
      },
      {
        label: "Project source on GitHub",
        href: "https://github.com/acol248/focus",
        type: "github",
      },
    ],
  },
];
