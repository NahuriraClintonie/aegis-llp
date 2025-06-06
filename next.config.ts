import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const baseConfig: NextConfig = {
  reactStrictMode: true
};

const nextConfig = createVanillaExtractPlugin()(baseConfig);

export default nextConfig;
