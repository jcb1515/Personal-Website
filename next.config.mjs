/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/jcb1515/Jarvis/**",
      },
    ],
  },
};

export default nextConfig;
