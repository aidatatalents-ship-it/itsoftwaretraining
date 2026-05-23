import type { TrainingModule } from './cloudModules';
export type { TrainingModule };

export const cyberModules: TrainingModule[] = [
  {
    moduleSlug: 'ceh-training',
    title: 'CEH Training in Bangalore',
    h1: 'CEH Training in Bangalore — Certified Ethical Hacker v12, Penetration Testing & Kali Linux',
    short: 'CEH',
    description: 'Become a Certified Ethical Hacker (CEH v12) — learn penetration testing, vulnerability assessment, exploitation techniques using Kali Linux, Metasploit, Burp Suite and network attack/defence with EC-Council certification preparation.',
    duration: '2–3 Months', salary: '₹6–22 LPA', demand: 'Very High', students: '450+', badge: 'Most Popular', modules: 6, rating: '4.9', nextBatch: 'Enquire now',
    curriculum: [
      { module: 'Ethical Hacking Foundations', topics: ['Ethical Hacking Phases', 'Legal Frameworks & Scope', 'Kali Linux Setup', 'Information Gathering (OSINT)', 'Google Dorking & Shodan'] },
      { module: 'Scanning & Enumeration', topics: ['Nmap Port Scanning', 'Vulnerability Scanning (Nessus)', 'Banner Grabbing', 'Service Enumeration', 'SMB & SNMP Enumeration'] },
      { module: 'Exploitation & Post-Exploitation', topics: ['Metasploit Framework', 'Exploit Development Basics', 'Privilege Escalation', 'Persistence Mechanisms', 'Pivoting & Lateral Movement'] },
      { module: 'Web Application Hacking', topics: ['OWASP Top 10', 'SQL Injection & XSS', 'Burp Suite', 'CSRF & SSRF', 'API Security Testing'] },
      { module: 'Network & Wireless Hacking', topics: ['Man-in-the-Middle Attacks', 'ARP Spoofing & Sniffing', 'WPA2 Cracking', 'Evil Twin Attacks', 'VPN & Firewall Evasion'] },
      { module: 'CEH Certification Prep', topics: ['CEH v12 Exam Domains', 'EC-Council Exam Format', '300+ Practice Questions', 'Mock Exams', 'Interview Q&A'] },
    ],
    tools: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Nessus', 'Wireshark', 'John the Ripper', 'Hydra', 'OWASP ZAP'],
    careerRoles: ['Ethical Hacker', 'Penetration Tester', 'Security Analyst', 'Vulnerability Assessment Engineer', 'Red Team Specialist'],
    certifications: ['EC-Council Certified Ethical Hacker (CEH v12)', 'CompTIA Security+', 'Offensive Security Certified Professional (OSCP)'],
    faqs: [
      { q: 'Is CEH worth it in 2026?', a: 'Yes — CEH is the most recognised entry-level ethical hacking certification. It is required for many government, banking, and IT security roles in India.' },
      { q: 'What salary does a CEH certified professional earn?', a: 'Freshers earn ₹5–8 LPA. CEH-certified professionals with 2–3 years earn ₹12–22 LPA. Senior pentesters earn ₹25–40 LPA.' },
      { q: 'Is CEH difficult?', a: 'CEH v12 is a 125-question MCQ exam. With our structured prep and 300+ practice questions, most students clear it in the first attempt.' },
      { q: 'Do I need programming knowledge for CEH?', a: 'No programming required. Basic networking and Linux knowledge is helpful — both are covered in our course.' },
      { q: 'Are real hacking labs included?', a: 'Yes — we use real vulnerable machines (VulnHub, HackTheBox) and iLabs environments for hands-on practice. No simulations.' },
    ],
  },
  {
    moduleSlug: 'vapt-training',
    title: 'VAPT Training in Bangalore',
    h1: 'VAPT Training in Bangalore — Vulnerability Assessment, Penetration Testing & Web Application Security',
    short: 'VAPT',
    description: 'Learn Vulnerability Assessment and Penetration Testing (VAPT) — network pentesting, web application security, API testing, report writing and real-world engagement methodology used by professional security consultants.',
    duration: '2 Months', salary: '₹7–25 LPA', demand: 'High', students: '280+', badge: 'Consulting Skill', modules: 4, rating: '4.8', nextBatch: 'Enquire now',
    curriculum: [
      { module: 'VAPT Methodology', topics: ['Scoping & Rules of Engagement', 'Passive & Active Reconnaissance', 'Threat Modelling', 'CVSS Scoring', 'VAPT Report Writing'] },
      { module: 'Network Penetration Testing', topics: ['Infrastructure Scanning (Nmap, Masscan)', 'Exploitation with Metasploit', 'AD Attacks (BloodHound, Mimikatz)', 'Post-Exploitation', 'Remediation Guidance'] },
      { module: 'Web Application VAPT', topics: ['OWASP Top 10 Testing', 'Manual SQL Injection', 'XSS & CSRF Testing', 'Burp Suite Pro Usage', 'Business Logic Testing'] },
      { module: 'API & Mobile VAPT', topics: ['REST API Security Testing', 'OWASP API Top 10', 'Mobile App Static Analysis (MobSF)', 'Certificate Pinning Bypass', 'Report Delivery & Client Presentation'] },
    ],
    tools: ['Burp Suite Pro', 'Metasploit', 'Nmap', 'BloodHound', 'Mimikatz', 'MobSF', 'OWASP ZAP', 'Nessus', 'Nikto'],
    careerRoles: ['VAPT Analyst', 'Security Consultant', 'Penetration Tester', 'Application Security Engineer', 'Red Team Analyst'],
    certifications: ['Offensive Security Certified Professional (OSCP)', 'EC-Council Certified Penetration Tester (CPENT)', 'CompTIA PenTest+'],
    faqs: [
      { q: 'What is the difference between VAPT and CEH?', a: 'CEH is a certification covering ethical hacking concepts broadly. VAPT is a practical skill — the actual process of assessing and testing systems for vulnerabilities, used in professional consulting engagements.' },
      { q: 'What salary does a VAPT professional earn?', a: 'VAPT professionals earn ₹7–15 LPA at entry level. Senior VAPT consultants and managers earn ₹20–35 LPA.' },
      { q: 'Is VAPT a good career?', a: 'Yes — demand for VAPT professionals is growing rapidly with increasing compliance requirements (PCI-DSS, ISO 27001, RBI guidelines) across banking, healthcare and IT.' },
      { q: 'What tools are used in VAPT?', a: 'Burp Suite Pro, Metasploit, Nmap, BloodHound and Nessus are the core tools. All are covered with hands-on labs in our training.' },
      { q: 'Will I get report writing training?', a: 'Yes — professional VAPT report writing, CVSS scoring, executive summaries and technical remediation guidance are all covered.' },
    ],
  },
  {
    moduleSlug: 'soc-training',
    title: 'SOC Analyst Training in Bangalore',
    h1: 'SOC Analyst Training in Bangalore — Security Operations, SIEM, Incident Response & Threat Hunting',
    short: 'SOC Analyst',
    description: 'Train as a Security Operations Centre (SOC) analyst — SIEM operations with Splunk, threat detection, incident response, log analysis, threat intelligence and blue team defence techniques.',
    duration: '2 Months', salary: '₹5–18 LPA', demand: 'High', students: '200+', badge: 'Blue Team', modules: 4, rating: '4.8', nextBatch: 'Enquire now',
    curriculum: [
      { module: 'SOC Fundamentals', topics: ['SOC Roles & Tier Structure', 'Security Monitoring Concepts', 'Log Management & SIEM Basics', 'Alert Triage Process', 'Common Attack Patterns'] },
      { module: 'SIEM & Log Analysis', topics: ['Splunk Installation & Configuration', 'Search Processing Language (SPL)', 'Dashboards & Alerts in Splunk', 'IBM QRadar Basics', 'Windows & Linux Log Analysis'] },
      { module: 'Incident Response', topics: ['IR Lifecycle (NIST Framework)', 'Malware Analysis Basics', 'Memory & Disk Forensics (Volatility)', 'Network Forensics (Wireshark)', 'IR Playbooks & Runbooks'] },
      { module: 'Threat Intelligence & Hunting', topics: ['Cyber Threat Intelligence (MISP)', 'MITRE ATT&CK Framework', 'Threat Hunting Methodology', 'IOC & TTP Analysis', 'SOC Automation (SOAR Basics)'] },
    ],
    tools: ['Splunk', 'IBM QRadar', 'Wireshark', 'Volatility', 'MISP', 'TheHive', 'Elastic SIEM', 'VirusTotal', 'Any.run'],
    careerRoles: ['SOC Analyst (L1/L2/L3)', 'Security Operations Engineer', 'Incident Responder', 'Threat Intelligence Analyst', 'SIEM Engineer'],
    certifications: ['CompTIA Security+', 'Splunk Core Certified User', 'EC-Council Certified SOC Analyst (CSA)', 'GIAC Security Essentials (GSEC)'],
    faqs: [
      { q: 'What does a SOC analyst do?', a: 'SOC analysts monitor security systems 24/7, detect threats via SIEM tools, investigate alerts, and respond to security incidents to protect organisations.' },
      { q: 'What salary does a SOC analyst earn?', a: 'L1 SOC analysts earn ₹4–7 LPA. L2/L3 analysts earn ₹8–18 LPA. SOC managers earn ₹20–35 LPA in Bangalore.' },
      { q: 'Is SOC a good career entry point?', a: 'Yes — SOC analyst is one of the most accessible cybersecurity roles for freshers with IT backgrounds. Many senior security professionals started as SOC analysts.' },
      { q: 'Do I need to know programming for SOC?', a: 'No — basic networking and OS knowledge is sufficient. Python scripting basics are a plus for SOAR automation but not mandatory.' },
      { q: 'What SIEM tools are covered?', a: 'Splunk (primary) and IBM QRadar. We also cover Elastic SIEM and Microsoft Sentinel basics. Splunk certification prep is included.' },
    ],
  },
];

export function findCyberModule(slug: string) {
  return cyberModules.find(m => m.moduleSlug === slug);
}
