/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vyuyarljkhohosaftbhd.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
