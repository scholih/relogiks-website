import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'relogiks',
  title: 'Relogiks CMS',

  projectId: 'cjau20t6',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },

  basePath: '/studio',
});
