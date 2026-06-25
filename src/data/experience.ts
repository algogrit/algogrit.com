export type SubProject = {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
};

export type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  link?: string;
  current?: boolean;
  projects?: SubProject[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'CoderMana Technologies Pvt Ltd',
    position: 'Director of Engineering',
    link: 'https://codermana.com/',
    period: 'Aug 2020 – Present',
    description:
      'Technical consulting for clients across the world, corporate trainings and product development.',
    achievements: [
      'Performance optimizations at the DB and backend level on existing and new code being built',
      'Moved from a manually managed infra to a IaC based solution while meeting SLAs to reduce downtime',
      'Managing and transforming teams into a agile process',
      'Delivered world-class training on multiple technologies to varied audiences',
    ],
    current: true,
    projects: [
      {
        name: 'Products',
        description:
          'Building SaaS products in the space of near-realtime monitoring, data ingestion and content publishing.',
        technologies: ['Python', 'React', 'Ruby', 'Go', 'JavaScript'],
      },
      {
        name: 'Trainings',
        description:
          'Delivered world-class training on Go, Rust, Elixir, C++, Data Engineering, Distributed Systems Design, Docker, Kubernetes, Terraform, Cloud - AWS, GCP & Azure, Ruby, Python, Java, Cilium, and more for clients all over Asia, America, Europe, Africa & Australia.',
        technologies: ['Go', 'Rust', 'Elixir', 'C++', 'Distributed Systems', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'GCP', 'Ruby', 'Python', 'Java', 'Cilium'],
      },
      {
        name: 'Roll',
        description:
          'Member of the core technical team. Led the backend and SRE team. Worked closely with stake holders to build and deploy new features.',
        technologies: ['Go', 'Kubernetes', 'Helm', 'RDS', 'Terraform', 'ElasticSearch', 'DataDog', 'Vault', 'AWS', 'ORY Hydra', 'CircleCI', 'GitHub Actions', 'Twilio', 'OIDC'],
      },
      {
        name: 'CB App, MantaSolutions',
        description:
          'Building graphQL based APIs to power the frontend. Working closely with stakeholders for feature development. Managing and transforming the team to a agile process.',
        technologies: ['Go', 'GraphQL', 'Apollo.js', 'Postgres'],
      },
    ],
  },
  {
    company: 'Agarwal Consulting',
    position: 'Founder & Principal Consultant',
    link: 'https://agarwalconsulting.io/',
    period: 'Apr 2018 – Present',
    description: 'Technical consulting for clients across the world & corporate trainings.',
    achievements: [
      'Led the re-architecture of infrastructure and moved away from Heroku to AWS while containerizing the micro-services',
      'Integrating an oauth 2 server implementation to allow third-party developers to interact and build on top of backend APIs',
    ],
    current: true,
    projects: [
      {
        name: 'Roll',
        description:
          'Member of the core technical team. Led the re-architecture of infrastructure and moving away from Heroku to AWS. Re-designed the existing application to be cloud-native running on AWS managed Kubernetes service. Setting up monitoring systems using EFK stack. Integrating an oauth 2 server implementation to allow third-party developers to build on top of our backend APIs.',
        technologies: ['Go', 'Kubernetes', 'Helm', 'RDS', 'Terraform', 'Elastic Search', 'AWS', 'ORY Hydra', 'CircleCI', 'Twilio'],
      },
      {
        name: 'Digisense, Autosense',
        description:
          'Building a data processing pipeline to ingest 10K packets/s from Pubsub into Google BigQuery and BigTable. Designed and architected the pipeline on GCP using Dataflow (Apache Beam). Designed the codebase to be easy to configure and scale.',
        technologies: ['Java', 'Apache Beam', 'Cloud DataFlow', 'BigQuery', 'BigTable', 'Google Pubsub'],
      },
      {
        name: 'Oshi',
        description:
          'Building a world-class react app to help patients record their own health metrics and keep track of their diets and routine. Designed, built and iterated over several features of the app.',
        technologies: ['React', 'Redux', 'Cordova', 'SVG'],
      },
      {
        name: 'Trainings',
        description:
          'Delivered world-class training on Go, Docker, Kubernetes, Ruby, Python & Java for multiple clients across India, US & Singapore.',
        technologies: ['Go', 'Docker', 'Kubernetes', 'Ruby', 'Python', 'Java'],
      },
    ],
  },
  {
    company: 'Tarka Labs',
    position: 'Lead Technical Consultant',
    period: 'Oct 2016 – Oct 2018',
    description:
      'Working across multiple domains from teleinformatics to mining to enterprise asset management to manufacturing.',
    achievements: [
      'Leading a team of developers to deliver consistently and working closely with clients to ensure timely delivery',
      'Solving hard technical problems in a fast-changing landscape',
      'Working across the stack - including hardware, mobile and web apps',
    ],
    projects: [
      {
        name: 'HRIS, Auzmor',
        description:
          'Mentoring and leading a team on TypeScript/React. Designed the web app from the ground up to be scalable. Built the entire backend using Ruby on Rails. Architected deployment on GCP using Docker containers onto a Kubernetes cluster.',
        technologies: ['Ruby on Rails', 'React.js', 'Redux', 'GCP', 'Kubernetes', 'Docker'],
      },
      {
        name: 'Datacloud',
        description:
          'Using OpenCV to stitch images taken inside a mine. Consuming sensor data and visualizing the regions where ores are concentrated. Built apps using Vue.js and 3D visualisations using VTK.js. Built ReSTful APIs in Go.',
        technologies: ['Vue.js', 'Docker', 'Azure', 'Go', 'OpenCV', 'Python', 'ClickHouse', 'VTK.js', 'Redis'],
      },
      {
        name: 'Fankave',
        description:
          'Building React.js based visualisations using live data from API. Designed and iterated on 2D visualisations using D3.js and pure SVG components.',
        technologies: ['React.js', 'D3.js', 'SVG', 'AWS'],
      },
      {
        name: 'Smart Crib',
        description:
          'Leading the IoT-based proof of concept product. Designed circuits using KiCAD, interfaced with MFRC-522 NFC reader & BLE bluetooth devices using python. Built a self-updating dashboard using Node.js on Raspberry Pi.',
        technologies: ['Python', 'Raspberry Pi', 'BLE Bluetooth', 'MFRC-522', 'Node.js', 'Bash'],
      },
      {
        name: 'EAM360 Application',
        description:
          'Leading the iOS team using Swift. Ensured the mobile app is offline accessible. Setting up CI/CD pipelines using Fastlane, Jenkins and CircleCI for both Android and iOS. Built FaaS apps using Go on AWS Lambda.',
        technologies: ['Swift', 'iOS', 'CoreData', 'Fastlane', 'Jenkins', 'CircleCI', 'Go', 'Android'],
      },
    ],
  },
  {
    company: 'Tarka Labs',
    position: 'Lead Technical Developer',
    period: 'Nov 2015 – Sep 2016',
    description: 'Led teams and built scalable web applications.',
    achievements: [
      'Built realtime map based dashboards with smooth frame rates',
      'Built concurrent and fault-tolerant scrapers using elixir and the OTP framework',
    ],
    projects: [
      {
        name: 'Zephyr, Mod.us',
        description:
          'Part of this long-running project from the beginning, later leading a remote distributed team. Built realtime apps using websockets and React.js. Used RxJS to reduce thrashing and jank. Built interactive visualisations using Google Maps and SVG + React.js components.',
        technologies: ['React.js', 'Elixir', 'RxJS', 'SVG', 'Immutable', 'Webpack'],
      },
      {
        name: 'Betting LeadIn',
        description: 'Worked on building an app using Elm on the frontend and Elixir + Phoenix for the backend.',
        technologies: ['Elixir', 'Phoenix', 'Erlang OTP', 'Elm'],
      },
    ],
  },
  {
    company: 'Tarka Labs',
    position: 'Senior Technical Consultant',
    period: 'Dec 2014 – Nov 2015',
    description: 'Worked on interactive dashboards and legacy RoR applications.',
    achievements: [
      'Optimised and tuned PostgreSQL workload and queries',
      'Built highly interactive 3D visual apps',
      'Stabilized legacy systems, decreasing downtime and improving developer experience',
    ],
    projects: [
      {
        name: 'DMP, Mod.us',
        description: 'Developing new features on their existing vehicle tracking system built using Ruby on Rails.',
        technologies: ['Ruby on Rails', 'Postgres'],
      },
      {
        name: 'Lifelogger',
        description:
          'Built an interactive app using Elm: a highly interactive 3D visual app using the reddit API as a proof of concept. Deployed on Heroku.',
        technologies: ['Elm', 'Heroku'],
      },
    ],
  },
  {
    company: 'BrowserStack',
    position: 'Software Engineer',
    period: 'Sep 2013 – Oct 2014',
    description: 'Worked on the Automate product and internal tools.',
    achievements: [
      'Managing internal servers to the satisfaction of internal stakeholders',
      'Analyzing and cleaning up billing data; building dashboards for internal metrics',
      'Stabilizing systems dealing with payments and a customer-facing near real-time dashboard for automation logs',
    ],
    projects: [
      {
        name: 'Automate',
        description:
          'Main rails developer on the Automate team, the product which lets you run Selenium/JS tests across multiple Browser/OS combinations. Worked to stabilise the application over the course of 2 months.',
        technologies: ['Ruby on Rails', 'Node.js', 'Selenium', 'Sphinx', 'MySQL', 'jQuery'],
      },
      {
        name: 'Zombie',
        description:
          'Developing an internal usage dashboard for understanding usage patterns across multiple metrics and dimensions. Designed the raw SQL queries and built a custom query builder to run on MySQL.',
        technologies: ['Ruby on Rails', 'jQuery', 'Bootstrap', 'MySQL'],
      },
    ],
  },
  {
    company: 'ThoughtWorks',
    position: 'Consultant',
    period: 'May 2012 – Sep 2013',
    description:
      'Worked with senior developers, practising agile, TDD, pair programming and extreme programming methodologies.',
    achievements: [
      'Learnt a lot of coding techniques, including refactoring and writing clean readable code',
      'Built an extensive set of visualizations, including map-based ones, to chart sales distribution across a country',
    ],
    projects: [],
  },
];
