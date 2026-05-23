// ══════════════════════════════════════════════════════
//  COURSE TREE — parent platforms + their child courses
//  Used by /courses/[parent] and /courses/[parent]/[child]
// ══════════════════════════════════════════════════════

export interface ChildCourse {
  slug: string;           // URL segment, also key in serviceDetails
  href?: string;          // optional URL override (defaults to /services/[slug])
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
        href: '/salesforce/admin-training',
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
        href: '/salesforce/developer-training',
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
        href: '/salesforce/lightning-training',
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
        href: '/salesforce/lwc-training',
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
        href: '/salesforce/cpq-training',
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
        href: '/salesforce/vlocity-training',
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
        href: '/salesforce/crm-analytics-training',
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
        slug: 'aws',
        href: '/cloud/aws-training',
        title: 'AWS Training',
        tagline: 'EC2 · S3 · Lambda · VPC · SAA-C03',
        duration: '2–3 Months',
        level: 'Beginner to Advanced',
        salary: '₹8–35 LPA',
        icon: '☁️',
        badge: 'Most Popular',
        highlights: ['EC2, S3, Lambda, RDS, VPC', 'IAM & Security Best Practices', 'CloudFormation & Terraform', 'SAA-C03 Certification Prep'],
      },
      {
        slug: 'azure',
        href: '/cloud/azure-training',
        title: 'Microsoft Azure Training',
        tagline: 'AZ-104 · AZ-900 · Azure DevOps · AKS',
        duration: '2–3 Months',
        level: 'Beginner to Advanced',
        salary: '₹8–30 LPA',
        icon: '🔵',
        badge: 'High Demand',
        highlights: ['Azure VMs & Active Directory', 'AKS & Azure DevOps', 'ARM Templates & Terraform', 'AZ-104 Certification Prep'],
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
        slug: 'sap-fico',
        href: '/sap/fico-training',
        title: 'SAP FICO',
        tagline: 'Financial Accounting · Controlling · S/4HANA Finance',
        duration: '3–4 Months',
        level: 'Beginner to Advanced',
        salary: '₹6–22 LPA',
        icon: '💼',
        badge: 'Most Placed',
        highlights: ['GL, AP, AR & Asset Accounting', 'Cost Centre & Profit Centre', 'S/4HANA Universal Journal', 'SAP FICO Certification Prep'],
      },
      {
        slug: 'sap-mm',
        href: '/sap/mm-training',
        title: 'SAP MM',
        tagline: 'Materials Management · Procurement · Inventory',
        duration: '3 Months',
        level: 'Beginner to Advanced',
        salary: '₹5–18 LPA',
        icon: '📦',
        badge: 'In Demand',
        highlights: ['Purchase Orders & RFQ', 'Goods Receipt & Inventory', 'Invoice Verification', 'MM-FI & MM-SD Integration'],
      },
      {
        slug: 'sap-sd',
        href: '/sap/sd-training',
        title: 'SAP SD',
        tagline: 'Sales & Distribution · Order to Cash · Pricing',
        duration: '3 Months',
        level: 'Beginner to Advanced',
        salary: '₹5–18 LPA',
        icon: '🛒',
        badge: 'High Value',
        highlights: ['Sales Orders & Delivery', 'Pricing Procedures', 'Billing & Revenue', 'S/4HANA SD & Fiori'],
      },
      {
        slug: 'sap-abap',
        href: '/sap/abap-training',
        title: 'SAP ABAP',
        tagline: 'ABAP Programming · CDS Views · OData · RAP',
        duration: '3 Months',
        level: 'Intermediate',
        salary: '₹6–20 LPA',
        icon: '💻',
        badge: 'Technical',
        highlights: ['Reports, BAPIs & RFCs', 'ALV Grid & Module Pool', 'CDS Views & OData', 'S/4HANA ABAP & RAP'],
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
        slug: 'docker-kubernetes',
        href: '/devops/docker-kubernetes-training',
        title: 'Docker & Kubernetes',
        tagline: 'Docker · Kubernetes · Helm · ArgoCD · CKA',
        duration: '2 Months',
        level: 'Intermediate',
        salary: '₹8–28 LPA',
        icon: '🐳',
        badge: 'Trending',
        highlights: ['Docker Compose & Registries', 'Kubernetes Deployments & Services', 'Helm Charts & GitOps', 'CKA Certification Prep'],
      },
      {
        slug: 'jenkins-cicd',
        href: '/devops/jenkins-cicd-training',
        title: 'Jenkins & CI/CD',
        tagline: 'Jenkins · GitHub Actions · GitLab CI · Pipelines',
        duration: '6 Weeks',
        level: 'Intermediate',
        salary: '₹7–22 LPA',
        icon: '⚙️',
        badge: 'Essential',
        highlights: ['Declarative Jenkinsfile Pipelines', 'GitHub Actions Workflows', 'Docker & K8s in CI/CD', 'SonarQube & Nexus Integration'],
      },
      {
        slug: 'terraform-ansible',
        href: '/devops/terraform-ansible-training',
        title: 'Terraform & Ansible',
        tagline: 'Terraform IaC · Ansible · HashiCorp Certified',
        duration: '6 Weeks',
        level: 'Intermediate',
        salary: '₹8–25 LPA',
        icon: '🏗️',
        badge: 'IaC Specialist',
        highlights: ['Terraform on AWS & Azure', 'Ansible Playbooks & Roles', 'State Management & Modules', 'HashiCorp Terraform Associate'],
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
        slug: 'ceh',
        href: '/cybersecurity/ceh-training',
        title: 'CEH Training',
        tagline: 'CEH v12 · Ethical Hacking · Kali Linux · Metasploit',
        duration: '2–3 Months',
        level: 'Beginner to Advanced',
        salary: '₹6–22 LPA',
        icon: '🎯',
        badge: 'Most Popular',
        highlights: ['Penetration Testing Methodology', 'Kali Linux & Metasploit', 'Web App Hacking & OWASP', 'CEH v12 Certification Prep'],
      },
      {
        slug: 'vapt',
        href: '/cybersecurity/vapt-training',
        title: 'VAPT Training',
        tagline: 'Vulnerability Assessment · Penetration Testing · OSCP',
        duration: '2 Months',
        level: 'Intermediate',
        salary: '₹7–25 LPA',
        icon: '🔍',
        badge: 'Consulting Skill',
        highlights: ['Network & Web App Pentesting', 'Burp Suite Pro & Nmap', 'VAPT Report Writing', 'OSCP & CPENT Prep'],
      },
      {
        slug: 'soc-analyst',
        href: '/cybersecurity/soc-training',
        title: 'SOC Analyst',
        tagline: 'SIEM · Splunk · Incident Response · Threat Hunting',
        duration: '2 Months',
        level: 'Beginner to Intermediate',
        salary: '₹5–18 LPA',
        icon: '🖥️',
        badge: 'Blue Team',
        highlights: ['Splunk SIEM & SPL', 'Incident Response Lifecycle', 'MITRE ATT&CK Framework', 'EC-Council CSA Cert Prep'],
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
