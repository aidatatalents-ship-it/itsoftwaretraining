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
      { q: 'Is cybersecurity a good career in Bangalore 2025?', a: 'One of the best. India faces 3,000+ cyberattacks daily and there is a massive talent shortage. Salaries are premium.' },
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
      { q: 'How is the job market for Python/Data Science in Bangalore 2025?', a: 'Phenomenal. Every product company and MNC in Bangalore is hiring data scientists. It is the #1 in-demand skill globally.' },
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
};
