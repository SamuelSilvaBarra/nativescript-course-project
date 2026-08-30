import { Component, inject } from '@angular/core'
import { NativeScriptFormsModule } from '@nativescript/angular'
import { SettingsService } from '../services/settings.service'

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  standalone: true,
  imports: [NativeScriptFormsModule],
})
export class SettingsComponent {
  private settingsService = inject(SettingsService)

  username = this.settingsService.getUsername()

  save(): void {
    this.settingsService.saveUsername(this.username)
  }
}
