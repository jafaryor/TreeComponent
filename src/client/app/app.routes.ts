import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { TreeRoutes } from './tree/index';

export const routes: Routes = [
  ...TreeRoutes,
  ...AboutRoutes
];
