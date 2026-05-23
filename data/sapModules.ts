import type { TrainingModule } from './cloudModules';
export type { TrainingModule };

export const sapModules: TrainingModule[] = [
  {
    moduleSlug: 'fico-training',
    title: 'SAP FICO Training in Bangalore',
    h1: 'SAP FICO Training in Bangalore — Financial Accounting, Controlling & S/4HANA Finance',
    short: 'SAP FICO',
    description: 'Master SAP FICO — General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Cost Centre Accounting and Profit Centre Accounting with real S/4HANA implementation experience.',
    duration: '3–4 Months', salary: '₹6–22 LPA', demand: 'Very High', students: '700+', badge: 'Most Placed', modules: 5, rating: '4.9', nextBatch: 'Enquire now',
    curriculum: [
      { module: 'SAP FI — Core', topics: ['Company Code & Chart of Accounts', 'General Ledger Accounting', 'Accounts Payable (AP)', 'Accounts Receivable (AR)', 'Asset Accounting (AA)'] },
      { module: 'SAP FI — Advanced', topics: ['Bank Accounting & Reconciliation', 'Tax Configuration (GST/TDS)', 'Financial Statements', 'Period End Closing', 'New GL Configuration'] },
      { module: 'SAP CO — Core', topics: ['Cost Element & Cost Centre Accounting', 'Internal Orders', 'Profit Centre Accounting', 'Product Costing', 'Profitability Analysis (CO-PA)'] },
      { module: 'S/4HANA Finance', topics: ['S/4HANA Architecture', 'Universal Journal (ACDOCA)', 'Fiori Apps for Finance', 'Migration from ECC to S/4HANA', 'Central Finance'] },
      { module: 'Integration & Certification Prep', topics: ['FI-MM Integration', 'FI-SD Integration', 'End-to-End Business Process', 'SAP Certification Exam Prep', 'Interview Q&A'] },
    ],
    tools: ['SAP S/4HANA', 'SAP ECC', 'SAP Fiori', 'SAP GUI', 'SAP Solution Manager'],
    careerRoles: ['SAP FICO Consultant', 'SAP Finance Analyst', 'S/4HANA Finance Consultant', 'SAP Project Manager', 'ERP Finance Specialist'],
    certifications: ['SAP Certified Application Associate – SAP S/4HANA for Financial Accounting', 'SAP Certified Associate – SAP Activate Project Manager'],
    faqs: [
      { q: 'Is SAP FICO a good career choice?', a: 'Yes — SAP FICO is one of the highest-paying SAP modules with consistent demand at Big 4 consulting firms, MNCs and product companies.' },
      { q: 'What is the salary of a SAP FICO consultant in Bangalore?', a: 'Freshers start at ₹5–7 LPA. With 2–3 years experience, SAP FICO consultants earn ₹12–22 LPA. Senior consultants earn ₹25–40 LPA.' },
      { q: 'Do I need accounting knowledge for SAP FICO?', a: 'Basic accounting knowledge is helpful. We cover all finance concepts from scratch within the curriculum.' },
      { q: 'Does the course cover S/4HANA?', a: 'Yes — our curriculum is fully updated for S/4HANA, including Universal Journal, Fiori apps and migration scenarios.' },
      { q: 'How long is the SAP FICO training?', a: '3–4 months with 5 comprehensive modules, real configuration exercises and end-to-end business process walkthroughs.' },
    ],
  },
  {
    moduleSlug: 'mm-training',
    title: 'SAP MM Training in Bangalore',
    h1: 'SAP MM Training in Bangalore — Materials Management, Procurement & Inventory',
    short: 'SAP MM',
    description: 'Learn SAP MM (Materials Management) — procurement processes, purchase orders, goods receipt, inventory management, invoice verification and integration with SAP FI and SD modules.',
    duration: '3 Months', salary: '₹5–18 LPA', demand: 'High', students: '400+', badge: 'In Demand', modules: 4, rating: '4.8', nextBatch: 'Enquire now',
    curriculum: [
      { module: 'Procurement Basics', topics: ['Organisational Structure', 'Master Data (Material, Vendor)', 'Purchase Requisition & RFQ', 'Purchase Orders', 'Outline Agreements'] },
      { module: 'Inventory Management', topics: ['Goods Receipt & Issue', 'Transfer Posting', 'Physical Inventory', 'Stock Types', 'Movement Types'] },
      { module: 'Invoice Verification & Valuation', topics: ['Logistics Invoice Verification', 'Material Valuation Methods', 'Price Control (Moving Average / Standard)', 'GR/IR Clearing', 'Release Strategies'] },
      { module: 'Integration & S/4HANA', topics: ['MM-FI Integration', 'MM-SD Integration', 'MM-PP Integration', 'S/4HANA Procurement', 'Fiori Procurement Apps'] },
    ],
    tools: ['SAP S/4HANA', 'SAP ECC', 'SAP Fiori', 'SAP GUI', 'SAP Ariba'],
    careerRoles: ['SAP MM Consultant', 'SAP Procurement Analyst', 'Supply Chain Consultant', 'ERP MM Specialist', 'SAP Logistics Consultant'],
    certifications: ['SAP Certified Application Associate – SAP S/4HANA Sourcing and Procurement'],
    faqs: [
      { q: 'What is SAP MM used for?', a: 'SAP MM handles procurement and inventory management — from purchase orders and vendor management to goods receipt and invoice verification.' },
      { q: 'What salary does an SAP MM consultant earn?', a: 'Freshers earn ₹4–6 LPA. Experienced SAP MM consultants earn ₹10–18 LPA in Bangalore.' },
      { q: 'Can I learn SAP MM without prior SAP knowledge?', a: 'Yes — no prior SAP experience needed. We start from SAP basics and build up to advanced configuration.' },
      { q: 'Is SAP MM covered in S/4HANA?', a: 'Yes — our training covers both ECC and S/4HANA procurement processes including Fiori apps.' },
      { q: 'How does SAP MM integrate with other modules?', a: 'MM integrates tightly with FI (invoice verification), SD (returns), and PP (production planning). All integrations are covered in the training.' },
    ],
  },
  {
    moduleSlug: 'sd-training',
    title: 'SAP SD Training in Bangalore',
    h1: 'SAP SD Training in Bangalore — Sales & Distribution, Order to Cash & S/4HANA',
    short: 'SAP SD',
    description: 'Master SAP SD (Sales & Distribution) — sales order management, pricing, shipping, billing, credit management and the complete order-to-cash business process with S/4HANA configuration.',
    duration: '3 Months', salary: '₹5–18 LPA', demand: 'High', students: '350+', badge: 'High Value', modules: 4, rating: '4.8', nextBatch: 'Enquire now',
    curriculum: [
      { module: 'SD Master Data & Org Structure', topics: ['Sales Organisation & Channels', 'Customer & Material Master', 'Customer-Material Info Records', 'Condition Records', 'Partner Functions'] },
      { module: 'Sales Order Processing', topics: ['Inquiry, Quotation & Sales Order', 'Availability Check & TOR', 'Schedule Lines & Delivery', 'Returns & Credit/Debit Memos', 'Consignment Processing'] },
      { module: 'Pricing & Billing', topics: ['Pricing Procedure Configuration', 'Condition Types & Access Sequences', 'Billing Documents', 'Revenue Account Determination', 'Inter-Company Billing'] },
      { module: 'Shipping, Credit & Integration', topics: ['Delivery & Picking', 'Transportation Planning', 'Credit Management', 'SD-FI & SD-MM Integration', 'S/4HANA SD & Fiori'] },
    ],
    tools: ['SAP S/4HANA', 'SAP ECC', 'SAP Fiori', 'SAP GUI', 'SAP CRM'],
    careerRoles: ['SAP SD Consultant', 'SAP OTC Analyst', 'Sales Process Consultant', 'ERP Implementation Consultant', 'SAP Billing Specialist'],
    certifications: ['SAP Certified Application Associate – SAP S/4HANA Sales'],
    faqs: [
      { q: 'What is SAP SD?', a: 'SAP SD (Sales & Distribution) handles the complete order-to-cash process — from sales orders and pricing to delivery, billing and payment.' },
      { q: 'What salary can I expect after SAP SD training?', a: 'Freshers earn ₹4–6 LPA. Experienced SAP SD consultants earn ₹10–18 LPA. Senior consultants reach ₹25+ LPA.' },
      { q: 'Is SAP SD good for non-technical backgrounds?', a: 'Yes — SAP SD is a functional module that suits people with sales, commerce or MBA backgrounds. No coding required.' },
      { q: 'How is SAP SD different from SAP CRM?', a: 'SAP SD handles order-to-cash within the ERP. SAP CRM is the customer relationship layer. SD integrates with CRM for pricing and customer data.' },
      { q: 'Does the training cover S/4HANA?', a: 'Yes — including Fiori apps for sales, the simplified data model in S/4HANA, and migration paths from ECC.' },
    ],
  },
  {
    moduleSlug: 'abap-training',
    title: 'SAP ABAP Training in Bangalore',
    h1: 'SAP ABAP Training in Bangalore — Programming, Reports, BAPIs, RFCs & S/4HANA ABAP',
    short: 'SAP ABAP',
    description: 'Learn SAP ABAP programming — reports, function modules, BAPIs, RFCs, ALV grids, enhancements, user exits, BADIs and S/4HANA ABAP with CDS Views and OData services.',
    duration: '3 Months', salary: '₹6–20 LPA', demand: 'High', students: '300+', badge: 'Technical', modules: 5, rating: '4.8', nextBatch: 'Enquire now',
    curriculum: [
      { module: 'ABAP Basics', topics: ['ABAP Editor & Workbench', 'Data Types & Variables', 'Control Statements & Loops', 'Internal Tables', 'Modularisation'] },
      { module: 'Reports & Dialogs', topics: ['Classical & Interactive Reports', 'ALV Grid & Tree', 'Screen Programming', 'Module Pool', 'Selection Screens'] },
      { module: 'Data Dictionary & Database', topics: ['Tables, Views & Structures', 'Search Helps & Lock Objects', 'Open SQL & Native SQL', 'Database Joins', 'Performance Tuning'] },
      { module: 'Interfaces & Enhancements', topics: ['Function Modules & RFCs', 'BAPIs & BDC', 'IDocs & ALE', 'User Exits & BADIs', 'Customer Enhancements'] },
      { module: 'S/4HANA ABAP', topics: ['CDS Views & Annotations', 'AMDP (ABAP Managed DB Procedures)', 'OData Services & Fiori', 'RAP (Restful ABAP Programming)', 'Code Pushdown'] },
    ],
    tools: ['SAP ABAP Workbench', 'Eclipse ADT', 'SAP GUI', 'SAP S/4HANA', 'Postman (OData testing)'],
    careerRoles: ['SAP ABAP Developer', 'SAP Technical Consultant', 'S/4HANA Developer', 'SAP Integration Developer', 'SAP Fiori Developer'],
    certifications: ['SAP Certified Development Associate – ABAP with SAP NetWeaver', 'SAP Certified Development Associate – SAP S/4HANA Cloud'],
    faqs: [
      { q: 'Is ABAP still relevant in 2025?', a: 'Yes — S/4HANA ABAP with CDS Views, OData and RAP is in very high demand. All SAP implementations require ABAP developers for customisation.' },
      { q: 'Do I need programming experience for ABAP?', a: 'Basic programming awareness helps but is not mandatory. We start from ABAP fundamentals and cover everything step by step.' },
      { q: 'What is the salary of an SAP ABAP developer?', a: 'Entry-level: ₹5–7 LPA. With 2–3 years: ₹12–20 LPA. S/4HANA ABAP specialists earn ₹20–35 LPA.' },
      { q: 'Does the course cover S/4HANA ABAP?', a: 'Yes — CDS Views, OData services, AMDP and the new RAP (Restful ABAP Programming Model) are all covered.' },
      { q: 'What tools will I use in training?', a: 'SAP ABAP Workbench, Eclipse ADT (ABAP Development Tools) for S/4HANA, and Postman for OData API testing.' },
    ],
  },
];

export function findSapModule(slug: string) {
  return sapModules.find(m => m.moduleSlug === slug);
}
