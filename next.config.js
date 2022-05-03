/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}`,
  basePath: `${process.env.NEXT_PUBLIC_BASE_PATH}`,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },
  images: { 
    path: `${process.env.NEXT_PUBLIC_BASE_PATH}/_next/image`,
  }
}

module.exports = nextConfig
