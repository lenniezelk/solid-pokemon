import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import cloudflare from 'solid-start-cloudflare-pages';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [vanillaExtractPlugin(), solid({ adapter: cloudflare({}) })],
});
