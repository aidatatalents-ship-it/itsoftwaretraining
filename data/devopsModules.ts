import type { TrainingModule } from './cloudModules';
export type { TrainingModule };

export const devopsModules: TrainingModule[] = [
  {
    moduleSlug: 'docker-kubernetes-training',
    title: 'Docker & Kubernetes Training in Bangalore',
    h1: 'Docker & Kubernetes Training in Bangalore — Containerisation, Orchestration & CKA Certification',
    short: 'Docker & Kubernetes',
    description: 'Master containerisation with Docker and orchestration with Kubernetes — build, deploy and manage production-grade container workloads with Helm, Ingress, RBAC, monitoring and CKA certification preparation.',
    duration: '2 Months', salary: '₹8–28 LPA', demand: 'Very High', students: '400+', badge: 'Trending', modules: 5, rating: '4.9', nextBatch: 'Enquire now',
    curriculum: [
      { module: 'Docker', topics: ['Docker Architecture & Installation', 'Images, Containers & Volumes', 'Dockerfile & Multi-Stage Builds', 'Docker Compose', 'Docker Networking & Registry'] },
      { module: 'Kubernetes Core', topics: ['K8s Architecture (Master/Worker)', 'Pods, ReplicaSets & Deployments', 'Services & Ingress', 'ConfigMaps & Secrets', 'Namespaces & Labels'] },
      { module: 'Kubernetes Advanced', topics: ['StatefulSets & DaemonSets', 'Persistent Volumes & Claims', 'RBAC & Security Contexts', 'Horizontal Pod Autoscaler', 'Network Policies'] },
      { module: 'Helm & Package Management', topics: ['Helm Charts & Repositories', 'Chart Templates & Values', 'Helm Hooks & Rollbacks', 'Kustomize', 'ArgoCD GitOps'] },
      { module: 'Monitoring & CKA Prep', topics: ['Prometheus & Grafana', 'Loki Log Aggregation', 'K8s Troubleshooting', 'CKA Exam Domains', 'Practice Mock Exams'] },
    ],
    tools: ['Docker', 'Kubernetes', 'Helm', 'kubectl', 'Prometheus', 'Grafana', 'ArgoCD', 'Minikube', 'EKS/AKS/GKE'],
    careerRoles: ['Kubernetes Engineer', 'DevOps Engineer', 'Platform Engineer', 'Site Reliability Engineer (SRE)', 'Cloud Infrastructure Engineer'],
    certifications: ['Certified Kubernetes Administrator (CKA)', 'Certified Kubernetes Application Developer (CKAD)', 'Docker Certified Associate'],
    faqs: [
      { q: 'What is the difference between Docker and Kubernetes?', a: 'Docker packages applications into containers. Kubernetes orchestrates multiple containers at scale — managing deployment, scaling, networking and failover.' },
      { q: 'Is CKA difficult to clear?', a: 'CKA is a hands-on exam. With our lab-heavy training and mock exam practice, most students clear it in the first attempt.' },
      { q: 'What salary does a Kubernetes engineer earn?', a: 'Kubernetes engineers in Bangalore earn ₹10–28 LPA. Senior platform engineers and SREs earn ₹25–45 LPA.' },
      { q: 'Do I need Linux knowledge for this course?', a: 'Basic Linux command-line familiarity helps. We cover all necessary Linux skills in the first sessions.' },
      { q: 'Is this course suitable for developers?', a: 'Yes — developers, ops engineers, and architects all benefit. The course covers both the developer (CKAD) and admin (CKA) perspectives.' },
    ],
  },
  {
    moduleSlug: 'jenkins-cicd-training',
    title: 'Jenkins & CI/CD Training in Bangalore',
    h1: 'Jenkins & CI/CD Training in Bangalore — Pipelines, GitHub Actions, GitLab CI & DevOps Automation',
    short: 'Jenkins & CI/CD',
    description: 'Build automated CI/CD pipelines with Jenkins, GitHub Actions and GitLab CI — from source control to production deployment. Covers Jenkinsfile scripting, parallel stages, Docker integration and multi-environment deployments.',
    duration: '6 Weeks', salary: '₹7–22 LPA', demand: 'High', students: '280+', badge: 'Essential Skill', modules: 4, rating: '4.8', nextBatch: 'Enquire now',
    curriculum: [
      { module: 'CI/CD Fundamentals', topics: ['DevOps & CI/CD Overview', 'Git Branching Strategies', 'Jenkins Installation & Architecture', 'Jenkins Plugins', 'Build Jobs & Workspaces'] },
      { module: 'Jenkins Pipelines', topics: ['Declarative vs Scripted Pipelines', 'Jenkinsfile Syntax', 'Parallel & Matrix Builds', 'Pipeline Variables & Parameters', 'Shared Libraries'] },
      { module: 'Integration & Automation', topics: ['Docker Build & Push in Pipeline', 'Kubernetes Deployment via Jenkins', 'SonarQube Code Quality', 'Nexus Artifact Repository', 'Slack & Email Notifications'] },
      { module: 'GitHub Actions & GitLab CI', topics: ['GitHub Actions Workflows', 'GitHub Marketplace Actions', 'GitLab CI YAML Syntax', 'GitLab Runners', 'End-to-End Pipeline Project'] },
    ],
    tools: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Docker', 'SonarQube', 'Nexus', 'Kubernetes', 'Ansible', 'Terraform'],
    careerRoles: ['CI/CD Engineer', 'DevOps Engineer', 'Build & Release Engineer', 'Platform Engineer', 'Automation Engineer'],
    certifications: ['AWS DevOps Engineer Professional', 'Azure DevOps Engineer Expert (AZ-400)', 'GitLab Certified Associate'],
    faqs: [
      { q: 'What is CI/CD?', a: 'CI (Continuous Integration) automates code testing and building. CD (Continuous Delivery/Deployment) automates releasing to staging and production.' },
      { q: 'Is Jenkins still relevant?', a: 'Yes — Jenkins is the most widely used CI/CD tool. We also cover GitHub Actions and GitLab CI which are increasingly popular.' },
      { q: 'What salary does a CI/CD engineer earn?', a: 'CI/CD and DevOps engineers earn ₹8–22 LPA in Bangalore. Senior DevOps engineers earn ₹22–40 LPA.' },
      { q: 'Do I need programming skills?', a: 'Basic shell scripting and Git knowledge are needed. The course covers Groovy for Jenkinsfile scripting from the ground up.' },
      { q: 'Can freshers join this training?', a: 'We recommend at least basic Linux and programming knowledge. Freshers with these skills do very well in this course.' },
    ],
  },
  {
    moduleSlug: 'terraform-ansible-training',
    title: 'Terraform & Ansible Training in Bangalore',
    h1: 'Terraform & Ansible Training in Bangalore — Infrastructure as Code, Configuration Management & DevOps Automation',
    short: 'Terraform & Ansible',
    description: 'Master Infrastructure as Code with Terraform and configuration management with Ansible — provision cloud resources on AWS/Azure, automate server configuration, and build fully automated infrastructure pipelines.',
    duration: '6 Weeks', salary: '₹8–25 LPA', demand: 'High', students: '220+', badge: 'IaC Specialist', modules: 4, rating: '4.8', nextBatch: 'Enquire now',
    curriculum: [
      { module: 'Terraform', topics: ['Terraform Architecture & HCL', 'Providers, Resources & Data Sources', 'State Management & Backends', 'Modules & Workspaces', 'Terraform Cloud & Sentinel'] },
      { module: 'Ansible', topics: ['Ansible Architecture & Inventory', 'Playbooks, Roles & Variables', 'Handlers & Conditionals', 'Ansible Vault', 'Dynamic Inventory'] },
      { module: 'IaC on AWS & Azure', topics: ['Terraform AWS VPC & EC2', 'Terraform Azure Resources', 'Ansible AWS Integration', 'Packer for AMI Creation', 'GitOps with Terraform'] },
      { module: 'Advanced Automation', topics: ['Terraform + Jenkins Pipeline', 'Ansible Tower / AWX', 'Drift Detection & Remediation', 'Cost Optimisation with Infracost', 'Capstone Project'] },
    ],
    tools: ['Terraform', 'Ansible', 'AWS', 'Azure', 'Jenkins', 'Git', 'Packer', 'Ansible Tower/AWX', 'Vault by HashiCorp'],
    careerRoles: ['DevOps Engineer', 'Infrastructure Engineer', 'Cloud Automation Engineer', 'Platform Engineer', 'SRE'],
    certifications: ['HashiCorp Certified: Terraform Associate', 'Red Hat Certified Specialist in Ansible Automation', 'AWS DevOps Engineer Professional'],
    faqs: [
      { q: 'What is Terraform used for?', a: 'Terraform provisions cloud infrastructure (VMs, networks, databases) using code — enabling repeatable, version-controlled infrastructure.' },
      { q: 'What is the difference between Terraform and Ansible?', a: 'Terraform provisions infrastructure (IaC). Ansible configures and manages that infrastructure (configuration management). They work best together.' },
      { q: 'Is Terraform certification valuable?', a: 'Yes — HashiCorp Certified Terraform Associate is widely recognised. Most DevOps roles now require IaC skills.' },
      { q: 'What salary does a Terraform engineer earn?', a: 'Terraform/IaC specialists earn ₹10–25 LPA. Cloud automation architects earn ₹25–45 LPA.' },
      { q: 'Can I take this as a standalone course?', a: 'Yes — though basic Linux, cloud (AWS/Azure), and scripting knowledge will help you progress faster.' },
    ],
  },
];

export function findDevopsModule(slug: string) {
  return devopsModules.find(m => m.moduleSlug === slug);
}
