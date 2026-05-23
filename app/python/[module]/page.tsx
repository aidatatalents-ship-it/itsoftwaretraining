import { pythonModules, findPythonModule } from '@/data/pythonModules';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import TrainingModulePage from '@/components/training/TrainingModulePage';

type Props = { params: Promise<{ module: string }> };

export async function generateStaticParams() {
  return pythonModules.map(m => ({ module: m.moduleSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { module: slug } = await params;
  const mod = findPythonModule(slug);
  if (!mod) return {};
  return {
    title: `${mod.title} | IT Software Training Bangalore`,
    description: mod.description,
    keywords: [mod.title, `${mod.short} training Bangalore`, `${mod.short} course Bangalore`, `best ${mod.short} training institute Bangalore`],
  };
}

export default async function PythonModulePage({ params }: Props) {
  const { module: slug } = await params;
  const mod = findPythonModule(slug);
  if (!mod) notFound();
  return (
    <TrainingModulePage
      mod={mod}
      parentTitle="Python & AI Training"
      parentSlug="python-data-science"
      siblings={pythonModules.map(m => ({ slug: m.moduleSlug, short: m.short }))}
      siblingBase="/python"
    />
  );
}
