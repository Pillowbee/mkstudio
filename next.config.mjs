/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: process.env.ASSETS_URL,
                port: '8055',
                pathname: '/assets/**',
            },
        ],
    },
};

export default nextConfig;
