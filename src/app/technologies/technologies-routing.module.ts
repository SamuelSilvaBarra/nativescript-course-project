import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { TechnologiesComponent } from './technologies.component'
import { TechnologyDetailComponent } from './technology-detail.component'

const routes: Routes = [
  {
    path: '',
    component: TechnologiesComponent,
  },
  {
    path: ':id',
    component: TechnologyDetailComponent,
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class TechnologiesRoutingModule {}
