/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["e7.pngegg.com"],
  },
};

module.exports = nextConfig
