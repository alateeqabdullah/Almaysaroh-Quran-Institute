// src/app/pricing/[slug]/page.tsx  (Server Component by default)

import PricingPage from "@/components/Pricingpage";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap promise in Next.js 15

  return <PricingPage slug={slug} />;
}
