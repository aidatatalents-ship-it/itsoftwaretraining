import type { Metadata } from 'next';
import AllCoursesClient from './AllCoursesClient';

export const metadata: Metadata = {
  title: 'All IT Courses in Bangalore | Salesforce, SAP, Python, Cloud, DevOps, Cybersecurity',
  description:
    'Browse 30+ IT training courses in Bangalore — Salesforce Admin, LWC, CPQ, AWS, Azure, SAP FICO, SAP MM, Python AI, Docker, Kubernetes, CEH, VAPT and more. Live projects, certifications, 100% placement support.',
};

export default function AllCoursesPage() {
  return <AllCoursesClient />;
}
