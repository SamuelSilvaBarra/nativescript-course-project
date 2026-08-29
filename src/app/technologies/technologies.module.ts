import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { TechnologiesRoutingModule } from './technologies-routing.module'
import { TechnologiesComponent } from './technologies.component'
import { TechnologyDetailComponent } from './technology-detail.component'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    TechnologiesRoutingModule,
  ],
  declarations: [
    TechnologiesComponent,
    TechnologyDetailComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TechnologiesModule {}
