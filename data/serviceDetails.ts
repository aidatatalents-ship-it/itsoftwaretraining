export interface ServiceDetail {
  curriculum?: { module: string; topics: string[] }[];
  tools?: string[];
  faqs?: { q: string; a: string }[];
  careerRoles?: string[];
  certifications?: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  salesforce: {
    curriculum: [
      { module: 'Salesforce Fundamentals', topics: ['CRM Concepts', 'Salesforce Architecture', 'Sales Cloud Overview', 'Service Cloud Basics', 'AppExchange'] },
      { module: 'Salesforce Administration', topics: ['User Management & Profiles', 'Object & Field Configuration', 'Page Layouts & Record Types', 'Automation: Workflow, Process Builder', 'Reports & Dashboards'] },
      { module: 'Apex & Visualforce (Dev)', topics: ['Apex Triggers & Classes', 'SOQL & SOSL', 'Visualforce Pages', 'Lightning Web Components (LWC)', 'REST API Integration'] },
      { module: 'Advanced Topics', topics: ['Einstein Analytics', 'Salesforce CPQ', 'Marketing Cloud', 'Data Migration (Data Loader)', 'Security & Sharing Model'] },
      { module: 'Certification Prep', topics: ['Admin ADM-201 Prep', 'PD1 Developer Exam Prep', 'Mock Exams & Revision', 'Interview Q&A', 'Live Project Capstone'] },
    ],
    tools: ['Salesforce CRM', 'Apex IDE', 'Workbench', 'Data Loader', 'VS Code + Salesforce Extension', 'Postman (API)', 'SOQL Explorer'],
    careerRoles: ['Salesforce Admin', 'Salesforce Developer', 'Salesforce Architect', 'CRM Analyst', 'Salesforce Business Analyst', 'Marketing Cloud Specialist'],
    certifications: ['Salesforce Certified Administrator (ADM-201)', 'Salesforce Platform Developer I (PD1)', 'Salesforce Sales Cloud Consultant'],
    faqs: [
      { q: 'Do I need programming knowledge for Salesforce training?', a: 'Not for the Admin track. For the Developer track, basic programming understanding helps but our curriculum starts from scratch.' },
      { q: 'What is the salary of a Salesforce professional in Bangalore?', a: 'Freshers typically start at ₹4–8 LPA. With 2–3 years experience, Salesforce professionals earn ₹10–25 LPA in Bangalore.' },
      { q: 'Does Nexus Training provide Salesforce certification exam vouchers?', a: 'Yes, we provide certification exam guidance and preparation. Voucher costs are at actuals (Salesforce pricing).' },
      { q: 'What is the duration of Salesforce Admin training?', a: 'Salesforce Admin is 2 months (weekday) or 3 months (weekend). Full Admin + Developer combo is 4–6 months.' },
      { q: 'Are there job opportunities for Salesforce in Bangalore?', a: 'Extremely high. Bangalore has 500+ Salesforce hiring companies including Infosys, Wipro, Accenture, and top Salesforce partners.' },
    ],
  },

  sap: {
    curriculum: [
      { module: 'SAP Overview & Navigation', topics: ['SAP Architecture', 'SAP GUI Navigation', 'Organizational Structure', 'Master Data Concepts', 'S/4HANA Introduction'] },
      { module: 'SAP FICO', topics: ['General Ledger Accounting', 'Accounts Payable & Receivable', 'Asset Accounting', 'Cost Center & Profit Center', 'SAP Controlling (CO)'] },
      { module: 'SAP MM', topics: ['Procurement Process', 'Purchase Orders & RFQ', 'Inventory Management', 'Invoice Verification', 'Vendor Management'] },
      { module: 'SAP SD', topics: ['Sales Order Processing', 'Pricing & Billing', 'Credit Management', 'Delivery & Shipping', 'Returns Processing'] },
      { module: 'SAP ABAP (Technical)', topics: ['ABAP Programming Basics', 'Data Dictionary', 'Reports & ALV', 'Function Modules & BAPIs', 'Enhancement Framework'] },
    ],
    tools: ['SAP GUI', 'SAP S/4HANA', 'SAP Fiori', 'SAP HANA Studio', 'Eclipse IDE (ABAP)', 'SAP Solution Manager'],
    careerRoles: ['SAP FICO Consultant', 'SAP MM Consultant', 'SAP SD Consultant', 'SAP ABAP Developer', 'SAP Basis Admin', 'SAP Business Analyst'],
    certifications: ['SAP Certified Application Associate — SAP S/4HANA', 'SAP Certified Technology Associate', 'SAP FICO C_TFIN52'],
    faqs: [
      { q: 'What is the best SAP module for freshers in Bangalore?', a: 'SAP FICO and SAP SD are most in-demand. FICO is ideal for commerce graduates; SD suits those with sales/supply chain background.' },
      { q: 'How much does an SAP consultant earn in Bangalore?', a: 'Freshers: ₹4–8 LPA. Experienced SAP consultants (3–5 yrs) earn ₹12–30 LPA. SAP Architects can earn ₹40+ LPA.' },
      { q: 'Is SAP training available online at Nexus?', a: 'Yes! We offer both in-centre (Koramangala/Whitefield) and online instructor-led SAP training with full lab access.' },
      { q: 'Do you provide SAP access for practice?', a: 'Yes, every student gets SAP practice system access for the duration of the course plus 3 months post-training.' },
      { q: 'Is there demand for SAP S/4HANA skills in Bangalore?', a: 'Extremely high. All major enterprises are migrating to S/4HANA. Our curriculum covers both legacy ECC and S/4HANA.' },
    ],
  },

  cybersecurity: {
    curriculum: [
      { module: 'Networking Fundamentals', topics: ['TCP/IP, OSI Model', 'Network Protocols', 'Firewalls & IDS/IPS', 'VPN & Network Security', 'Wireshark Lab'] },
      { module: 'Ethical Hacking & Penetration Testing', topics: ['Reconnaissance (Passive & Active)', 'Vulnerability Assessment', 'Exploitation with Metasploit', 'Web App Pentesting (OWASP)', 'Reporting'] },
      { module: 'SOC Operations', topics: ['SIEM Tools (Splunk, IBM QRadar)', 'Incident Response', 'Threat Intelligence', 'Log Analysis', 'Security Monitoring'] },
      { module: 'Cloud Security', topics: ['AWS Security Services', 'Azure Security Center', 'Cloud VAPT', 'Identity & Access Management', 'Compliance (ISO 27001)'] },
      { module: 'CEH & CISSP Prep', topics: ['CEH v12 Domains', 'CISSP Domains', 'CompTIA Security+ Prep', 'Mock Exams', 'Practical CTF Challenges'] },
    ],
    tools: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'Splunk', 'Nessus', 'OWASP ZAP'],
    careerRoles: ['Security Analyst', 'Penetration Tester', 'SOC Analyst', 'Ethical Hacker', 'Cloud Security Engineer', 'CISO (Advanced)'],
    certifications: ['Certified Ethical Hacker (CEH)', 'CompTIA Security+', 'CISSP', 'Offensive Security OSCP', 'AWS Security Specialty'],
    faqs: [
      { q: 'Is cybersecurity a good career in Bangalore 2026?', a: 'One of the best. India faces 3,000+ cyberattacks daily and there is a massive talent shortage. Salaries are premium.' },
      { q: 'Do I need a programming background for cybersecurity?', a: 'Not mandatory. Basic understanding of networks and Linux is helpful. We start from fundamentals.' },
      { q: 'What is the salary of a cybersecurity analyst in Bangalore?', a: 'Entry level: ₹5–8 LPA. Mid-level (3 yrs): ₹12–20 LPA. Specialised pentesters: ₹20–35+ LPA.' },
      { q: 'Does the training include real hacking labs?', a: 'Absolutely. We have dedicated hacking labs with vulnerable VM environments. All practice is on legal, isolated systems.' },
      { q: 'How long does CEH preparation take?', a: 'Our CEH-focused batch runs for 3 months. Most students pass on their first attempt with our structured prep.' },
    ],
  },

  'python-data-science': {
    curriculum: [
      { module: 'Python Programming', topics: ['Python Basics & Data Types', 'OOP in Python', 'File Handling & Exceptions', 'Libraries: NumPy, Pandas', 'Web Scraping'] },
      { module: 'Statistics & Data Analysis', topics: ['Descriptive Statistics', 'Probability & Distributions', 'Hypothesis Testing', 'Exploratory Data Analysis (EDA)', 'Data Visualisation (Matplotlib, Seaborn)'] },
      { module: 'Machine Learning', topics: ['Supervised Learning (Regression, Classification)', 'Unsupervised Learning (Clustering)', 'Feature Engineering', 'Model Evaluation & Tuning', 'Ensemble Methods (XGBoost, Random Forest)'] },
      { module: 'Deep Learning & AI', topics: ['Neural Networks (ANN, CNN, RNN)', 'NLP & Text Analytics', 'Large Language Models (LLMs)', 'Generative AI (ChatGPT APIs)', 'Computer Vision'] },
      { module: 'Data Engineering & Deployment', topics: ['SQL & NoSQL Databases', 'ETL Pipelines', 'MLOps with MLflow', 'Model Deployment (FastAPI, Streamlit)', 'Cloud ML (AWS SageMaker, Azure ML)'] },
    ],
    tools: ['Python', 'Jupyter Notebook', 'VS Code', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Power BI', 'AWS SageMaker', 'Databricks'],
    careerRoles: ['Data Scientist', 'ML Engineer', 'Data Analyst', 'AI Engineer', 'Data Engineer', 'NLP Engineer', 'Business Intelligence Analyst'],
    certifications: ['Google Professional Data Engineer', 'AWS Certified Machine Learning', 'Microsoft Azure Data Scientist', 'IBM Data Science Professional Certificate'],
    faqs: [
      { q: 'Is Python difficult to learn for beginners?', a: 'Python is considered the easiest programming language. Our curriculum starts from absolute zero with no prior coding required.' },
      { q: 'What is the salary of a Data Scientist in Bangalore?', a: 'Freshers: ₹6–12 LPA. Mid-level: ₹15–30 LPA. Senior Data Scientists at top firms earn ₹40–60 LPA.' },
      { q: 'Do you cover Generative AI and ChatGPT in the curriculum?', a: 'Yes! Our curriculum includes LLMs, ChatGPT API integration, LangChain, and building GenAI applications — very current content.' },
      { q: 'What kind of projects will I work on?', a: 'Real-world projects: Stock prediction, sentiment analysis, recommendation systems, customer churn prediction, image classification.' },
      { q: 'How is the job market for Python/Data Science in Bangalore 2026?', a: 'Phenomenal. Every product company and MNC in Bangalore is hiring data scientists. It is the #1 in-demand skill globally.' },
    ],
  },

  cloud: {
    curriculum: [
      { module: 'Cloud Fundamentals', topics: ['Cloud Concepts (IaaS, PaaS, SaaS)', 'AWS vs Azure vs GCP', 'Virtualization & Containers', 'Networking in Cloud', 'Cloud Economics'] },
      { module: 'AWS Core Services', topics: ['EC2, S3, RDS', 'IAM & Security', 'Lambda & Serverless', 'CloudFormation & CDK', 'ECS & EKS'] },
      { module: 'AWS Advanced & Architecture', topics: ['Well-Architected Framework', 'High Availability Design', 'Auto Scaling & Load Balancing', 'CloudFront & Route 53', 'Cost Optimisation'] },
      { module: 'Microsoft Azure', topics: ['Azure Portal & Resource Groups', 'Azure VMs & Storage', 'Azure Active Directory', 'Azure DevOps', 'Azure Kubernetes Service (AKS)'] },
      { module: 'DevSecOps & Certification Prep', topics: ['Infrastructure as Code (Terraform)', 'CI/CD on Cloud', 'Cloud Security Best Practices', 'AWS SAA-C03 Exam Prep', 'AZ-104 Exam Prep'] },
    ],
    tools: ['AWS Console', 'Azure Portal', 'Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Jenkins', 'CloudFormation', 'Azure DevOps'],
    careerRoles: ['AWS Solutions Architect', 'Azure Administrator', 'Cloud Engineer', 'DevOps Engineer', 'Cloud Security Engineer', 'Site Reliability Engineer (SRE)'],
    certifications: ['AWS Solutions Architect Associate (SAA-C03)', 'AWS DevOps Engineer Professional', 'Azure Administrator (AZ-104)', 'Azure Solutions Architect (AZ-305)', 'Google Associate Cloud Engineer'],
    faqs: [
      { q: 'Which is better — AWS or Azure for career in Bangalore?', a: 'Both are excellent. AWS has more startups; Azure dominates MNCs and enterprise. Our course covers both, giving you dual advantage.' },
      { q: 'What is the salary of a cloud engineer in Bangalore?', a: 'Entry level (certified): ₹8–14 LPA. Mid-level: ₹15–30 LPA. Cloud Architects: ₹35–50 LPA.' },
      { q: 'Do you help with AWS certification exam registration?', a: 'Yes, we guide you through exam registration, voucher procurement, and provide full exam preparation within the course.' },
      { q: 'Is there lab access for AWS & Azure practice?', a: 'Yes. Students get cloud lab credits for hands-on practice on real AWS and Azure environments throughout the course.' },
      { q: 'How long does it take to get an AWS certification?', a: 'With our structured prep, most students clear AWS SAA in 2–3 months of focused training.' },
    ],
  },

  'power-bi': {
    curriculum: [
      { module: 'Data Analytics Foundations', topics: ['Analytics Concepts', 'Data Types & Sources', 'Database Basics', 'Excel for Analytics', 'Introduction to BI'] },
      { module: 'Power BI Desktop', topics: ['Power Query (ETL)', 'Data Modelling', 'DAX Fundamentals', 'Calculated Columns & Measures', 'Report Building'] },
      { module: 'Advanced Power BI', topics: ['Advanced DAX (Time Intelligence, Iterator)', 'Row-Level Security (RLS)', 'Composite Models', 'Performance Optimisation', 'AI Visuals'] },
      { module: 'Power BI Service & Collaboration', topics: ['Publishing & Workspaces', 'Gateways & Refresh', 'Apps & Sharing', 'Power BI Embedded', 'Power Automate Integration'] },
      { module: 'SQL & Tableau', topics: ['SQL for Data Analysts', 'Joins, Subqueries, CTEs', 'Tableau Desktop Basics', 'Tableau Calculated Fields', 'Dashboard Best Practices'] },
    ],
    tools: ['Power BI Desktop', 'Power BI Service', 'DAX Studio', 'Tabular Editor', 'SQL Server', 'Excel (Power Pivot)', 'Tableau Desktop', 'Azure Data Studio'],
    careerRoles: ['Power BI Developer', 'BI Analyst', 'Data Analyst', 'Tableau Developer', 'Reporting Analyst', 'Analytics Manager'],
    certifications: ['Microsoft PL-300 (Power BI Data Analyst)', 'Tableau Desktop Specialist', 'Google Data Analytics Certificate'],
    faqs: [
      { q: 'Do I need SQL knowledge before learning Power BI?', a: 'No, we teach SQL as part of the curriculum. However, Excel knowledge is a plus.' },
      { q: 'What is the salary of a Power BI developer in Bangalore?', a: 'Entry level: ₹4–7 LPA. Experienced BI developers with DAX expertise: ₹10–20 LPA.' },
      { q: 'How long does it take to learn Power BI?', a: 'Our core Power BI course is 2 months. The full Analytics combo with SQL and Tableau is 3 months.' },
      { q: 'Is Power BI or Tableau better for career?', a: 'Power BI dominates in Indian enterprises (especially Microsoft shops). Tableau is preferred in MNCs. Knowing both is a major advantage — we teach both.' },
      { q: 'What industries hire Power BI professionals in Bangalore?', a: 'Banking, FMCG, IT services, healthcare, e-commerce — virtually every industry needs BI analysts. Very versatile skill.' },
    ],
  },

  devops: {
    curriculum: [
      { module: 'Linux & Shell Scripting', topics: ['Linux Administration', 'Bash Scripting', 'File Systems & Permissions', 'Process Management', 'Networking in Linux'] },
      { module: 'Version Control & CI/CD', topics: ['Git & GitHub/GitLab', 'Branching Strategies', 'Jenkins Pipelines (Declarative)', 'Groovy Scripts', 'GitHub Actions'] },
      { module: 'Containers & Orchestration', topics: ['Docker Architecture', 'Dockerfile & Compose', 'Kubernetes Architecture', 'Deployments, Services, Ingress', 'Helm Charts'] },
      { module: 'Configuration & Infrastructure', topics: ['Ansible Playbooks & Roles', 'Terraform (IaC)', 'AWS CloudFormation', 'Configuration Management', 'Secret Management (Vault)'] },
      { module: 'Monitoring & Cloud DevOps', topics: ['Prometheus & Grafana', 'ELK Stack', 'AWS DevOps Services (CodePipeline)', 'Azure DevOps', 'SRE Practices'] },
    ],
    tools: ['Git', 'Jenkins', 'Docker', 'Kubernetes', 'Ansible', 'Terraform', 'Prometheus', 'Grafana', 'ELK Stack', 'AWS CodePipeline', 'Azure DevOps'],
    careerRoles: ['DevOps Engineer', 'Site Reliability Engineer (SRE)', 'Cloud DevOps Engineer', 'Platform Engineer', 'Build & Release Engineer', 'Kubernetes Administrator'],
    certifications: ['AWS DevOps Engineer Professional', 'CKA (Certified Kubernetes Administrator)', 'Docker Certified Associate', 'HashiCorp Terraform Associate'],
    faqs: [
      { q: 'Do I need development experience to learn DevOps?', a: 'Basic Linux and scripting knowledge helps. Our curriculum starts from Linux fundamentals, so beginners are welcome.' },
      { q: 'What is the salary of a DevOps engineer in Bangalore?', a: 'Entry: ₹6–10 LPA. Mid-level with Kubernetes/Terraform: ₹15–30 LPA. Senior DevOps Engineers: ₹35+ LPA.' },
      { q: 'Which is more in demand — AWS DevOps or Azure DevOps?', a: 'Both are highly in demand. AWS DevOps has more startup adoption; Azure DevOps dominates enterprises. Our course covers both.' },
      { q: 'How long does DevOps training take?', a: 'Our comprehensive DevOps bootcamp is 3–4 months, covering full toolchain from Git to Kubernetes and cloud deployments.' },
      { q: 'Will I work on real-world CI/CD pipeline projects?', a: 'Yes. You will build end-to-end pipelines for real applications — from code commit to production deployment on AWS/Azure.' },
    ],
  },

  'salesforce-admin': {
    curriculum: [
      { module: 'Cloud Computing & Force.com', topics: ['Introduction to Cloud Computing', 'SaaS / PaaS / IaaS', 'Salesforce Architecture', 'Sandbox vs Production', 'AppExchange & Trailhead'] },
      { module: 'CRM Fundamentals', topics: ['Sales Cloud — Lead Process, Campaigns, Opportunity', 'Service Cloud — Cases, Email-to-Case, Web-to-Case', 'Quote Management', 'Sales Forecasting'] },
      { module: 'App Building & Configuration', topics: ['Naming Conventions', 'Custom Objects & Fields', 'Data Types & Picklists', 'Validation Rules', 'Page Layouts & Record Types'] },
      { module: 'Relationships & Security', topics: ['Lookup & Master-Detail Relationships', 'Roll-Up Summary Fields', 'OWD, Role Hierarchies, Sharing Rules', 'Profiles & Permission Sets', 'Field-Level Security'] },
      { module: 'Automation & Reporting', topics: ['Workflow & Process Builder', 'Flow Builder', 'Approval Processes', 'Reports & Dashboards', 'Data Loader'] },
    ],
    tools: ['Salesforce CRM', 'Data Loader', 'Workbench', 'Trailhead', 'Process Builder', 'Flow Builder', 'VS Code + SF Extension'],
    careerRoles: ['Salesforce Administrator', 'CRM Admin', 'Salesforce Business Analyst', 'Sales Operations Analyst', 'Salesforce Support Specialist'],
    certifications: ['Salesforce Certified Administrator (ADM-201)', 'Salesforce Advanced Administrator'],
    faqs: [
      { q: 'Can anyone take Salesforce Admin Training?', a: 'Almost anyone — no mandatory prerequisite. Basic cloud awareness is enough. Our trainers cover everything from scratch.' },
      { q: 'What is the salary of a Salesforce Admin in Bangalore?', a: 'Certified Salesforce admins earn 1.2–1.8x more than non-certified peers. Freshers start at ₹4–7 LPA; experienced admins earn ₹10–18 LPA.' },
      { q: 'How long does Salesforce Admin training take?', a: '2 months weekday / 3 months weekend. Includes 20 hours of live training, 14 assignments, and 2 real-world projects.' },
      { q: 'Does the course prepare me for ADM-201 certification?', a: 'Yes — the entire curriculum is aligned to the ADM-201 exam. Mock tests and Q&A sessions are included.' },
      { q: 'Is there placement support after Salesforce Admin training?', a: 'Yes. We provide AI-built resume, LinkedIn overhaul, Naukri activation, and direct recruiter submissions for all students.' },
    ],
  },

  'salesforce-developer': {
    curriculum: [
      { module: 'Web & OOP Foundations', topics: ['HTML Basics', 'JavaScript Fundamentals', 'OOP Concepts', 'Apex Core Concepts', 'SOQL & SOSL Queries'] },
      { module: 'Apex Development', topics: ['Apex Triggers & Bulk Triggers', 'Trigger Context Variables', 'Order of Execution', 'Testing Apex (Unit Tests)', 'Dynamic Apex'] },
      { module: 'Asynchronous Apex', topics: ['Synchronous vs Asynchronous', 'Future Methods', 'Batch Apex (Start/Execute/Finish)', 'Schedulable Apex', 'Queueable Apex'] },
      { module: 'Visualforce & Integration', topics: ['Visualforce Pages & Controllers', 'Standard & Custom Controllers', 'REST & SOAP API Integration', 'Postman Testing', 'External Data Sources'] },
      { module: 'Certification Prep', topics: ['PD1 Exam Domains', 'Mock Exams', 'Real-World Project', 'Interview Q&A', 'Code Review Best Practices'] },
    ],
    tools: ['Salesforce Developer Console', 'VS Code + SF Extension', 'Workbench', 'SOQL Explorer', 'Postman', 'GitHub', 'Apex PMD'],
    careerRoles: ['Salesforce Developer', 'Apex Developer', 'Salesforce Technical Consultant', 'Force.com Developer', 'Integration Developer'],
    certifications: ['Salesforce Platform Developer I (PD1)', 'Salesforce Platform Developer II (PD2)', 'Salesforce JavaScript Developer I'],
    faqs: [
      { q: 'Who can take Salesforce Developer Training?', a: 'Anyone with a basic graduation. BBA, BCA, MCA, or MBA graduates with basic Salesforce knowledge get the most out of it quickly.' },
      { q: 'What is the salary of a Salesforce Developer in Bangalore?', a: 'National average is ₹5 LPA for freshers, scaling up to ₹15+ LPA with 2–3 years of experience.' },
      { q: 'Is programming knowledge required?', a: 'Basic OOP understanding helps. The course starts from HTML and JS foundations, so no prior Apex experience is needed.' },
      { q: 'What is the difference between Salesforce Admin and Developer?', a: 'Admins configure Salesforce without code. Developers write Apex code, triggers, and APIs for custom business logic.' },
      { q: 'How many projects are included?', a: '2 real-world projects plus 12 assignments across the 25-hour curriculum to build your portfolio for interviews.' },
    ],
  },

  'salesforce-lightning': {
    curriculum: [
      { module: 'Lightning Framework Basics', topics: ['Lightning Experience Introduction', 'Aura Framework Overview', 'Lightning Component Framework', 'Out-of-the-Box Components', 'Lightning App Builder'] },
      { module: 'Component Development', topics: ['Component Bundle Structure', 'Component / Controller / Helper', 'CSS & SLDS', 'Salesforce Lightning Design System', 'Responsive Page Design'] },
      { module: 'Component Attributes & Events', topics: ['Attribute Types & Configuration', 'Value Providers & Expressions', 'Conditional Markup & Looping', 'Component Events', 'Application Events'] },
      { module: 'Controllers & Data', topics: ['Client-Side Controllers', 'Server-Side Apex Controllers', 'Lightning Data Service', 'Dynamic SOSL & SOQL', 'Lightning Out'] },
      { module: 'Advanced & Integration', topics: ['Lightning Interfaces', 'Tabs & App Launcher', 'Component IDs (Local & Global)', 'Domain Management', 'Namespace Configuration'] },
    ],
    tools: ['Salesforce Lightning Inspector', 'VS Code + SF Extension', 'Lightning App Builder', 'Chrome DevTools', 'Workbench', 'SLDS Validator'],
    careerRoles: ['Salesforce Lightning Developer', 'UI/UX Salesforce Developer', 'Aura Component Developer', 'Salesforce Front-End Engineer'],
    certifications: ['Salesforce JavaScript Developer I', 'Salesforce Platform Developer I (PD1)', 'Salesforce Platform App Builder'],
    faqs: [
      { q: 'Who can take Salesforce Lightning Training?', a: 'Anyone — basic graduation is sufficient. Prior Salesforce admin knowledge is advantageous but not mandatory.' },
      { q: 'What is the difference between Lightning and LWC?', a: 'Lightning uses the older Aura framework. LWC (Lightning Web Components) is the modern standard. Our course teaches both.' },
      { q: 'What salary can a Salesforce Lightning developer expect?', a: 'Lightning-skilled developers earn ₹6–15 LPA in Bangalore, with senior consultants reaching ₹20+ LPA.' },
      { q: 'Is SLDS difficult to learn?', a: 'No. SLDS is a CSS framework with pre-built components. We cover it through practical exercises in every session.' },
      { q: 'How many hours is the Lightning training?', a: '25 hours live training with 9 assignments and 2 projects. Weekend and evening batches are available.' },
    ],
  },

  'salesforce-lwc': {
    curriculum: [
      { module: 'LWC Foundations', topics: ['What is LWC & why vs Aura', 'VS Code Setup & Org Connection', 'Creating Your First LWC', 'File Structure (HTML/JS/CSS/SVG/Meta)', 'Naming Conventions'] },
      { module: 'Modern JavaScript', topics: ['ES6+ Features', 'Arrow Functions & Classes', 'Async/Await & Promises', 'Import/Export Modules', 'Constructor & Super'] },
      { module: 'LWC Core Concepts', topics: ['Decorators (@track, @api, @wire)', 'Lifecycle Hooks (constructor, connectedCallback, etc.)', 'HTML Template Directives', 'Client-Side Event Handling', 'Toast Messages'] },
      { module: 'Server Integration', topics: ['Server-Side Apex Controller', 'SOQL in LWC', 'Wire Adapters', 'Calling Apex Imperatively', 'Debug Logs & Static Resources'] },
      { module: 'Advanced LWC', topics: ['Parent-Child Communication', 'Lightning Message Service', 'Platform Events', 'Data Table & Record Edit Form', 'LWC Open Source & Heroku Deploy'] },
    ],
    tools: ['VS Code + Salesforce Extension Pack', 'SFDX CLI', 'Chrome DevTools', 'Workbench', 'Jest (LWC Testing)', 'GitHub'],
    careerRoles: ['LWC Developer', 'Salesforce Front-End Developer', 'Salesforce Full-Stack Developer', 'UI Component Developer'],
    certifications: ['Salesforce JavaScript Developer I', 'Salesforce Platform Developer I (PD1)', 'Salesforce Platform Developer II (PD2)'],
    faqs: [
      { q: 'What are the prerequisites for LWC training?', a: 'Basic Salesforce Apex and JavaScript knowledge is helpful. The course starts from modern JS fundamentals, so beginners are welcome.' },
      { q: 'Why learn LWC over Aura in 2026?', a: 'LWC is the current Salesforce standard — faster, closer to web standards, and all new Salesforce features are built on LWC.' },
      { q: 'What salary does an LWC developer earn in Bangalore?', a: 'LWC is a premium skill. Developers with LWC expertise earn ₹7–18 LPA, with senior roles reaching ₹25+ LPA.' },
      { q: 'How is LWC different from React or Angular?', a: 'LWC is a Salesforce-specific web component framework built on web standards. Skills transfer well to React and Vue.' },
      { q: 'How many modules are in the LWC course?', a: '28 modules across 25 hours, covering everything from VS Code setup to Heroku deployment of LWC Open Source.' },
    ],
  },

  'salesforce-marketing-cloud': {
    curriculum: [
      { module: 'Data Management', topics: ['Subscriber Lists & Attributes', 'Data Extensions (Sendable & Non-Sendable)', 'Import & Data Management', 'Profile & Subscription Centers', 'Audience Builder'] },
      { module: 'Content & Email', topics: ['Content Builder Overview', 'Static & Dynamic Content Blocks', 'AMPscript for Personalisation', 'Email Templates', 'Creating Emails from Templates'] },
      { module: 'Testing & Sending', topics: ['Content Detective & Validation', 'Preview & Test Send', 'A/B Testing', 'User-Initiated Emails', 'Bounce Mail Management'] },
      { module: 'Automation & Segmentation', topics: ['Automation Studio', 'Journey Builder — Welcome Series', 'Triggered Emails', 'Query Activity & Filter Activity', 'Drag-and-Drop Segmentation'] },
      { module: 'Scripting & APIs', topics: ['AMPscript in Emails, SMS & Cloud Pages', 'Server-Side JavaScript (SSJS)', 'SOAP API & WSDL', 'REST API with Postman', 'Real-Time Use Cases'] },
    ],
    tools: ['Salesforce Marketing Cloud', 'Journey Builder', 'Automation Studio', 'Content Builder', 'SOAP UI', 'Postman', 'AMPscript Editor'],
    careerRoles: ['Marketing Cloud Specialist', 'Email Marketing Developer', 'Salesforce MC Consultant', 'Digital Marketing Analyst', 'CRM Marketing Manager'],
    certifications: ['Salesforce Marketing Cloud Email Specialist', 'Salesforce Marketing Cloud Administrator', 'Salesforce Marketing Cloud Developer'],
    faqs: [
      { q: 'Who should take Salesforce Marketing Cloud training?', a: 'IT professionals, software developers, data analysts, and digital marketers. No scripting experience required — HTML/CSS awareness is a plus.' },
      { q: 'What salary does a Marketing Cloud professional earn in India?', a: 'Average ₹5.6 LPA, ranging from ₹2.7 LPA to ₹16.8 LPA depending on specialisation. Global roles pay $45K–$60K+ USD.' },
      { q: 'Is AMPscript difficult to learn?', a: 'We teach AMPscript from basics with live examples. By the end of the course you will use it confidently in emails, SMS, and cloud pages.' },
      { q: 'Does this course cover Journey Builder?', a: 'Yes — Journey Builder is a core module. We cover Welcome Series, Triggered Emails, and multi-step customer journeys.' },
      { q: 'Are there prerequisites for the Marketing Cloud course?', a: 'No prerequisites. Anyone can enrol and start immediately. The 25-hour curriculum builds from the ground up.' },
    ],
  },

  'salesforce-vlocity': {
    curriculum: [
      { module: 'Vlocity / OmniStudio Foundations', topics: ['Vlocity Introduction & History', 'Understanding JSON Structure', 'Success Community Overview', 'Naming Conventions', 'CMT & Health/Insurance Domains'] },
      { module: 'DataRaptors', topics: ['Mappings & Extract', 'Turbo Extract & Transform', 'Load Operations', 'Formulas & Best Practices', 'Real-World Use Cases'] },
      { module: 'Integration Procedures', topics: ['IP Blocks & Actions', 'Integrating with External Systems', 'Set Values', 'Best Practices', 'Use Cases'] },
      { module: 'OmniScripts & Cards', topics: ['OmniScript Actions & Display', 'Input Elements & Functions', 'Vlocity Cards Overview', 'Building Layouts & Card States', 'Data Source Binding'] },
      { module: 'EPC, CPQ & Order Management', topics: ['Enterprise Product Catalog (EPC)', 'Product Specs & Bundles', 'Vlocity CPQ — Order Capture & Pricing', 'Order Decomposition & Orchestration Plans', 'Document Templates'] },
    ],
    tools: ['Salesforce Vlocity / OmniStudio', 'DataRaptor Builder', 'OmniScript Designer', 'Integration Procedure Builder', 'Vlocity Build Tool', 'VS Code'],
    careerRoles: ['Vlocity / OmniStudio Developer', 'Salesforce Industries Consultant', 'CPQ & Billing Specialist', 'Telecom CRM Developer', 'Insurance Cloud Consultant'],
    certifications: ['Salesforce OmniStudio Developer', 'Salesforce OmniStudio Consultant', 'Salesforce Vlocity Platform Developer'],
    faqs: [
      { q: 'What is Salesforce Vlocity / OmniStudio?', a: 'Vlocity (now OmniStudio) is an industry-specific cloud layer on Salesforce for Telecom, Insurance, Health, and Government sectors.' },
      { q: 'What salary does a Vlocity developer earn?', a: 'Vlocity developers in India earn ₹5–21 LPA. Globally, the average is ~$155,500 USD — a highly niche, premium skill.' },
      { q: 'Who should take Vlocity training?', a: 'Salesforce developers, cloud developers, system admins, and domain professionals in Telecom, Insurance, or Healthcare.' },
      { q: 'Are there prerequisites for Vlocity training?', a: 'No specific prerequisites. Some Salesforce admin or developer exposure makes the learning faster, but not mandatory.' },
      { q: 'How does Vlocity help your career?', a: 'It is one of the most niche Salesforce skills with very few certified professionals in India — making you immediately valuable to large enterprises.' },
    ],
  },

  'salesforce-cpq': {
    curriculum: [
      { module: 'CPQ Foundations & Data Model', topics: ['CPQ Object Data Model', 'Package Settings & Product Fields', 'Updating Layouts', 'Creating Quotes — Account/Contact/Opportunity', 'Quote Line Editor UI'] },
      { module: 'Product Configuration', topics: ['Product Bundles & Families', 'Nested Bundles & Advanced Grouping', 'Features & Product Options', 'Option Constraints', 'Configuration Attributes'] },
      { module: 'Product & Price Rules', topics: ['Selection & Validation Product Rules', 'Dynamic Bundles', 'Price Waterfall', 'Discount Schedules', 'Pricing Methods & Price Book Entries'] },
      { module: 'Advanced Pricing & Contracting', topics: ['Price Rules & Formula Expressions', 'Block & Tier-Based Discounting', 'Contracted & Subscription Pricing', 'Contract Lifecycle', 'Amendments & Renewal Quotes'] },
      { module: 'Templates, Guided Selling & Approvals', topics: ['Quote Templates & Custom Content', 'Conditional Template Content', 'Guided Selling — Quote Process', 'Custom Actions & Composite Variables', 'Advanced Approval Package'] },
    ],
    tools: ['Salesforce CPQ (Steelbrick)', 'Quote Line Editor', 'CPQ Package', 'Salesforce CRM', 'VS Code', 'Workbench'],
    careerRoles: ['Salesforce CPQ Specialist', 'CPQ Developer', 'Revenue Cloud Consultant', 'Salesforce Billing Specialist', 'Quote-to-Cash Analyst'],
    certifications: ['Salesforce Certified CPQ Specialist', 'Salesforce Revenue Cloud Consultant'],
    faqs: [
      { q: 'Who can take Salesforce CPQ Training?', a: 'Designers, executives, admins, and project managers evaluating Salesforce CPQ. Simple graduation is the only requirement.' },
      { q: 'What salary does a CPQ certified professional earn?', a: 'CPQ-certified administrators earn an average of USD 98,000/year globally. In India, salaries range ₹8–22 LPA.' },
      { q: 'What is the difference between Salesforce CPQ and standard quoting?', a: 'Standard Salesforce quotes are basic. CPQ adds advanced pricing rules, discount schedules, bundles, approvals, and contract management.' },
      { q: 'Does the course include certification exam prep?', a: 'Yes — a dedicated module covers the CPQ Specialist exam with practice questions and real-world scenario reviews.' },
      { q: 'Is CPQ only for developers?', a: 'No — CPQ is a no-code / low-code product. Admins and business analysts frequently become CPQ specialists without heavy coding.' },
    ],
  },

  'salesforce-crm-analytics': {
    curriculum: [
      { module: 'Introduction & Access Setup', topics: ['Basic CRM Analytics Terms', 'Initial Platform Setup', 'User Permissions & Access', 'Row-Level Security', 'Sharing Inheritance'] },
      { module: 'Data Layer', topics: ['Data Sync Configuration', 'Dataflow Introduction & Nodes', 'Recipe Introduction & Nodes', 'Connecting Salesforce Objects', 'Data Transformation'] },
      { module: 'Designer Layer', topics: ['Introduction to Datasets', 'Lens & Exploration', 'Building Dashboards', 'Dashboard Widgets & Interactivity', 'Customising with Advanced Editor'] },
      { module: 'Advanced Dashboards', topics: ['Bindings & Binding Types', 'Tableau CRM Advanced Editor', 'Widget Interactivity', 'Advanced SAQL (Analytics Query Language)', 'Dashboard Performance'] },
      { module: 'Einstein Discovery', topics: ['Setting Up Einstein Discovery', 'Exploring Story Insights', 'Deploying a Predictive Model', 'Predicting Outcomes in CRM', 'Real-World Use Cases'] },
    ],
    tools: ['Salesforce CRM Analytics (Tableau CRM)', 'Einstein Analytics Studio', 'SAQL Editor', 'Dataflow Editor', 'Einstein Discovery', 'Salesforce Data Sync'],
    careerRoles: ['CRM Analytics Developer', 'Salesforce Einstein Analytics Consultant', 'Business Intelligence Analyst', 'Data Analyst (Salesforce)', 'Tableau CRM Specialist'],
    certifications: ['Salesforce CRM Analytics and Einstein Discovery Consultant', 'Salesforce Einstein Analytics and Discovery Consultant'],
    faqs: [
      { q: 'Does Salesforce have a data analytics tool?', a: 'Yes — CRM Analytics (formerly Tableau CRM / Einstein Analytics) is Salesforce\'s native analytics platform for reporting, dashboards, and AI insights.' },
      { q: 'What is the salary of a CRM Analyst in India?', a: 'Average ₹4 LPA, ranging from ₹2.6 LPA to ₹15.6 LPA depending on experience and Salesforce platform depth.' },
      { q: 'What are the prerequisites for CRM Analytics certification?', a: 'No strict prerequisites. Basic understanding of technology, sales management, and CRM concepts is helpful.' },
      { q: 'Can I get a job after Salesforce CRM Analytics certification?', a: 'Yes. Certified CRM Analytics specialists are in demand at Salesforce partner companies, MNCs, and product-led firms.' },
      { q: 'What is SAQL?', a: 'SAQL (Salesforce Analytics Query Language) is used to write advanced queries in CRM Analytics dashboards. We cover it in depth in the advanced module.' },
    ],
  },
};

