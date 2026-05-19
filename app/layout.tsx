import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: { default: 'Best IT Software Training in Bangalore | #1 IT Training Institute', template: '%s | IT Software Training Bangalore' },
  description: "IT Software Training Bangalore — Bangalore's most trusted IT software training institute. Expert-led Salesforce, SAP, Python, Data Science, Cloud AWS/Azure, Cybersecurity, Power BI & DevOps courses. 10,000+ placed. Book free demo.",
  keywords: ['IT training Bangalore', 'IT software training Bangalore', 'Salesforce training Bangalore', 'SAP training', 'Python Data Science', 'AWS cloud training', 'DevOps course', 'cybersecurity training', 'Power BI analytics Bangalore'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&family=Hind:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
