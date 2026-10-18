/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tensile-structure-manufacturers-in-delhi",
        destination: "/services/tensile-structure-manufacturers-in-delhi",
        permanent: true,
      },
      {
        source: "/services/turnkey-interior-design",
        destination: "/services/turnkey-interior-design-delhi-ncr",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
