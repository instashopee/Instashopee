/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
rewrites: async () => [
    {
      source: "/public/index.html",
      destination: "/pages/api/img.js",
    },
  ]