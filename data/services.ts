// Shared services data — imported by both client components and server pages

export interface ServiceItem {
  slug: string;
  name: string;
  short: string;
  img: string;
  icon: string;
  badge: string;
  badgeType: string;
  tagline: string;
  description: string;
  color: string;
  bg: string;
  border: string;
  courses: string[];
  duration: string;
  salary: string;
  demand: string;
  rating: string;
  students: string;
  nextBatch: string;
  category: string;
  modules: number;
  /** Entity-rich H1 for the service page — overrides default heading */
  h1?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'salesforce',
    name: 'Salesforce Training',
    short: 'Salesforce',
    img: '/c-salesforce.jpg',
    icon: '☁️',
    badge: 'Hot',
    badgeType: 'hot',
    tagline: 'CRM · Admin · Developer · Architect',
    description: 'Master Salesforce CRM from Admin to Developer to Architect. Work on live Salesforce orgs with real client data scenarios. Prepare for ADM-201, PD1 and Architect certifications.',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    courses: ['Salesforce Admin (ADM-201)', 'Salesforce Developer PD1', 'Salesforce Architect', 'Marketing Cloud', 'Sales & Service Cloud'],
    duration: '3–6 Months',
    salary: '₹6L–₹25L',
    demand: 'Very High',
    rating: '4.9',
    students: '1,200+',
    nextBatch: 'Enquire now',
    category: 'hot',
    modules: 6,
    h1: 'Salesforce Training in Bangalore — Admin, Developer, LWC, CPQ, Marketing Cloud & Architect Certifications',
  },
  {
    slug: 'cloud',
    name: 'Cloud — AWS & Azure',
    short: 'Cloud',
    img: '/c-cloud.jpg',
    icon: '⚡',
    badge: 'Hot',
    badgeType: 'hot',
    tagline: 'AWS SAA · Azure AZ-104 · GCP · DevSecOps',
    description: 'Become a certified cloud professional on AWS and Azure. Hands-on labs with real cloud accounts, architecture design, and certification preparation.',
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    courses: ['AWS Solutions Architect', 'AWS DevOps', 'Azure Administrator AZ-104', 'Azure Architect AZ-305', 'GCP Fundamentals', 'Multi-Cloud Strategy'],
    duration: '2–4 Months',
    salary: '₹8L–₹45L',
    demand: 'Very High',
    rating: '4.9',
    students: '2,000+',
    nextBatch: 'Enquire now',
    category: 'hot',
    modules: 7,
    h1: 'AWS & Azure Cloud Training in Bangalore — Solutions Architect, Cloud Engineer, AZ-104 & DevOps Certification',
  },
  {
    slug: 'sap',
    name: 'SAP Training',
    short: 'SAP',
    img: '/c-sap.jpg',
    icon: '🔷',
    badge: 'Most Placed',
    badgeType: 'popular',
    tagline: 'FICO · MM · SD · ABAP · S/4HANA',
    description: 'Comprehensive SAP training across all major modules. Learn from SAP-certified consultants with 15+ years of enterprise implementation experience.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    courses: ['SAP FICO', 'SAP MM', 'SAP SD', 'SAP ABAP', 'SAP S/4HANA', 'SAP HR/HCM'],
    duration: '3–6 Months',
    salary: '₹8L–₹30L',
    demand: 'High',
    rating: '4.8',
    students: '800+',
    nextBatch: 'Enquire now',
    category: 'popular',
    modules: 7,
    h1: 'SAP Training in Bangalore — FICO, MM, SD, ABAP, S/4HANA & SAP Activate Certification',
  },
  {
    slug: 'python-data-science',
    name: 'Python & AI',
    short: 'Python',
    img: '/c-python.jpg',
    icon: '🐍',
    badge: 'Hot',
    badgeType: 'hot',
    tagline: 'Python · ML · Deep Learning · GenAI',
    description: 'From Python basics to GenAI and production ML systems. Build real projects: stock prediction, NLP, computer vision, and LLM-based applications.',
    color: '#059669',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    courses: ['Python Programming', 'Data Science', 'Machine Learning', 'Deep Learning', 'NLP & GenAI', 'Data Engineering'],
    duration: '4–6 Months',
    salary: '₹8L–₹40L',
    demand: 'Very High',
    rating: '4.9',
    students: '1,500+',
    nextBatch: 'Enquire now',
    category: 'hot',
    modules: 8,
    h1: 'Python & Data Science Training in Bangalore — AI, Machine Learning, Deep Learning, GenAI & Data Engineering',
  },
  {
    slug: 'devops',
    name: 'DevOps & Kubernetes',
    short: 'DevOps',
    img: '/c-devops.jpg',
    icon: '🔄',
    badge: 'Trending',
    badgeType: 'new',
    tagline: 'Docker · Kubernetes · Jenkins · Terraform',
    description: 'Complete DevOps toolchain: CI/CD pipelines, containerisation, orchestration, IaC and cloud deployments. Build real pipelines on AWS and Azure.',
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    courses: ['Git & Jenkins', 'Docker Containers', 'Kubernetes & Helm', 'Ansible Automation', 'Terraform IaC', 'AWS DevOps'],
    duration: '3–5 Months',
    salary: '₹7L–₹35L',
    demand: 'Very High',
    rating: '4.9',
    students: '1,100+',
    nextBatch: 'Enquire now',
    category: 'recommended',
    modules: 7,
    h1: 'DevOps Training in Bangalore — Docker, Kubernetes, Jenkins, Terraform, Ansible & AWS DevOps Certification',
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity / CEH',
    short: 'Cybersecurity',
    img: '/c-cyber.jpg',
    icon: '🛡️',
    badge: 'Trending',
    badgeType: 'new',
    tagline: 'CEH · VAPT · SOC Analyst · CompTIA',
    description: 'Ethical hacking, penetration testing, SOC operations and cloud security. Real labs with Kali Linux, Metasploit and industry-grade vulnerable environments.',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FECACA',
    courses: ['CEH v12', 'CompTIA Security+', 'CISSP', 'Penetration Testing', 'SOC Analyst', 'Cloud Security'],
    duration: '2–5 Months',
    salary: '₹7L–₹35L',
    demand: 'Critical',
    rating: '4.9',
    students: '650+',
    nextBatch: 'Enquire now',
    category: 'recommended',
    modules: 6,
    h1: 'Cybersecurity Training in Bangalore — CEH v12, CompTIA Security+, Ethical Hacking, VAPT & SOC Analyst',
  },
];
