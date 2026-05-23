/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/v0-editorial-portfolio-website' : '',
  assetPrefix: isGithubPages ? '/v0-editorial-portfolio-website/' : '',
  output: 'export',
}

export default nextConfig
