import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./pages/home/home.module').then(h => h.HomeModule) },
  { path: 'explore', loadChildren: () => import('./pages/explore/explore.module').then(e => e.ExploreModule) },
  { path: 'watch', loadChildren: () => import('./pages/watch/watch.module').then(w => w.WatchModule) },
  { path: 'play', loadChildren: () => import('./pages/play/play.module').then(p => p.PlayModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
