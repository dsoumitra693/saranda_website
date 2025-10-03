/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
      // any needed aliases or rules, e.g.:
      resolveAlias: {
        underscore: 'lodash',
      },
      resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
    },
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "images.pexels.com" },
        { protocol: "https", hostname: "placehold.co", port: "", pathname: "/**" },
        { protocol: "https", hostname: "cdn.sanity.io", port: "", pathname: "/**" },
      ],
    },
  };
  
  export default nextConfig;
  