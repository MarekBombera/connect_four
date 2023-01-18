/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      esmExternals: false,
      appDir: true,
    },
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  
    eslint: {
      ignoreDuringBuilds: true,
    },
  
    typescript: {
      ignoreBuildErrors: true,
    },
}

module.exports = nextConfig

