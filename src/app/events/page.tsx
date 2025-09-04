"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { eventss } from "@/data/events";
import H2 from "@/components/H2";
import Description from "@/components/Description";
import { Clock } from "lucide-react";

export default function EventsPage() {
  return (
    <section className="bg-green-50 px-4 md:px-12">
      <main className="text-center mb-10">
        <H2 className="text-3xl font-bold text-green-800 mb-8">
          Upcoming Events
        </H2>
        <Description className="text-gray-600 mt-2">
          Explore our seasonal Qur’aan programmes and register today.
        </Description>
      </main>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center  ">
        {eventss.map((event) => {
          const Icon = event.icon;
          return (
            <Card
              key={event.slug}
              className={`bg-white rounded-2xl pt-10 p-6 shadow-md border border-green-100 hover:shadow-lg hover:border-green-400 transition duration-300`}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 mx-auto">
                <Icon size={28} />
              </div>
              <CardHeader className=" text-center ">
                <CardTitle className="text-xl font-semibold text-emerald-800">
                  {event.title}
                </CardTitle>
                <p className="text-sm text-gray-500">{event.subtitle}</p>
              </CardHeader>

              {event.availability ? (
                
                  <CardContent>
                    <p className="text-gray-600 mt-2 line-clamp-3">
                      {event.desc}
                    </p>
                    <ul className="text-sm text-gray-600 my-4">
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
               
              ) : (
               
              <div className=" my-4 text-center ">
                <Clock className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <p className=" font-medium text-gray-500 ">Coming Soon</p>
              </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
