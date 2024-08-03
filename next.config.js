/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/fintaxSafe",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
