/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/meridian-partners',
  assetPrefix: '/meridian-partners/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
