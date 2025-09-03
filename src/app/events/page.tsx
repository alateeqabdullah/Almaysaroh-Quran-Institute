"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { eventss } from "@/data/events";

export default function EventsPage() {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-700">
            📅 Upcoming Courses & Events
          </h1>
          <p className="text-gray-600 mt-2">
            Explore our seasonal Qur’ān programmes and register today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventss.map((event) => (
            <Card
              key={event.slug}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <CardHeader>
                <CardTitle className="text-green-700">{event.title}</CardTitle>
                <p className="text-sm text-gray-500">{event.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">{event.desc}</p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>
                    <strong>Duration:</strong> {event.duration}
                  </li>
                  <li>
                    <strong>Mode:</strong> {event.mode}
                  </li>
                </ul>
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white w-full rounded-xl"
                >
                  <Link href={`/events/${event.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
