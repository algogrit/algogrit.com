export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights?: string[];
};

// Note: marks / GPA are intentionally omitted.
export const education: EducationItem[] = [
  {
    degree: 'B.Tech, Information Technology',
    institution: 'Anna University, Chennai',
    period: '2008 – 2012',
    description: 'Specialized in Data Warehousing, Mining and Computer Networking.',
    highlights: ['Won intra-department paper presentation competitions'],
  },
  {
    degree: 'Higher Secondary (State Board)',
    institution: 'Doveton Matriculation Higher Secondary School',
    period: '2006 – 2008',
    description: 'Physics, Chemistry, Maths and Computer Science.',
    highlights: ['Took part in endurance running'],
  },
];
