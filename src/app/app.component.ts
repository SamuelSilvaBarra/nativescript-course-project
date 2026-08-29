import { Component, NO_ERRORS_SCHEMA } from '@angular/core'
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
  RouterExtensions,
} from '@nativescript/angular'

import { NavigationDrawerService } from './core/navigation-drawer.service'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {
  drawerOpen = false

  constructor(
    private router: RouterExtensions,
    private drawerService: NavigationDrawerService,
  ) {
    this.drawerService.registerOpenHandler(() => {
      this.openDrawer()
    })
  }

  openDrawer(): void {
    this.drawerOpen = true
  }

  closeDrawer(): void {
    this.drawerOpen = false
  }

  navigate(route: string): void {
    this.router.navigate([route])
    this.closeDrawer()
  }
}
