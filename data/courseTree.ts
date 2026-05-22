// ══════════════════════════════════════════════════════
//  COURSE TREE — parent platforms + their child courses
//  Used by /courses/[parent] and /courses/[parent]/[child]
// ══════════════════════════════════════════════════════

export interface ChildCourse {
  slug: string;           // URL segment, also key in serviceDetails
  title: string;
  tagline: string;
  duration: string;
  level: string;          // 'Beginner' | 'Intermediate' | 'Advanced'
  salary: string;
  icon: string;
  badge?: string;
  highlights: string[];
}

export interface ParentCourse {
  slug: string;           // e.g. 'salesforce'
  title: string;          // e.g. 'Salesforce Training'
  tagline: string;
  description: string;
  icon: string;
  color: string;          // accent colour for cards
  bg: string;
  children: ChildCourse[];
}

export const courseTree: ParentCourse[] = [
  // ─── SALESFORCE ───────────────────────────────────
  {
    slug: 'salesforce',
    title: 'Salesforce Training in Bangalore',
    tagline: 'CRM · Admin · Developer · LWC · CPQ · Vlocity · Marketing Cloud',
    description: 'Master the world\'s #1 CRM platform from Admin to Architect. Our Salesforce training in Bangalore covers every specialisation — from basic administration to enterprise development with Apex, LWC, CPQ, Vlocity and Einstein Analytics. Taught by Salesforce-certified consultants with 10+ years of live project experience.',
    icon: '☁️',
    color: '#1565C0',
    bg: '#EFF6FF',
    children: [
      {
        slug: 'salesforce-admin',
        title: 'Salesforce Administrator',
        tagline: 'ADM-201 · CRM Config · Automation · Reports',
        duration: '2–3 Months',
        level: 'Beginner',
        salary: '₹4–18 LPA',
        icon: '⚙️',
        badge: 'Most Popular',
        highlights: ['ADM-201 Certification Prep', 'Flow Builder & Process Automation', 'Reports & Dashboards', 'Security & Sharing Model'],
      },
      {
        slug: 'salesforce-developer',
        title: 'Salesforce Developer',
        tagline: 'Apex · Triggers · SOQL · REST API · PD1',
        duration: '2–3 Months',
        level: 'Intermediate',
        salary: '₹5–20 LPA',
        icon: '💻',
        badge: 'High Demand',
        highlights: ['Apex Triggers & Classes', 'Batch & Async Apex', 'REST/SOAP API Integration', 'PD1 Certification Prep'],
      },
      {
        slug: 'salesforce-lightning',
        title: 'Salesforce Lightning (Aura)',
        tagline: 'Aura Framework · SLDS · Lightning App Builder',
        duration: '2 Months',
        level: 'Intermediate',
        salary: '₹6–20 LPA',
        icon: '⚡',
        highlights: ['Aura Component Framework', 'Lightning Design System (SLDS)', 'Events & Controllers', 'Lightning App Builder'],
      },
      {
        slug: 'salesforce-lwc',
        title: 'Salesforce LWC',
        tagline: 'Lightning Web Components · ES6+ · Wire Adapters',
        duration: '2 Months',
        level: 'Intermediate',
        salary: '₹7–25 LPA',
        icon: '🔌',
        badge: 'Trending',
        highlights: ['LWC Architecture & Decorators', 'Modern JavaScript (ES6+)', 'Parent-Child Communication', 'Apex Integration via Wire'],
      },
      {
        slug: 'salesforce-cpq',
        title: 'Salesforce CPQ',
        tagline: 'Configure · Price · Quote · Revenue Cloud',
        duration: '2 Months',
        level: 'Advanced',
        salary: '₹8–22 LPA',
        icon: '💰',
        highlights: ['Product Bundles & Pricing Rules', 'Discount Schedules', 'Guided Selling', 'CPQ Specialist Certification'],
      },
      {
        slug: 'salesforce-vlocity',
        title: 'Salesforce Vlocity / OmniStudio',
        tagline: 'OmniStudio · DataRaptors · Industry Cloud',
        duration: '2–3 Months',
        level: 'Advanced',
        salary: '₹8–21 LPA',
        icon: '🏭',
        badge: 'Niche & Premium',
        highlights: ['OmniScripts & DataRaptors', 'Integration Procedures', 'EPC & Order Management', 'OmniStudio Developer Cert'],
      },
      {
        slug: 'salesforce-crm-analytics',
        title: 'Salesforce CRM Analytics',
        tagline: 'Einstein Analytics · SAQL · Dashboards · AI Insights',
        duration: '2 Months',
        level: 'Intermediate',
        salary: '₹6–16 LPA',
        icon: '📊',
        highlights: ['Dataset & Dataflow Setup', 'SAQL Query Language', 'Einstein Discovery & AI', 'Dashboard Design'],
      },
    ],
  },

  // ─── CLOUD ────────────────────────────────────────
  {
    slug: 'cloud',
    title: 'Cloud Training in Bangalore',
    tagline: 'AWS · Azure · GCP · DevSecOps · Cloud Architecture',
    description: 'Become a certified cloud professional on AWS and Microsoft Azure. Our cloud training in Bangalore covers architecture design, hands-on labs on real cloud accounts, CI/CD, serverless, Kubernetes, and full certification preparation for SAA-C03 and AZ-104.',
    icon: '⚡',
    color: '#D97706',
    bg: '#FFFBEB',
    children: [
      {
        slug: 'cloud',
        title: 'AWS & Azure (Combined)',
        tagline: 'SAA-C03 · AZ-104 · Multi-Cloud · DevSecOps',
        duration: '2–4 Months',
        level: 'Beginner to Advanced',
        salary: '₹8–45 LPA',
        icon: '☁️',
        badge: 'Best Value',
        highlights: ['AWS Core Services (EC2, S3, Lambda)', 'Azure VMs & Active Directory', 'Terraform IaC', 'Dual Certification Prep'],
      },
    ],
  },

  // ─── SAP ──────────────────────────────────────────
  {
    slug: 'sap',
    title: 'SAP Training in Bangalore',
    tagline: 'FICO · MM · SD · ABAP · S/4HANA · HR/HCM',
    description: 'Comprehensive SAP training across all major functional and technical modules. Learn from SAP-certified consultants with 15+ years of enterprise implementation experience at Fortune 500 companies. Covers ECC and S/4HANA migration.',
    icon: '🔷',
    color: '#7C3AED',
    bg: '#F5F3FF',
    children: [
      {
        slug: 'sap',
        title: 'SAP Functional & Technical',
        tagline: 'FICO · MM · SD · ABAP · S/4HANA',
        duration: '3–6 Months',
        level: 'Beginner to Advanced',
        salary: '₹8–30 LPA',
        icon: '🔷',
        badge: 'Most Placed',
        highlights: ['SAP FICO (GL, AP, AR, Asset)', 'SAP MM & SD Processes', 'SAP ABAP Programming', 'S/4HANA Fiori & Migration'],
      },
    ],
  },

  // ─── PYTHON & AI ──────────────────────────────────
  {
    slug: 'python-data-science',
    title: 'Python & AI Training in Bangalore',
    tagline: 'Python · ML · Deep Learning · GenAI · Data Engineering',
    description: 'From Python basics to production-grade AI systems and Generative AI applications. Our data science training in Bangalore builds real skills through hands-on projects in NLP, computer vision, LLMs, and MLOps — the most in-demand skill globally in 2025.',
    icon: '🐍',
    color: '#059669',
    bg: '#ECFDF5',
    children: [
      {
        slug: 'python-data-science',
        title: 'Python, AI & Data Science',
        tagline: 'Python · ML · Deep Learning · GenAI · MLOps',
        duration: '4–6 Months',
        level: 'Beginner to Advanced',
        salary: '₹8–40 LPA',
        icon: '🐍',
        badge: 'Hot',
        highlights: ['Python & Data Analysis (Pandas, NumPy)', 'ML Algorithms & Model Tuning', 'LLMs & Generative AI (LangChain)', 'AWS SageMaker & MLOps'],
      },
    ],
  },

  // ─── DEVOPS ───────────────────────────────────────
  {
    slug: 'devops',
    title: 'DevOps & Kubernetes Training in Bangalore',
    tagline: 'Docker · Kubernetes · Jenkins · Terraform · Ansible · AWS',
    description: 'Master the complete DevOps toolchain — from version control and CI/CD pipelines to containerisation, orchestration, infrastructure as code and cloud deployments. Build real end-to-end pipelines on AWS and Azure with industry-grade tools.',
    icon: '🔄',
    color: '#0284C7',
    bg: '#F0F9FF',
    children: [
      {
        slug: 'devops',
        title: 'DevOps & Kubernetes',
        tagline: 'Docker · Kubernetes · Jenkins · Terraform · Ansible',
        duration: '3–5 Months',
        level: 'Beginner to Advanced',
        salary: '₹7–35 LPA',
        icon: '🔄',
        badge: 'Trending',
        highlights: ['Docker & Kubernetes Orchestration', 'Jenkins & GitHub Actions CI/CD', 'Terraform IaC', 'CKA Certification Prep'],
      },
    ],
  },

  // ─── CYBERSECURITY ────────────────────────────────
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity Training in Bangalore',
    tagline: 'CEH · VAPT · SOC · CompTIA Security+ · CISSP',
    description: 'Ethical hacking, penetration testing, SOC operations and cloud security training in Bangalore. Real hacking labs using Kali Linux, Metasploit and industry-grade vulnerable environments. Prepares you for CEH v12, CompTIA Security+ and CISSP certifications.',
    icon: '🛡️',
    color: '#DC2626',
    bg: '#FEF2F2',
    children: [
      {
        slug: 'cybersecurity',
        title: 'Cybersecurity / CEH',
        tagline: 'CEH v12 · VAPT · SOC Analyst · CompTIA · CISSP',
        duration: '2–5 Months',
        level: 'Beginner to Advanced',
        salary: '₹7–35 LPA',
        icon: '🛡️',
        badge: 'Critical Demand',
        highlights: ['Ethical Hacking & Penetration Testing', 'SOC Operations & SIEM (Splunk)', 'Cloud Security (AWS/Azure)', 'CEH v12 Certification Prep'],
      },
    ],
  },
];

// Helper: find parent by slug
export function findParent(slug: string): ParentCourse | undefined {
  return courseTree.find(p => p.slug === slug);
}

// Helper: find child anywhere in tree
export function findChild(childSlug: string): { parent: ParentCourse; child: ChildCourse } | undefined {
  for (const parent of courseTree) {
    const child = parent.children.find(c => c.slug === childSlug);
    if (child) return { parent, child };
  }
  return undefined;
}
