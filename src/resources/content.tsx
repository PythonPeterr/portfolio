import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jesse",
  lastName: "Verbeek",
  name: `Jesse Verbeek`,
  role: "Automation Engineer",
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
  headline: <>Automating workflows with n8n and AI</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Meijer & Knijnenberg</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/meijer-knijnenberg",
  },
  subline: (
    <>
    I'm Jesse, an automation engineer specializing in <Text as="span" size="xl" weight="strong">n8n workflows</Text>, where I build intelligent <br /> automation solutions. I transform manual processes into seamless automated systems.
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
        Jesse is an Amsterdam-based automation engineer with a passion for transforming manual workflows
        into intelligent automated systems. His work spans n8n workflow automation, CRM integration,
        and AI-powered business process optimization.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Meijer & Knijnenberg",
        timeframe: "2023 - Present",
        role: "Automation Engineer",
        achievements: [
          <>
            Built comprehensive n8n automation workflows for CRM, ATS, and business processes,
            reducing manual work by 70%.
          </>,
          <>
            Implemented AI-powered automation solutions that streamlined client communication and
            data management across multiple platforms.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "2020 - Present",
        role: "Workflow Automation Specialist",
        achievements: [
          <>
            Developed custom automation solutions for various clients using n8n, reducing
            operational overhead and improving efficiency.
          </>,
          <>
            Created Instagram automation tools and CRM integrations that helped businesses
            scale their operations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "n8n Workflow Automation",
        description: (
          <>Expert in building complex automation workflows with n8n, integrating multiple systems and APIs.</>
        ),
        tags: [
          {
            name: "n8n",
            icon: "github",
          },
          {
            name: "API Integration",
            icon: "globe",
          },
        ],
        images: [],
      },
      {
        title: "CRM & ATS Integration",
        description: (
          <>Specialized in automating customer relationship management and applicant tracking systems.</>
        ),
        tags: [
          {
            name: "Automation",
            icon: "github",
          },
          {
            name: "Integration",
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
