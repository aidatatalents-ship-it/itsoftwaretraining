export interface TrainingModule {
  moduleSlug: string;
  title: string;
  h1: string;
  short: string;
  description: string;
  duration: string;
  salary: string;
  demand: string;
  students: string;
  badge: string;
  modules: number;
  rating: string;
  nextBatch: string;
  curriculum: { module: string; topics: string[] }[];
  tools: string[];
  careerRoles: string[];
  certifications: string[];
  faqs: { q: string; a: string }[];
}

export const cloudModules: TrainingModule[] = [
  {
    moduleSlug: 'aws-training',
    title: 'AWS Training in Bangalore',
    h1: 'AWS Training in Bangalore — Solutions Architect, Cloud Practitioner & SAA-C03 Certification',
    short: 'AWS',
    description: 'Master Amazon Web Services — EC2, S3, RDS, Lambda, VPC, IAM, CloudFormation and full SAA-C03 certification preparation. Hands-on labs on real AWS accounts taught by certified AWS architects.',
    duration: '2–3 Months',
    salary: '₹8–35 LPA',
    demand: 'Very High',
    students: '500+',
    badge: 'Most Popular',
    modules: 6,
    rating: '4.9',
    nextBatch: 'Enquire now',
    curriculum: [
      { module: 'AWS Fundamentals', topics: ['Cloud Computing Basics', 'AWS Global Infrastructure', 'IAM Users, Roles & Policies', 'AWS CLI & SDK', 'Billing & Cost Management'] },
      { module: 'Compute & Storage', topics: ['EC2 Instance Types & AMIs', 'Auto Scaling & Load Balancers', 'S3 Buckets & Lifecycle', 'EBS & EFS Storage', 'Glacier & Storage Classes'] },
      { module: 'Networking & Security', topics: ['VPC Design & Subnets', 'Security Groups & NACLs', 'Route 53 DNS', 'CloudFront CDN', 'WAF & Shield'] },
      { module: 'Databases', topics: ['RDS (MySQL, PostgreSQL)', 'DynamoDB NoSQL', 'ElastiCache Redis', 'Aurora Serverless', 'Database Migration Service'] },
      { module: 'Serverless & Containers', topics: ['Lambda Functions', 'API Gateway', 'ECS & EKS', 'Fargate', 'Step Functions'] },
      { module: 'DevOps & Certification Prep', topics: ['CodePipeline & CodeDeploy', 'CloudFormation IaC', 'CloudWatch Monitoring', 'SAA-C03 Mock Tests', 'Real-World Projects'] },
    ],
    tools: ['AWS Console', 'AWS CLI', 'CloudFormation', 'Terraform', 'Jenkins', 'Docker', 'Kubernetes', 'Postman'],
    careerRoles: ['AWS Solutions Architect', 'Cloud Engineer', 'DevOps Engineer (AWS)', 'AWS SysOps Administrator', 'Cloud Consultant'],
    certifications: ['AWS Certified Solutions Architect – Associate (SAA-C03)', 'AWS Certified Cloud Practitioner', 'AWS Certified SysOps Administrator'],
    faqs: [
      { q: 'Do I need prior experience for AWS training?', a: 'No. We start from cloud computing basics. Any graduate can join and progress to architect-level certification.' },
      { q: 'Will I get hands-on lab access?', a: 'Yes — every student gets access to real AWS accounts for labs. No simulators.' },
      { q: 'What is the salary of an AWS architect in Bangalore?', a: 'AWS Solutions Architects earn ₹10–35 LPA in Bangalore. Senior architects at top MNCs earn ₹40–60 LPA.' },
      { q: 'How long to prepare for SAA-C03?', a: 'With our structured 2–3 month programme, most students clear SAA-C03 in the first attempt.' },
      { q: 'Is placement support provided?', a: 'Yes — resume, LinkedIn, mock interviews and direct referrals to 200+ AWS hiring partners.' },
    ],
  },
  {
    moduleSlug: 'azure-training',
    title: 'Microsoft Azure Training in Bangalore',
    h1: 'Microsoft Azure Training in Bangalore — AZ-104 Administrator, AZ-900 & Azure DevOps Certification',
    short: 'Microsoft Azure',
    description: 'Become a certified Microsoft Azure Administrator — Azure VMs, Active Directory, Networking, Storage, AKS, Azure DevOps and full AZ-104 certification preparation with real lab environments.',
    duration: '2–3 Months',
    salary: '₹8–30 LPA',
    demand: 'Very High',
    students: '400+',
    badge: 'High Demand',
    modules: 5,
    rating: '4.8',
    nextBatch: 'Enquire now',
    curriculum: [
      { module: 'Azure Fundamentals', topics: ['Azure Portal & CLI', 'Azure Active Directory', 'Subscriptions & Resource Groups', 'ARM Templates', 'AZ-900 Prep'] },
      { module: 'Compute & Storage', topics: ['Virtual Machines & VM Scale Sets', 'Azure App Service', 'Azure Functions', 'Blob, File & Disk Storage', 'Azure CDN'] },
      { module: 'Networking', topics: ['Virtual Networks & Subnets', 'NSGs & Azure Firewall', 'VPN Gateway & ExpressRoute', 'Load Balancer & Traffic Manager', 'Azure DNS'] },
      { module: 'Identity & Security', topics: ['Azure AD B2C', 'Role-Based Access Control (RBAC)', 'Key Vault & Certificates', 'Microsoft Defender', 'Azure Policy & Blueprints'] },
      { module: 'DevOps & Certification', topics: ['Azure DevOps Pipelines', 'AKS (Kubernetes on Azure)', 'Azure Monitor & Alerts', 'AZ-104 Mock Exams', 'Capstone Project'] },
    ],
    tools: ['Azure Portal', 'Azure CLI', 'PowerShell', 'Terraform', 'Azure DevOps', 'Docker', 'Kubernetes', 'VS Code'],
    careerRoles: ['Azure Administrator', 'Cloud Solutions Architect', 'Azure DevOps Engineer', 'Cloud Security Engineer', 'Azure Data Engineer'],
    certifications: ['Microsoft Azure Administrator (AZ-104)', 'Azure Fundamentals (AZ-900)', 'Azure DevOps Engineer Expert (AZ-400)'],
    faqs: [
      { q: 'What is the difference between AWS and Azure training?', a: 'AWS leads in market share globally; Azure is dominant in enterprise/Microsoft-stack companies. Many Bangalore MNCs use both — we offer combined cloud training too.' },
      { q: 'Is AZ-104 difficult?', a: 'With our structured prep including mock exams and real lab practice, most students clear AZ-104 in their first attempt.' },
      { q: 'What salary can I expect after Azure certification?', a: 'Azure administrators earn ₹8–22 LPA. Azure architects and DevOps engineers earn ₹15–35 LPA in Bangalore.' },
      { q: 'Can I take Azure and AWS both?', a: 'Yes — we offer a combined cloud programme covering both platforms, ideal for cloud architects targeting multi-cloud roles.' },
      { q: 'Are real lab environments provided?', a: 'Yes — students get Azure free-tier accounts with guided labs for every module. No simulators.' },
    ],
  },
];

export function findCloudModule(slug: string) {
  return cloudModules.find(m => m.moduleSlug === slug);
}
