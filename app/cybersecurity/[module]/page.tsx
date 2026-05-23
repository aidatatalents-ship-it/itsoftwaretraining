import { cyberModules, findCyberModule } from '@/data/cyberModules';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import TrainingModulePage from '@/components/training/TrainingModulePage';

type Props = { params: Promise<{ module: string }> };

export async function generateStaticParams() {
  return cyberModules.map(m => ({ module: m.moduleSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { module: slug } = await params;
  const mod = findCyberModule(slug);
  if (!mod) return {};
  return {
    title: `${mod.title} | IT Software Training Bangalore`,
    description: mod.description,
    keywords: [mod.title, `${mod.short} training Bangalore`, `${mod.short} certification Bangalore`, `best ${mod.short} course Bangalore`],
  };
}

export default async function CyberModulePage({ params }: Props) {
  const { module: slug } = await params;
  const mod = findCyberModule(slug);
  if (!mod) notFound();
  return (
    <TrainingModulePage
      mod={mod}
      parentTitle="Cybersecurity Training"
      parentSlug="cybersecurity"
      siblings={cyberModules.map(m => ({ slug: m.moduleSlug, short: m.short }))}
      siblingBase="/cybersecurity"
    />
  );
}
