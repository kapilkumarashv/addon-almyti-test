import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            // CRITICAL: This allows Google Meet to embed your app
            value: "frame-ancestors 'self' https://meet.google.com https://mail.google.com;",
          },
          {
            key: "X-Frame-Options",
            // Legacy support: tells older browsers to allow framing from Google
            value: "ALLOW-FROM https://meet.google.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;