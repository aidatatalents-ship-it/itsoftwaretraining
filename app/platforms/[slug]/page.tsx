import { services } from '@/data/services';
import { serviceDetails } from '@/data/serviceDetails';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PlatformPage from '@/components/platform/PlatformPage';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.h1 || `${service.name} Training in Bangalore`} | IT Software Training`,
    description: `${service.description} Industry-led ${service.short} training in Bangalore with live projects, global certifications & 100% placement support. Book a free demo class today.`,
    keywords: [
      `${service.short} training Bangalore`,
      `${service.short} course Bangalore`,
      `best ${service.short} training institute Bangalore`,
      `${service.short} certification Bangalore`,
      `${service.short} platform training Bangalore`,
      `learn ${service.short} Bangalore`,
    ],
    openGraph: {
      title: service.h1 || `Best ${service.name} in Bangalore`,
      description: service.description,
      images: [service.img],
    },
  };
}

export default async function PlatformDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const detail = serviceDetails[slug] || {};

  return <PlatformPage service={service} detail={detail} />;
}
