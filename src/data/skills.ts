export type Skill = {
  name: string;
  /** Resolved icon URL: an icongr.am devicon or a local /assets/images/skills file. */
  src: string;
  /** Monochrome (black) icons that need inverting on the dark theme. */
  invert?: boolean;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

// https://icongr.am/devicon
const gram = (label: string) => `https://icongr.am/devicon/${label}.svg`;
const raw = (label: string, ext = 'svg') => `/assets/images/skills/${label}.${ext}`;

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Go', src: gram('go-original') },
      { name: 'Rust', src: raw('rust'), invert: true },
      { name: 'Elixir', src: raw('elixir') },
      { name: 'Ruby', src: raw('ruby') },
      { name: 'Erlang', src: gram('erlang-original') },
      { name: 'JavaScript', src: gram('javascript-original') },
      { name: 'Python', src: raw('python') },
      { name: 'TypeScript', src: gram('typescript-plain') },
      { name: 'Java', src: gram('java-original') },
      { name: 'Swift', src: raw('swift') },
      { name: 'Elm', src: raw('elm') },
      { name: 'Bash', src: raw('bash'), invert: true },
      { name: 'HTML5', src: gram('html5-original') },
      { name: 'CSS3', src: gram('css3-original') },
    ],
  },
  {
    name: 'Tools & Frameworks',
    skills: [
      { name: 'Rails', src: gram('rails-original-wordmark'), invert: true },
      { name: 'Phoenix', src: raw('phoenix') },
      { name: 'Sinatra', src: raw('sinatra'), invert: true },
      { name: 'React', src: gram('react-original') },
      { name: 'Vue', src: raw('vue') },
      { name: 'Node.js', src: raw('node-js') },
      { name: 'D3.js', src: raw('d3'), invert: true },
      { name: 'VTK.js', src: raw('vtk-js') },
      { name: 'Gorilla', src: raw('gorilla', 'png') },
      { name: 'Lodash', src: raw('lodash') },
      { name: 'Webpack', src: raw('webpack') },
      { name: 'Babel', src: raw('babel') },
      { name: 'SASS', src: gram('sass-original') },
      { name: 'Less', src: gram('less-plain-wordmark') },
      { name: 'Bootstrap', src: gram('bootstrap-plain') },
    ],
  },
  {
    name: 'Infrastructure & Data',
    skills: [
      { name: 'Kubernetes', src: raw('kubernetes') },
      { name: 'Docker', src: gram('docker-original') },
      { name: 'Terraform', src: raw('terraform', 'png') },
      { name: 'Kafka', src: raw('kafka'), invert: true },
      { name: 'Postgres', src: gram('postgresql-original') },
      { name: 'MySQL', src: gram('mysql-plain') },
      { name: 'Redis', src: gram('redis-original') },
      { name: 'Sqlite', src: raw('sqlite') },
      { name: 'Elasticsearch', src: raw('elasticsearch', 'png') },
      { name: 'Apache Beam', src: raw('apache-beam', 'png') },
      { name: 'Nginx', src: gram('nginx-original') },
      { name: 'Git', src: gram('git-original') },
      { name: 'DataDog', src: raw('datadog') },
      { name: 'Fluentd', src: raw('fluentd', 'png') },
      { name: 'Kibana', src: raw('kibana', 'png') },
      { name: 'CircleCI', src: raw('circleci'), invert: true },
      { name: 'GitHub Actions', src: raw('github-actions') },
      { name: 'Jenkins', src: raw('jenkins', 'png') },
      { name: 'Fastlane', src: raw('fastlane', 'png') },
    ],
  },
  {
    name: 'Platforms',
    skills: [
      { name: 'AWS', src: gram('amazonwebservices-original') },
      { name: 'Google Cloud', src: raw('google-cloud-platform') },
      { name: 'Azure', src: raw('azure') },
      { name: 'Linux', src: gram('linux-original') },
      { name: 'Debian', src: gram('debian-plain') },
      { name: 'Ubuntu', src: raw('ubuntu', 'png') },
      { name: 'Raspberry Pi', src: raw('raspberry-pi') },
      { name: 'iOS', src: gram('apple-original'), invert: true },
      { name: 'Heroku', src: gram('heroku-plain') },
      { name: 'Digital Ocean', src: raw('digital-ocean') },
    ],
  },
];

// A short, curated set used for the hero/landing marquee.
export const marqueeSkills: Skill[] = [
  { name: 'Go', src: gram('go-original') },
  { name: 'Rust', src: raw('rust'), invert: true },
  { name: 'Elixir', src: raw('elixir') },
  { name: 'Erlang', src: gram('erlang-original') },
  { name: 'Python', src: raw('python') },
  { name: 'TypeScript', src: gram('typescript-plain') },
  { name: 'React', src: gram('react-original') },
  { name: 'Kubernetes', src: raw('kubernetes') },
  { name: 'Docker', src: gram('docker-original') },
  { name: 'Terraform', src: raw('terraform', 'png') },
  { name: 'Kafka', src: raw('kafka'), invert: true },
  { name: 'Postgres', src: gram('postgresql-original') },
  { name: 'AWS', src: gram('amazonwebservices-original') },
  { name: 'DataDog', src: raw('datadog') },
];
