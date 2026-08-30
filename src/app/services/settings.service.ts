import { Injectable } from '@angular/core'
import { ApplicationSettings } from '@nativescript/core'

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private readonly USERNAME_KEY = 'username'

  getUsername(): string {
    return ApplicationSettings.getString(this.USERNAME_KEY, '')
  }

  saveUsername(username: string): void {
    ApplicationSettings.setString(this.USERNAME_KEY, username)
  }
}
