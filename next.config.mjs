/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/p/2026',
        permanent: true,
      },
    ]
  },
};
export default nextConfig;
