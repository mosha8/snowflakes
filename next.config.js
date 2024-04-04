/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(svg)$/i,
      type: 'asset',
      resourceQuery: { not: /svgr/ },
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /svgr/, // *.svg?svgr
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;