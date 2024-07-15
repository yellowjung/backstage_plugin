import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const konnectFrontendPlugin = createPlugin({
  id: 'konnect-frontend',
  routes: {
    root: rootRouteRef,
  },
});

export const KonnectFrontendPage = konnectFrontendPlugin.provide(
  createRoutableExtension({
    name: 'KonnectFrontendPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
