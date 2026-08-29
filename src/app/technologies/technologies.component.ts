import { Component } from '@angular/core'
import { TechnologyService } from './technology.service'
import { isAndroid } from '@nativescript/core'
import { EventData, View } from '@nativescript/core'

@Component({
  selector: 'ns-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  standalone: false,
})
export class TechnologiesComponent {
  technologies: string[]
  platform = 'Unknown'

  constructor(private technologyService: TechnologyService) {
    this.technologies = this.technologyService.getTechnologies()

    if (isAndroid) {
      this.platform = 'Android'
    }
  }
  animateButton(args: EventData): void {
    const button = args.object as View

    button.animate({
      rotate: 360,
      duration: 500,
    })
  }
  onLongPress(): void {
      console.log('Long press detected')
    }
}
