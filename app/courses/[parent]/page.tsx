import { courseTree, findParent } from '@/data/courseTree';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ParentCoursePage from '@/components/courses/ParentCoursePage';

type Props = { params: Promise<{ parent: string }> };

export async function generateStaticParams() {
  return courseTree.map((p) => ({ parent: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { parent: slug } = await params;
  const parent = findParent(slug);
  if (!parent) return {};

  const childNames = parent.children.map(c => c.title).join(', ');
  const description = `${parent.description} Courses: ${childNames}. Expert trainers, live projects, 100% placement support & global certification prep in Bangalore.`;

  return {
    title: `${parent.title} | All Specialisations | IT Software Training`,
    description,
    keywords: [
      `${parent.title}`,
      `${slug} training Bangalore`,
      `best ${slug} course Bangalore`,
      ...parent.children.map(c => `${c.title} Bangalore`),
    ],
    openGraph: {
      title: parent.title,
      description: parent.description,
    },
  };
}

export default async function CoursesParentPage({ params }: Props) {
  const { parent: slug } = await params;
  const parent = findParent(slug);
  if (!parent) notFound();

  return <ParentCoursePage parent={parent} />;
}
