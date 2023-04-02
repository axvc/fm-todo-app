const withReactSvg = require('next-react-svg');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  include: path.resolve(__dirname, 'assets'),
  webpack: (config) => config,
};

module.exports = withReactSvg(nextConfig);
