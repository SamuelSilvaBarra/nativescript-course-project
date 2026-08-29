import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TechnologyService {
  getTechnologies(): string[] {
    return [
      'Angular',
      'NativeScript',
      'TypeScript',
      'Python',
    ]
  }
}
