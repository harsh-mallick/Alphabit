/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
            },
        ],
    },
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;
