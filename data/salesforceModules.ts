// Salesforce sub-module pages → /salesforce/[module]
// Each maps to existing serviceDetails key + services entry

export interface SFModule {
  moduleSlug: string;        // URL segment: admin-training
  detailKey: string;         // key in serviceDetails.ts
  serviceSlug: string;       // key in services.ts (for image/meta)
  title: string;
  h1: string;
  short: string;
  description: string;
  duration: string;
  salary: string;
  demand: string;
  students: string;
  badge: string;
  certifications: string[];
  nextBatch: string;
  modules: number;
  rating: string;
}

export const salesforceModules: SFModule[] = [
  {
    moduleSlug: 'admin-training',
    detailKey: 'salesforce-admin',
    serviceSlug: 'salesforce',
    title: 'Salesforce Admin Training in Bangalore',
    h1: 'Salesforce Administrator Training in Bangalore — ADM-201 Certification, Flow Builder & CRM Configuration',
    short: 'Salesforce Admin',
    description: 'Master Salesforce Administration from scratch — user management, object configuration, automation with Flow Builder, reports & dashboards, and full ADM-201 certification preparation. Taught by certified Salesforce admins with 10+ years of live client experience.',
    duration: '2–3 Months',
    salary: '₹4–18 LPA',
    demand: 'Very High',
    students: '600+',
    badge: 'Most Popular',
    certifications: ['Salesforce Certified Administrator (ADM-201)', 'Salesforce Advanced Administrator'],
    nextBatch: 'Enquire now',
    modules: 5,
    rating: '4.9',
  },
  {
    moduleSlug: 'lightning-training',
    detailKey: 'salesforce-lightning',
    serviceSlug: 'salesforce',
    title: 'Salesforce Lightning Training in Bangalore',
    h1: 'Salesforce Lightning (Aura) Training in Bangalore — Component Development, SLDS & Lightning App Builder',
    short: 'Salesforce Lightning',
    description: 'Build modern Salesforce UIs with the Lightning Aura Framework. Learn component architecture, SLDS design system, events, controllers, and Lightning App Builder — all with hands-on real-org labs and JS Developer I certification prep.',
    duration: '2 Months',
    salary: '₹6–20 LPA',
    demand: 'High',
    students: '350+',
    badge: 'In Demand',
    certifications: ['Salesforce JavaScript Developer I', 'Salesforce Platform Developer I (PD1)', 'Salesforce Platform App Builder'],
    nextBatch: 'Enquire now',
    modules: 5,
    rating: '4.8',
  },
  {
    moduleSlug: 'lwc-training',
    detailKey: 'salesforce-lwc',
    serviceSlug: 'salesforce',
    title: 'Salesforce LWC Training in Bangalore',
    h1: 'Salesforce LWC Training in Bangalore — Lightning Web Components, ES6+, Wire Adapters & Apex Integration',
    short: 'Salesforce LWC',
    description: 'Learn Lightning Web Components (LWC) — the modern Salesforce UI standard. Covers ES6+ JavaScript, decorators (@api, @track, @wire), lifecycle hooks, parent-child communication, Apex integration, and LWC Open Source deployment.',
    duration: '2 Months',
    salary: '₹7–25 LPA',
    demand: 'Very High',
    students: '400+',
    badge: 'Trending',
    certifications: ['Salesforce JavaScript Developer I', 'Salesforce Platform Developer I (PD1)', 'Salesforce Platform Developer II (PD2)'],
    nextBatch: 'Enquire now',
    modules: 5,
    rating: '4.9',
  },
  {
    moduleSlug: 'marketing-cloud-training',
    detailKey: 'salesforce-marketing-cloud',
    serviceSlug: 'salesforce',
    title: 'Salesforce Marketing Cloud Training in Bangalore',
    h1: 'Salesforce Marketing Cloud Training in Bangalore — Journey Builder, AMPscript, Automation Studio & Email Specialist Certification',
    short: 'Marketing Cloud',
    description: 'Master Salesforce Marketing Cloud — data management, Content Builder, AMPscript personalisation, Journey Builder campaigns, Automation Studio, REST/SOAP API integration and full Marketing Cloud Email Specialist certification preparation.',
    duration: '2–3 Months',
    salary: '₹5–17 LPA',
    demand: 'High',
    students: '280+',
    badge: 'Niche Skill',
    certifications: ['Salesforce Marketing Cloud Email Specialist', 'Salesforce Marketing Cloud Administrator', 'Salesforce Marketing Cloud Developer'],
    nextBatch: 'Enquire now',
    modules: 5,
    rating: '4.8',
  },
  {
    moduleSlug: 'vlocity-training',
    detailKey: 'salesforce-vlocity',
    serviceSlug: 'salesforce',
    title: 'Salesforce Vlocity Training in Bangalore',
    h1: 'Salesforce Vlocity / OmniStudio Training in Bangalore — DataRaptors, OmniScripts, Integration Procedures & OmniStudio Developer Certification',
    short: 'Vlocity / OmniStudio',
    description: 'Specialise in Salesforce Vlocity (now OmniStudio) — the industry cloud for Telecom, Insurance, Health and Government sectors. Covers DataRaptors, Integration Procedures, OmniScripts, EPC, CPQ and OmniStudio Developer certification.',
    duration: '2–3 Months',
    salary: '₹8–21 LPA',
    demand: 'High',
    students: '180+',
    badge: 'Premium Niche',
    certifications: ['Salesforce OmniStudio Developer', 'Salesforce OmniStudio Consultant', 'Salesforce Vlocity Platform Developer'],
    nextBatch: 'Enquire now',
    modules: 5,
    rating: '4.9',
  },
  {
    moduleSlug: 'cpq-training',
    detailKey: 'salesforce-cpq',
    serviceSlug: 'salesforce',
    title: 'Salesforce CPQ Training in Bangalore',
    h1: 'Salesforce CPQ Training in Bangalore — Configure Price Quote, Pricing Rules, Bundles & CPQ Specialist Certification',
    short: 'Salesforce CPQ',
    description: 'Master Salesforce CPQ (Configure, Price, Quote) — product bundles, pricing rules, discount schedules, guided selling, approval workflows, contract management and full CPQ Specialist certification preparation. In-demand Revenue Cloud skill.',
    duration: '2 Months',
    salary: '₹8–22 LPA',
    demand: 'High',
    students: '220+',
    badge: 'High Value',
    certifications: ['Salesforce Certified CPQ Specialist', 'Salesforce Revenue Cloud Consultant'],
    nextBatch: 'Enquire now',
    modules: 5,
    rating: '4.8',
  },
  {
    moduleSlug: 'crm-analytics-training',
    detailKey: 'salesforce-crm-analytics',
    serviceSlug: 'salesforce',
    title: 'Salesforce CRM Analytics Training in Bangalore',
    h1: 'Salesforce CRM Analytics Training in Bangalore — Einstein Analytics, SAQL, Dashboards & Einstein Discovery',
    short: 'CRM Analytics',
    description: 'Learn Salesforce CRM Analytics (formerly Tableau CRM / Einstein Analytics) — dataset setup, dataflow design, SAQL query language, interactive dashboard building, Einstein Discovery AI predictions and CRM Analytics Consultant certification.',
    duration: '2 Months',
    salary: '₹6–16 LPA',
    demand: 'Growing',
    students: '160+',
    badge: 'AI-Powered',
    certifications: ['Salesforce CRM Analytics and Einstein Discovery Consultant'],
    nextBatch: 'Enquire now',
    modules: 5,
    rating: '4.8',
  },
];

export function findSFModule(moduleSlug: string): SFModule | undefined {
  return salesforceModules.find(m => m.moduleSlug === moduleSlug);
}
