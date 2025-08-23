// app/programs/[slug]/loading.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/Skeleton";

export default function LoadingProgram() {
  return (
    <div className="container mx-auto px-4 py-10 pb-16 space-y-10">
      {/* Header Skeleton */}
      <div className="text-center space-y-4">
        <Skeleton className="mx-auto h-12 w-12 rounded-full" />
        <Skeleton className="h-8 w-64 mx-auto" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>

      {/* Outline Skeleton */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-5 w-40" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </CardContent>
      </Card>

      {/* Pricing Skeleton */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-5 w-32" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-40" />
        </CardContent>
      </Card>

      {/* CTA Skeleton */}
      <div className="text-center">
        <Skeleton className="h-10 w-40 mx-auto rounded-lg" />
      </div>
    </div>
  );
}
