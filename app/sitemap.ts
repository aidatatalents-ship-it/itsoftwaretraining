import type { MetadataRoute } from 'next';
import { courseTree } from '@/data/courseTree';
import { salesforceModules } from '@/data/salesforceModules';
import { cloudModules } from '@/data/cloudModules';
import { sapModules } from '@/data/sapModules';
import { devopsModules } from '@/data/devopsModules';
import { cyberModules } from '@/data/cyberModules';
import { pythonModules } from '@/data/pythonModules';
import { services } from '@/data/services';

const BASE = 'https://itsoftwaretraining.vercel.app';
const NOW  = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ──────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                   lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/all-courses`,  lastModified: NOW, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/contact`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`,        lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/placements`,   lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // ── /courses/[parent] — enrolment hub pages ───────────
  const coursePages: MetadataRoute.Sitemap = courseTree.map(p => ({
    url: `${BASE}/courses/${p.slug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // ── /platforms/[slug] — career guide pages ────────────
  const platformPages: MetadataRoute.Sitemap = courseTree.map(p => ({
    url: `${BASE}/platforms/${p.slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // ── /services/[slug] — legacy service pages ───────────
  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // ── Sub-module pages ──────────────────────────────────
  const salesforcePages: MetadataRoute.Sitemap = salesforceModules.map(m => ({
    url: `${BASE}/salesforce/${m.moduleSlug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const cloudPages: MetadataRoute.Sitemap = cloudModules.map(m => ({
    url: `${BASE}/cloud/${m.moduleSlug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const sapPages: MetadataRoute.Sitemap = sapModules.map(m => ({
    url: `${BASE}/sap/${m.moduleSlug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const devopsPages: MetadataRoute.Sitemap = devopsModules.map(m => ({
    url: `${BASE}/devops/${m.moduleSlug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const cyberPages: MetadataRoute.Sitemap = cyberModules.map(m => ({
    url: `${BASE}/cybersecurity/${m.moduleSlug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const pythonPages: MetadataRoute.Sitemap = pythonModules.map(m => ({
    url: `${BASE}/python/${m.moduleSlug}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [
    ...staticPages,
    ...coursePages,
    ...platformPages,
    ...servicePages,
    ...salesforcePages,
    ...cloudPages,
    ...sapPages,
    ...devopsPages,
    ...cyberPages,
    ...pythonPages,
  ];
}
