// All of the site's copy and links live in this file.

export const site = {
  url: "https://gavinpinto.ca",
  title: "Gavin Pinto",
  description:
    "Gavin Pinto studies computer science at the University of Waterloo and works on infrastructure at WATcloud. Based in Toronto.",
  email: "gavinpinto620@gmail.com",
  github: "https://github.com/GavinDPinto",
  linkedin: "https://www.linkedin.com/in/gavin-d-pinto/",
};

export type Entry = {
  name: string;
  role: string;
  date?: string;
  summary?: string;
};

export const now: Entry[] = [
  {
    name: "WATcloud",
    role: "Infrastructure Developer",
    date: "Sep 2026 – present",
    summary:
      "Infrastructure for the WATonomous student design team at the University of Waterloo.",
  },
];

export const work: Entry[] = [
  {
    name: "RBC Capital Markets",
    role: "DevOps Developer",
    date: "May – Aug 2026",
    summary:
      "Migrated CI/CD pipelines from Jenkins to GitHub Actions, led a code security initiative, and moved hardcoded secrets into HashiCorp Vault.",
  },
  {
    name: "RBC Capital Markets",
    role: "Fullstack Developer",
    date: "Jan – Apr 2026",
    summary:
      "Built reusable React.js components and C#/.NET APIs, and sped up data loading by removing redundant API calls.",
  },
  {
    name: "U+ Education",
    role: "Web Developer & TA",
    date: "May – Aug 2025",
    summary:
      "Maintained websites and taught programming basics to students.",
  },
];

export const school: Entry[] = [
  { name: "University of Waterloo", role: "Computer Science" },
];

export const skills: { label: string; items: string }[] = [
  {
    label: "Languages",
    items:
      "Java, Python, C++, C, C#, JavaScript/TypeScript, Kotlin, Scala, SQL, HTML/CSS",
  },
  {
    label: "Frameworks & tools",
    items:
      "React.js, Next.js, Node.js, FastAPI, Spring Boot, .NET, Tailwind CSS, Ncurses, Figma",
  },
  {
    label: "Databases & APIs",
    items: "Microsoft SQL Server, MongoDB, RESTful APIs, Swagger UI, OpenRouter",
  },
  {
    label: "DevOps & cloud",
    items:
      "Docker, Kubernetes, Terraform, GitHub Actions, Jenkins, SLURM, CI/CD",
  },
];
