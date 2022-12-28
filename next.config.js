/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['typescript'],
    transpilePackages: ['styled-components'],
  },
}

module.exports = nextConfig

