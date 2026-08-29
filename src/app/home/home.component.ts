import { Component, inject } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Book } from '../services/books-api.service'
import { NavigationDrawerService } from '../core/navigation-drawer.service'

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [NativeScriptCommonModule],
})
export class HomeComponent {
  private store = inject(Store)
  drawerService = inject(NavigationDrawerService)

  openDrawer(): void {
      this.drawerService.open()
    }

  readNowBooks$: Observable<Book[]> =
    this.store.select('readNow')
}
