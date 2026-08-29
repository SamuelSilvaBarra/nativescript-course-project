import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class NavigationDrawerService {
  private openHandler?: () => void

  registerOpenHandler(handler: () => void): void {
    this.openHandler = handler
  }

  open(): void {
    this.openHandler?.()
  }
}
