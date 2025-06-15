/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/dawah",

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
