/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tensile-structure-manufacturers-in-delhi",
        destination: "/services/tensile-structure-manufacturers-in-delhi",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
