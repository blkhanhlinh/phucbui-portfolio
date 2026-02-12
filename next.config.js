/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        destination:
          'https://www.figma.com/proto/LYCHX7sPqp7SFRoAJ5YssF/Portfolio-Website?page-id=629%3A4599&node-id=1998-265&viewport=-655%2C20557%2C0.28&t=ROXGnJrwWvwM3HUB-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1549%3A704&show-proto-sidebar=1',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig