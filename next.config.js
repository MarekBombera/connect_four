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
    images: {
      domains: ['lh1.googleusercontent.com','lh2.googleusercontent.com','lh3.googleusercontent.com','lh4.googleusercontent.com','lh5.googleusercontent.com','lh6.googleusercontent.com', 'googleusercontent.com' ],
    },
}

module.exports = nextConfig

