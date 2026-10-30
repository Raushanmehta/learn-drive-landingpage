import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Config */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/courses",
        destination: "/driving-courses",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/testimonial",
        permanent: true,
      },
      {
        source: "/test-preparation",
        destination: "/drive-test",
        permanent: true,
      },
      {
        source: "/driving-license",
        destination: "/driving-courses/driving-license-training",
        permanent: true,
      },
      {
        source: "/vehicle-insurance",
        destination: "/driving-courses/vehicle-safety-training",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/enquiry",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
