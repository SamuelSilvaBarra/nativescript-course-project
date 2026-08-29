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
import { RouterExtensions } from '@nativescript/angular'
import { registerElement } from '@nativescript/angular'
import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh'
import { action } from '@nativescript/core'
import { SnackBar } from '@nstudio/nativescript-snackbar'
import { NativeScriptFormsModule } from '@nativescript/angular'
import { MinSearchLengthDirective } from '../validators/min-search-length.directive'

registerElement('PullToRefresh', () => PullToRefresh)

@Component({
  selector: 'ns-person',
  templateUrl: './person.component.html',
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    MinSearchLengthDirective,
    ],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent {
  private snackBar = new SnackBar()
  personService = inject(PersonService)
  searchText = signal('')
  searchModel = ''
  router = inject(RouterExtensions)

  async changeCategory(person: any): Promise<void> {
    const result = await action({
      message: 'Select category',
      cancelButtonText: 'Cancel',
      actions: ['AI', 'Programming', 'Computer Science'],
    })

    if (result !== 'Cancel') {
      person.category = result

      this.personService.items.set([
        ...this.personService.items()
      ])
      this.snackBar.simple(`Category changed to ${result}`)
    }
  }

  refreshList(args: any): void {
    const pullRefresh = args.object

    const currentItems = this.personService.items()

    this.personService.items.set([
      ...currentItems,
      {
        id: currentItems.length + 1,
        name: `New Scientist ${currentItems.length + 1}`,
        nationality: 'Unknown',
        notableAchievements: ['Added with pull to refresh'],
      },
    ])

    pullRefresh.refreshing = false
  }

  openDetail(id: number): void {
    this.router.navigate(['/item', id])
  }

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

