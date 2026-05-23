import { salesforceModules, findSFModule } from '@/data/salesforceModules';
import { serviceDetails } from '@/data/serviceDetails';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SalesforceModulePage from '@/components/salesforce/SalesforceModulePage';

type Props = { params: Promise<{ module: string }> };

export async function generateStaticParams() {
  return salesforceModules.map((m) => ({ module: m.moduleSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { module: slug } = await params;
  const mod = findSFModule(slug);
  if (!mod) return {};
  return {
    title: `${mod.title} | IT Software Training Bangalore`,
    description: mod.description,
    keywords: [
      mod.title,
      `${mod.short} training Bangalore`,
      `${mod.short} course Bangalore`,
      `best ${mod.short} training institute Bangalore`,
      `${mod.short} certification Bangalore`,
    ],
    openGraph: {
      title: mod.h1,
      description: mod.description,
    },
  };
}

export default async function SFModulePage({ params }: Props) {
  const { module: slug } = await params;
  const mod = findSFModule(slug);
  if (!mod) notFound();

  const detail = serviceDetails[mod.detailKey] || {};

  return <SalesforceModulePage mod={mod} detail={detail} />;
}
