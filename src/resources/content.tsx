import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jesse",
  lastName: "Verbeek",
  name: `Jesse Verbeek`,
  role: "Founder & Full-Stack Developer | Ex-Optiver, Ex-Tesla",
  avatar: "/images/avatar.jpg",
  email: "jeverbeek6@gmail.com",
  location: "Europe/Amsterdam", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Dutch", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jesse-verbeek-/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building AI-powered SaaS applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Giroscope</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/giroscope",
  },
  subline: (
    <>
    I'm Jesse, a founder and full-stack developer selected for <Text as="span" size="xl" weight="strong">Antler ONE</Text>. <br />
    Ex-Optiver, Ex-Tesla. Building SaaS products and automation solutions that scale.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jesse is an Amsterdam-based founder and full-stack developer who was selected for Antler ONE (120 founders from 7,500+ applicants).
        With a background in econometrics from VU Amsterdam and experience at Optiver and Tesla, he specializes in building AI-powered
        SaaS applications and automation solutions. Jesse founded Giroscope, a portfolio analysis tool that scaled to 500+ users,
        and builds automation workflows that help businesses streamline their CRM and operational processes.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Antler",
        timeframe: "Sep 2025 - Dec 2025",
        role: "Founder in Residence",
        achievements: [
          <>
            Selected for Antler ONE (120 founders from 7,500+ applicants) to build innovative technology ventures in Berlin.
          </>,
          <>
            Built and iterated early-stage MVPs using Supabase, Python, TypeScript, and OpenAI Agent Platform.
          </>,
          <>
            Worked closely with ex-exit founders and VC investors, learning founder-led sales and customer discovery methodologies.
          </>,
        ],
        images: [],
      },
      {
        company: "Giroscope",
        timeframe: "Jan 2025 - Dec 2025",
        role: "Founder",
        achievements: [
          <>
            Founded and built a portfolio analysis tool for retail investors, designing and shipping the MVP solo.
          </>,
          <>
            Scaled to ~500 users, owning product, engineering, and iteration end-to-end using PostgreSQL, FastAPI, React, and GCP.
          </>,
          <>
            Gained hands-on experience with early traction, retention dynamics, and real-world distribution constraints.
          </>,
        ],
        images: [],
      },
      {
        company: "Optiver",
        timeframe: "Aug 2022 - Dec 2024",
        role: "Mid Office Analyst",
        achievements: [
          <>
            Performed trade, fee, and brokerage reconciliations across high-volume trading activity in a fast-paced environment.
          </>,
          <>
            Ensured accuracy and integrity of post-trade processes, working closely with traders and engineers to resolve breaks and improve workflows.
          </>,
          <>
            Started as Mid Office Assistant (part-time) and was promoted to Mid Office Analyst (full-time) after demonstrating strong performance.
          </>,
        ],
        images: [],
      },
      {
        company: "Tesla",
        timeframe: "Jan 2022 - Jul 2022",
        role: "Data Intern",
        achievements: [
          <>
            Worked on data analysis and automation projects to support Tesla's operations in Amsterdam.
          </>,
          <>
            Gained experience with data pipelines and business intelligence tools in a high-growth environment.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Vrije Universiteit Amsterdam",
        description: <>MSc, Econometrics & Operations Research (2021 - 2023)</>,
      },
      {
        name: "Vrije Universiteit Amsterdam",
        description: <>Minor, Econometrics (2020 - 2021)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full-Stack Development",
        description: (
          <>Building end-to-end SaaS applications from concept to deployment. Experience with React, TypeScript, FastAPI, PostgreSQL, and cloud platforms (GCP, Supabase). Created Giroscope, a portfolio analysis tool scaled to 500+ users.</>
        ),
        tags: [
          {
            name: "React",
            icon: "github",
          },
          {
            name: "TypeScript",
            icon: "github",
          },
          {
            name: "Python",
            icon: "github",
          },
          {
            name: "FastAPI",
            icon: "globe",
          },
          {
            name: "PostgreSQL",
            icon: "globe",
          },
        ],
        images: [],
      },
      {
        title: "AI & Automation",
        description: (
          <>Developing AI-powered applications and automation solutions. Built MVPs using OpenAI Agent Platform, n8n workflows, and custom automation tools. Experience with voice agents, CRM automation, and business process optimization.</>
        ),
        tags: [
          {
            name: "OpenAI",
            icon: "globe",
          },
          {
            name: "n8n",
            icon: "github",
          },
          {
            name: "Supabase",
            icon: "github",
          },
          {
            name: "AI Agents",
            icon: "globe",
          },
        ],
        images: [],
      },
      {
        title: "Data & Analytics",
        description: (
          <>Strong foundation in econometrics, data analysis, and operations research from VU Amsterdam. Experience with data pipelines, reconciliation systems, and business intelligence from roles at Optiver and Tesla.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "github",
          },
          {
            name: "Data Analysis",
            icon: "globe",
          },
          {
            name: "Econometrics",
            icon: "globe",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
