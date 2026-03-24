/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 this generates `out/` folder

  images: {
    unoptimized: true, // 👈 required for static export (S3)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.missingpieceinvites.com',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
    ],
  },
};

export default nextConfig;