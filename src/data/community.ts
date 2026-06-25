export type CommunityItem = {
  role: string;
  org: string;
  note?: string;
  link?: string;
};

export const community: CommunityItem[] = [
  { role: 'Organizer', org: 'The Hour', note: 'CoderMana', link: 'https://thehour.codermana.com/' },
  { role: 'Organizer & volunteer', org: 'GoLang India Study Group', link: 'https://github.com/golangindia/StudyGroup' },
  { role: 'Co-organizer', org: 'Chennai Go Meetup', note: 'since 2018' },
  { role: 'Speaker', org: 'GopherCon Vietnam', note: '2018' },
  { role: 'Winner, Go Quiz', org: 'GopherCon India', note: '2018' },
  { role: 'Speaker', org: 'GopherCon India', note: '2019' },
  { role: 'Co-host', org: 'podcast.yaml', note: 'podcast' },
];

export const communityNote =
  'Active in the Chennai tech community since 2013 across Go, Rust, Ruby, Docker, Kubernetes, and related ecosystems.';

// Organizations trained (instructor-led & virtual, globally).
export const clients = [
  'Qualcomm', 'Renault-Nissan', 'Bank of America', 'Grab', 'Samsung', 'Siemens',
  'JP Morgan Chase', 'PayPal', 'MasterCard', 'Flipkart', 'Cisco', 'VMware',
  'Salesforce', 'Walmart Labs',
];

export const trainingTopics = [
  'Go', 'Elixir', 'Rust', 'Ruby', 'Python', 'Java', 'Docker',
  'Kubernetes (Networking & Security)', 'Apache Spark', 'Elm', 'Clojure',
  'DevOps', 'AWS', 'GCP', 'Azure',
];

export const trainingNote =
  'Instructor-led and virtual trainings delivered globally, across Asia, the Americas, Europe, Africa and Australia.';

export const courseOutlinesUrl = 'https://github.com/algogrit/Training';
