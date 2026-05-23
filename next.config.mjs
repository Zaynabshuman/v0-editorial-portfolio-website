/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/v0-editorial-portfolio-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/v0-editorial-portfolio-website/' : '',
  output: 'export',
}

export default nextConfig
