import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'pf-components',
  plugins: [sass()],
  globalStyle: 'src/global/main.scss',
  globalScript: 'src/global/main.ts',
  outputTargets: [
    reactOutputTarget({
      // @ts-ignore
      componentCorePackage: __dirname,
      proxiesFile: '../react-components/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
