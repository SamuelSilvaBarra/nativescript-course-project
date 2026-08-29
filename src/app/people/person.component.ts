import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
  computed,
  inject,
  signal,
} from '@angular/core'
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from '@nativescript/angular'
import { NavigationDrawerService } from '../core/navigation-drawer.service'
import { PersonService } from './person.service'

@Component({
  selector: 'ns-person',
  templateUrl: './person.component.html',
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent {

  personService = inject(PersonService)

  searchText = signal('')

  filteredItems = computed(() => {
    const query = this.searchText().trim().toLowerCase()

    if (!query) {
      return this.personService.items()
    }

    return this.personService
      .items()
      .filter((person) => person.name.toLowerCase().includes(query))
  })

  onSearchChange(args: any) {
    this.searchText.set(String(args.value ?? ''))
  }
  drawerService = inject(NavigationDrawerService)

  openDrawer(): void {
    this.drawerService.open()
  }
}

