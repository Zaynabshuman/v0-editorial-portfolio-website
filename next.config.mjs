/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoName = '/v0-editorial-portfolio-website'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? repoName : '',
  assetPrefix: isGithubPages ? `${repoName}/` : '',
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? repoName : '',
  },
}

export default nextConfig
