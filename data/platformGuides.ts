export interface CareerRoadmapStep {
  level: string;
  title: string;
  timeline: string;
  salary: string;
  skills: string[];
  color: string;
}

export interface IndustryStat {
  val: string;
  label: string;
}

export interface HiringCompany {
  name: string;
  logo: string; // emoji placeholder
}

export interface PlatformGuide {
  slug: string;
  tagline: string;           // "Is Salesforce the right career for you?"
  marketOverview: string;    // 2-3 sentence market overview paragraph
  whyNow: string[];          // 4–5 bullet reasons why this is a great time to enter
  industryStats: IndustryStat[];
  roadmap: CareerRoadmapStep[];
  hiringCompanies: string[];
  isRightFor: string[];      // "This career is right for you if..."
  isNotFor: string[];        // "This may not be the right fit if..."
  nextStep: string;          // e.g. "Explore Salesforce Specialisations"
  nextStepHref: string;      // e.g. "/courses/salesforce"
}

export const platformGuides: Record<string, PlatformGuide> = {
  salesforce: {
    slug: 'salesforce',
    tagline: 'Is a Salesforce career the right move for you in 2025?',
    marketOverview: 'Salesforce is the world\'s #1 CRM platform, used by 150,000+ companies globally — from startups to Fortune 500s. India has the second-largest Salesforce talent pool in the world, and Bangalore is its epicentre. With every company digitising their sales operations, certified Salesforce professionals command premium salaries and face virtually zero unemployment.',
    whyNow: [
      'Salesforce has 21.7% share of the global CRM market — growing at 12% YoY',
      'India needs 4.2 million Salesforce professionals by 2026 (IDC report)',
      'Zero-coding functional roles (Admin, BA) are accessible to non-technical graduates',
      'Bangalore MNCs pay ₹22–40 LPA for senior Salesforce architects',
      'Salesforce certifications are vendor-backed and globally portable',
    ],
    industryStats: [
      { val: '150,000+', label: 'Companies using Salesforce' },
      { val: '$26.4B',   label: 'Salesforce revenue (FY24)' },
      { val: '4.2M',     label: 'Jobs needed in India by 2026' },
      { val: '22%',      label: 'CRM market share (world #1)' },
      { val: '₹8–40 LPA', label: 'Salary range in Bangalore' },
    ],
    roadmap: [
      { level: '01', title: 'Salesforce Admin (Entry)', timeline: '0–6 months', salary: '₹4–8 LPA', skills: ['CRM Configuration', 'Flow Builder', 'Reports & Dashboards', 'ADM-201 Certification'], color: '#1565C0' },
      { level: '02', title: 'Senior Admin / BA', timeline: '6–18 months', salary: '₹8–14 LPA', skills: ['Advanced Automation', 'Business Analysis', 'Stakeholder Management', 'Advanced Admin Cert'], color: '#1B3369' },
      { level: '03', title: 'Salesforce Developer', timeline: '1–3 years', salary: '₹10–22 LPA', skills: ['Apex & LWC', 'REST APIs', 'Triggers & Batch Jobs', 'PD1 Certification'], color: '#0F2147' },
      { level: '04', title: 'Solution Architect', timeline: '3–6 years', salary: '₹22–40 LPA', skills: ['Multi-Cloud Architecture', 'Integration Design', 'Pre-Sales', 'Architect Certification'], color: '#061128' },
    ],
    hiringCompanies: ['Infosys', 'Wipro', 'Accenture', 'TCS', 'Deloitte', 'IBM', 'Cognizant', 'HCL', 'Capgemini', 'Salesforce'],
    isRightFor: [
      'Freshers and graduates looking for a high-paying non-coding IT career',
      'Working professionals in sales, marketing, or operations wanting to move into tech',
      'Developers wanting to specialise in enterprise cloud platforms',
      'MBA graduates targeting IT consulting or pre-sales roles',
      'People who want global certification and international career portability',
    ],
    isNotFor: [
      'People who want to build products from scratch (consider Python/DevOps)',
      'Those who prefer working with raw infrastructure (consider Cloud/DevOps)',
      'Those not willing to invest 2–3 months in structured learning',
    ],
    nextStep: 'Explore Salesforce Specialisations',
    nextStepHref: '/courses/salesforce',
  },

  cloud: {
    slug: 'cloud',
    tagline: 'Is Cloud Computing (AWS / Azure) the right career for you in 2025?',
    marketOverview: 'Cloud computing is the backbone of modern technology — every application, startup, and enterprise runs on cloud infrastructure. AWS alone powers 32% of global cloud infrastructure, with Azure at 23%. Cloud professionals in Bangalore are among the highest-paid IT workers, and the talent shortage means certified professionals get placed within weeks.',
    whyNow: [
      'Global cloud market reaching $1.6 trillion by 2030 — fastest growing IT sector',
      'AWS and Azure certifications are the most in-demand credentials in India\'s job market',
      'Every company migrating on-premise systems to cloud — 5-year migration wave ongoing',
      'Remote work opportunities: cloud engineers work for global companies from Bangalore',
      'Multi-cloud skills (AWS + Azure) double your hiring opportunities',
    ],
    industryStats: [
      { val: '$600B+',   label: 'Global cloud market (2023)' },
      { val: '32%',      label: 'AWS market share (world #1)' },
      { val: '2.4M',     label: 'Cloud jobs unfilled globally' },
      { val: '₹8–45 LPA', label: 'Salary range in Bangalore' },
      { val: '94%',      label: 'Enterprises using cloud (Flexera)' },
    ],
    roadmap: [
      { level: '01', title: 'Cloud Practitioner', timeline: '0–3 months', salary: '₹5–10 LPA', skills: ['AWS/Azure Basics', 'Core Services', 'IAM & Security', 'CCP / AZ-900 Cert'], color: '#D97706' },
      { level: '02', title: 'Cloud Engineer', timeline: '3–12 months', salary: '₹10–20 LPA', skills: ['VPC & Networking', 'EC2/VMs & Storage', 'Serverless (Lambda)', 'SAA-C03 / AZ-104 Cert'], color: '#B45309' },
      { level: '03', title: 'Cloud DevOps Engineer', timeline: '1–3 years', salary: '₹15–30 LPA', skills: ['Terraform IaC', 'CI/CD on Cloud', 'Kubernetes (EKS/AKS)', 'DevOps Pro Cert'], color: '#92400E' },
      { level: '04', title: 'Cloud Architect', timeline: '3–6 years', salary: '₹30–55 LPA', skills: ['Multi-Cloud Design', 'Cost Optimisation', 'Security Architecture', 'AWS SA Pro Cert'], color: '#78350F' },
    ],
    hiringCompanies: ['Amazon', 'Microsoft', 'Google', 'IBM', 'Accenture', 'TCS', 'Infosys', 'HCL', 'Wipro', 'Capgemini'],
    isRightFor: [
      'Engineers and developers wanting to move into high-paying infrastructure roles',
      'Fresh graduates with any technical background (CS, IT, ECE)',
      'DevOps professionals wanting to add cloud expertise',
      'IT professionals whose companies are migrating to cloud',
      'Freelancers targeting remote/global cloud consulting work',
    ],
    isNotFor: [
      'Those who prefer application development over infrastructure (consider Python/Java)',
      'Non-technical professionals without basic IT understanding (start with Python)',
    ],
    nextStep: 'Explore Cloud Specialisations',
    nextStepHref: '/courses/cloud',
  },

  sap: {
    slug: 'sap',
    tagline: 'Is an SAP career the right move for you in 2025?',
    marketOverview: 'SAP is the ERP backbone of over 400,000 companies in 180 countries — including 92% of Forbes Global 2000 companies. With the mandatory migration to SAP S/4HANA by 2027, millions of businesses worldwide are upgrading, creating a massive and sustained demand for SAP professionals. India\'s SAP consulting ecosystem is one of the largest globally, centred in Bangalore, Hyderabad, and Chennai.',
    whyNow: [
      'SAP has mandated all clients to migrate to S/4HANA by 2027 — creating 5+ years of project demand',
      '92% of Forbes Global 2000 companies run on SAP — demand is recession-proof',
      'Functional modules (FICO, MM, SD) are accessible to non-technical professionals',
      'SAP consulting commands some of the highest billing rates in the IT industry',
      'Big 4 firms (Deloitte, EY, PwC, KPMG) are the largest SAP hirers in Bangalore',
    ],
    industryStats: [
      { val: '400,000+', label: 'Companies running SAP worldwide' },
      { val: '92%',      label: 'Fortune 2000 on SAP ERP' },
      { val: '2027',     label: 'S/4HANA migration deadline' },
      { val: '₹5–40 LPA', label: 'Salary range in Bangalore' },
      { val: 'Big 4',    label: 'Top SAP hiring employers' },
    ],
    roadmap: [
      { level: '01', title: 'SAP Associate Consultant', timeline: '0–6 months', salary: '₹4–8 LPA', skills: ['Module Configuration', 'Business Process Mapping', 'SAP GUI & Fiori', 'Associate Certification'], color: '#7C3AED' },
      { level: '02', title: 'SAP Functional Consultant', timeline: '6–24 months', salary: '₹8–18 LPA', skills: ['Full Implementation', 'Go-Live Support', 'Integration (FI-MM, SD-MM)', 'Project Experience'], color: '#6D28D9' },
      { level: '03', title: 'Senior SAP Consultant', timeline: '2–5 years', salary: '₹18–30 LPA', skills: ['S/4HANA Expertise', 'Client Workshops', 'Solution Design', 'Project Management'], color: '#5B21B6' },
      { level: '04', title: 'SAP Solution Architect', timeline: '5–10 years', salary: '₹30–50 LPA', skills: ['Enterprise Architecture', 'Pre-Sales', 'Multi-Module Expertise', 'SAP Distinguished Engineer'], color: '#4C1D95' },
    ],
    hiringCompanies: ['Deloitte', 'EY', 'PwC', 'KPMG', 'Accenture', 'IBM', 'Infosys', 'Wipro', 'TCS', 'Capgemini'],
    isRightFor: [
      'Finance, accounting, or commerce graduates wanting a high-paying IT career',
      'Supply chain, logistics, or HR professionals wanting to move into ERP consulting',
      'MBA graduates targeting Big 4 or top-tier IT consulting firms',
      'Working professionals in SAP-using companies wanting to become consultants',
      'Those who prefer business process expertise over coding',
    ],
    isNotFor: [
      'Those who want to build consumer-facing apps (consider Python/Java)',
      'Absolute beginners without any domain knowledge (functional modules need domain context)',
      'Those who prefer working with open-source tools (SAP is proprietary and enterprise)',
    ],
    nextStep: 'Explore SAP Specialisations',
    nextStepHref: '/courses/sap',
  },

  'python-data-science': {
    slug: 'python-data-science',
    tagline: 'Is Python, Data Science, or AI the right career path for you in 2025?',
    marketOverview: 'Python is the world\'s most popular programming language (TIOBE Index, 2024) and the primary language of data science, machine learning, and generative AI. With the AI revolution accelerating, Python and ML skills are the most universally in-demand across all industries — from banking and healthcare to e-commerce and manufacturing.',
    whyNow: [
      'ChatGPT sparked a global AI arms race — every company is hiring AI/ML engineers urgently',
      'Python developers have the lowest unemployment rate of any tech specialty globally',
      'Generative AI engineers are the highest-paid tech professionals in India in 2025',
      'Data-driven decision-making is now mandatory in every industry sector',
      'Python skills open doors to web dev, automation, data science, ML, and AI — maximum versatility',
    ],
    industryStats: [
      { val: '#1',       label: 'Most popular language (TIOBE 2024)' },
      { val: '97M+',     label: 'Python developers worldwide' },
      { val: '₹12–45 LPA', label: 'GenAI engineer salary in Bangalore' },
      { val: '40%',      label: 'YoY growth in ML job postings in India' },
      { val: '2030',     label: 'AI market projected at $1.8T globally' },
    ],
    roadmap: [
      { level: '01', title: 'Python Developer', timeline: '0–3 months', salary: '₹4–8 LPA', skills: ['Core Python & OOP', 'Django/Flask', 'REST APIs', 'Git & Deployment'], color: '#059669' },
      { level: '02', title: 'Data Analyst / Scientist', timeline: '3–12 months', salary: '₹8–18 LPA', skills: ['Pandas & NumPy', 'SQL & Statistics', 'ML Algorithms', 'Power BI / Tableau'], color: '#047857' },
      { level: '03', title: 'ML / AI Engineer', timeline: '1–3 years', salary: '₹15–35 LPA', skills: ['Deep Learning (TF/PyTorch)', 'NLP & Computer Vision', 'LLMs & LangChain', 'MLOps & Deployment'], color: '#065F46' },
      { level: '04', title: 'AI Architect / Lead', timeline: '3–6 years', salary: '₹35–70 LPA', skills: ['AI System Design', 'LLM Fine-Tuning', 'RAG & Vector DBs', 'AI Product Leadership'], color: '#064E3B' },
    ],
    hiringCompanies: ['Google', 'Amazon', 'Microsoft', 'Flipkart', 'Swiggy', 'CRED', 'Infosys', 'Wipro', 'TCS', 'Mu Sigma'],
    isRightFor: [
      'Freshers and graduates wanting the most versatile and future-proof tech skill',
      'Non-IT professionals (bankers, marketers, analysts) wanting to enter tech',
      'Developers wanting to transition into AI/ML or data science',
      'Entrepreneurs building AI-powered products or SaaS',
      'Anyone fascinated by GenAI, ChatGPT and wanting to build similar systems',
    ],
    isNotFor: [
      'Those who want to work with enterprise ERP systems (consider SAP)',
      'Those who specifically want to manage cloud infrastructure (consider Cloud/DevOps)',
    ],
    nextStep: 'Explore Python & AI Specialisations',
    nextStepHref: '/courses/python-data-science',
  },

  devops: {
    slug: 'devops',
    tagline: 'Is a DevOps career the right choice for you in 2025?',
    marketOverview: 'DevOps has fundamentally changed how software is built and delivered. With every company moving to cloud-native architectures, the demand for engineers who can bridge development and operations — using Docker, Kubernetes, Terraform, and CI/CD pipelines — has exploded. DevOps engineers in Bangalore are among the most sought-after IT professionals, with job offers arriving within days of certification.',
    whyNow: [
      'Kubernetes adoption grew 300% in 3 years — every cloud deployment now uses containers',
      'DevOps engineers have the highest salary-to-experience ratio in IT',
      'CI/CD and GitOps are now mandatory for all software teams globally',
      'Platform engineering and SRE roles are offshoots of DevOps — expanding career paths',
      'Remote work opportunities: DevOps skills are globally transferable',
    ],
    industryStats: [
      { val: '94%',      label: 'Orgs using containers (CNCF Survey)' },
      { val: '₹7–35 LPA', label: 'Salary range in Bangalore' },
      { val: '300%',     label: 'Growth in Kubernetes adoption (3 yrs)' },
      { val: '#1',       label: 'Most hired role at cloud-native companies' },
      { val: 'CKA',      label: 'Most valued DevOps certification' },
    ],
    roadmap: [
      { level: '01', title: 'DevOps Engineer (Junior)', timeline: '0–6 months', salary: '₹5–10 LPA', skills: ['Linux & Shell Scripting', 'Git & GitHub', 'Docker Basics', 'Jenkins CI/CD'], color: '#0284C7' },
      { level: '02', title: 'DevOps Engineer (Mid)', timeline: '6–18 months', salary: '₹10–22 LPA', skills: ['Kubernetes & Helm', 'Terraform IaC', 'Ansible', 'Cloud (AWS/Azure)'], color: '#0369A1' },
      { level: '03', title: 'Senior DevOps / SRE', timeline: '2–4 years', salary: '₹20–35 LPA', skills: ['Platform Engineering', 'Service Mesh (Istio)', 'Observability (Prometheus/Grafana)', 'CKA Certified'], color: '#075985' },
      { level: '04', title: 'Platform / Cloud Architect', timeline: '4–8 years', salary: '₹35–60 LPA', skills: ['Multi-Cloud Architecture', 'FinOps & Cost Optimisation', 'Team Leadership', 'Enterprise DevOps Strategy'], color: '#0C4A6E' },
    ],
    hiringCompanies: ['Amazon', 'Google', 'Flipkart', 'Swiggy', 'Razorpay', 'PhonePe', 'Infosys', 'HCL', 'TCS', 'ThoughtWorks'],
    isRightFor: [
      'Developers who want to own the full delivery pipeline, not just code',
      'System administrators or infrastructure engineers wanting to modernise their skills',
      'Cloud professionals wanting to add automation and orchestration expertise',
      'Anyone who enjoys automating repetitive tasks and building reliable systems',
      'Professionals targeting high-growth product companies and startups',
    ],
    isNotFor: [
      'Those who prefer business analysis or functional IT (consider SAP or Salesforce)',
      'Those with no interest in Linux, scripting, or command-line tools',
    ],
    nextStep: 'Explore DevOps Specialisations',
    nextStepHref: '/courses/devops',
  },

  cybersecurity: {
    slug: 'cybersecurity',
    tagline: 'Is a Cybersecurity career the right path for you in 2025?',
    marketOverview: 'Cybersecurity is the fastest-growing sector in IT, driven by escalating cyber threats, new compliance mandates (RBI, SEBI, DPDP Act), and the explosion of cloud infrastructure. India faces a critical shortage of 800,000+ cybersecurity professionals, and organisations are paying premium salaries to fill the gap. Every breach headline creates 100 new job openings.',
    whyNow: [
      'India\'s DPDP Act (Data Protection) mandates cybersecurity investments across all sectors',
      'RBI and SEBI have mandated VAPT audits for all financial institutions annually',
      'Ransomware attacks increased 300% in India in 2023 — driving massive security spending',
      'CEH and OSCP certifications command the highest starting salaries for freshers',
      'Every company — bank, hospital, startup, MNC — needs security professionals',
    ],
    industryStats: [
      { val: '800,000+', label: 'Unfilled cyber jobs in India' },
      { val: '₹6–40 LPA', label: 'Salary range in Bangalore' },
      { val: '300%',     label: 'Rise in cyberattacks in India (2023)' },
      { val: '0%',       label: 'Unemployment for certified professionals' },
      { val: '$10.5T',   label: 'Global cybercrime cost by 2025' },
    ],
    roadmap: [
      { level: '01', title: 'Security Analyst (Junior)', timeline: '0–6 months', salary: '₹4–8 LPA', skills: ['Networking Fundamentals', 'Linux & Kali', 'CEH v12 Certification', 'SIEM Basics (Splunk)'], color: '#DC2626' },
      { level: '02', title: 'Penetration Tester / SOC L2', timeline: '6–24 months', salary: '₹8–18 LPA', skills: ['VAPT Methodology', 'Burp Suite & Metasploit', 'Incident Response', 'OSCP / CSA Cert'], color: '#B91C1C' },
      { level: '03', title: 'Senior Pentester / Security Engineer', timeline: '2–5 years', salary: '₹18–32 LPA', skills: ['Red Team Operations', 'Cloud Security', 'Threat Hunting', 'CISSP / CISM'], color: '#991B1B' },
      { level: '04', title: 'CISO / Security Architect', timeline: '5–10 years', salary: '₹35–80 LPA', skills: ['Security Strategy', 'GRC & Compliance', 'Zero Trust Architecture', 'Board-Level Reporting'], color: '#7F1D1D' },
    ],
    hiringCompanies: ['Wipro', 'TCS', 'HCL', 'IBM', 'Deloitte', 'HDFC Bank', 'ICICI Bank', 'Razorpay', 'Zscaler', 'Palo Alto Networks'],
    isRightFor: [
      'IT professionals who want to specialise in one of the most critical fields',
      'Freshers with networking or Linux knowledge looking for a high-impact career',
      'Ethical hackers, CTF enthusiasts, or anyone fascinated by how systems are broken',
      'Banking, healthcare, or government IT professionals moving into security',
      'Those who want to work in a field that directly protects people and businesses',
    ],
    isNotFor: [
      'Those who prefer building user-facing applications (consider Python/Java)',
      'Those unwilling to stay continuously updated (cybersecurity evolves daily)',
    ],
    nextStep: 'Explore Cybersecurity Specialisations',
    nextStepHref: '/courses/cybersecurity',
  },
};

export function getPlatformGuide(slug: string): PlatformGuide | undefined {
  return platformGuides[slug];
}
