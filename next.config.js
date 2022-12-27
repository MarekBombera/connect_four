/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['typescript'],
    transpilePackages: ['@acme/ui', 'lodash-es','styled-components'],
  },


}

module.exports = nextConfig