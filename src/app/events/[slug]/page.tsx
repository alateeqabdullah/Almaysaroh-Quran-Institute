import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { eventss } from "@/data/events";
import Span from "@/components/Span";
import Link from "next/link";
import NotFound from "@/app/not-found";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = eventss.find((e) => e.slug === slug);
  if (!event) return notFound();

  return (
    <section className="bg-green-50 pb-12 px-4 md:px-12">
      {event.availability ? (
        <Span className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
            {event.title}
          </h1>
          <p className="text-gray-600 text-center mb-6">{event.subtitle}</p>

          
          {/* About */}
          <Card className="mb-6 rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3"> About the Course</h2>
              <p className="text-gray-700">{event.details.about}</p>
            </CardContent>
          </Card>

          {/* What you’ll learn */}
          <Card className="mb-6 rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3"> What You’ll Learn</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {event.details.learn.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card className="mb-6 rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">
                Programme Highlights
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {event.details.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card className="mb-6 rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Schedule</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {event.details.schedule.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Fees */}
          <Card className="mb-6 rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-3">Fees</h2>
              <p className="text-gray-700">{event.details.fees}</p>
            </CardContent>
          </Card>

          {/* Registration Form (Tally) */}
          <Card className="mb-6 rounded-2xl flex justify-center shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-700">
                Register Now
              </h2>
              <iframe
                src={`${event.formLink}?alignCenter=1&hideTitle=1&transparentBackground=1`}
                width="100%"
                height="900"
                frameBorder="20"
                marginHeight={0}
                marginWidth={0}
                title="Registration Form"
                className="rounded-xl w-full border border-green-200"
              ></iframe>
            </CardContent>
          </Card>

          {/* WhatsApp fallback */}
          <div className="text-center mt-8">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
            >
              <Link href="https://wa.me/message/UNMD7XAC5KFUB1" target="_blank">
                💬 Need help? Contact us on WhatsApp
              </Link>
            </Button>
          </div>
        </Span>
      ) : (
        <NotFound />
      )}
    </section>
  );
}
