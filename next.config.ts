// next.config.js
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  reactStrictMode: true
};

module.exports = createVanillaExtractPlugin()(nextConfig);
