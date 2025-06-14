/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/dawah",
  assetPrefix: "/dawah/",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
