/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async headers() {
    return [
      {
        source: '/resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline; filename="Anuj_Srivastav_Senior_Full_Stack_Engineer.pdf"',
          },
        ],
      },
      {
        source: '/resume-staff.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline; filename="Anuj_Srivastav_Staff_Frontend_Engineer.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
