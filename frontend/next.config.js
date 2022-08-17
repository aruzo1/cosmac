/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["backend"],
  },
  output: "standalone"
};

module.exports = nextConfig;
