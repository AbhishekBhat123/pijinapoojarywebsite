// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['images.unsplash.com','www.shutterstock.com','imageio.forbes.com'],
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'imageio.forbes.com',
      },
    ],
  },
};

module.exports = nextConfig;
