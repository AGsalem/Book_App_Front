import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return[
      {
      source:"/back/:path*",
     destination :`${process.env.BACK}/:path*`
    }
    ]
  },
};

export default nextConfig;
