export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  tags: string[];

  eligibility: {
    minCgpa: number;
    branches: string[];
  };

  description: string;

  atsKeywords: string[];
}
