import { cloudModules, findCloudModule } from '@/data/cloudModules';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import TrainingModulePage from '@/components/training/TrainingModulePage';

type Props = { params: Promise<{ module: string }> };

export async function generateStaticParams() {
  return cloudModules.map(m => ({ module: m.moduleSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { module: slug } = await params;
  const mod = findCloudModule(slug);
  if (!mod) return {};
  return {
    title: `${mod.title} | IT Software Training Bangalore`,
    description: mod.description,
    keywords: [mod.title, `${mod.short} training Bangalore`, `${mod.short} certification Bangalore`, `best ${mod.short} course Bangalore`],
  };
}

export default async function CloudModulePage({ params }: Props) {
  const { module: slug } = await params;
  const mod = findCloudModule(slug);
  if (!mod) notFound();
  return (
    <TrainingModulePage
      mod={mod}
      parentTitle="Cloud Training"
      parentSlug="cloud"
      siblings={cloudModules.map(m => ({ slug: m.moduleSlug, short: m.short }))}
      siblingBase="/cloud"
    />
  );
}
