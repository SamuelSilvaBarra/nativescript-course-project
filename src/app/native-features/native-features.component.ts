import { Component } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { Dialogs, ImageAsset, ImageSource } from '@nativescript/core'
import { shareText, shareImage } from '@nativescript/social-share'
import * as camera from '@nativescript/camera'

@Component({
  selector: 'ns-native-features',
  templateUrl: './native-features.component.html',
  standalone: true,
  imports: [NativeScriptCommonModule],
})
export class NativeFeaturesComponent {
  photo: ImageAsset | null = null

  shareContent(): void {
    shareText(
      'Estoy aprendiendo NativeScript y utilizando capacidades nativas del dispositivo.',
      'Compartir desde NativeScript'
    )
  }

  async takePhoto(): Promise<void> {
    try {
      if (!camera.isAvailable()) {
        await Dialogs.alert('No hay una cámara disponible en este dispositivo.')
        return
      }

      const permissions = await camera.requestCameraPermissions()

      if (!permissions.Success) {
        await Dialogs.alert('Se necesita permiso para utilizar la cámara.')
        return
      }

      this.photo = await camera.takePicture({
        width: 800,
        height: 800,
        keepAspectRatio: true,
        saveToGallery: false,
      })
    } catch (error) {
      console.error('Error taking photo:', error)
      await Dialogs.alert('No fue posible tomar la fotografía.')
    }
  }
  async sharePhoto(): Promise<void> {
    if (!this.photo) {
      await Dialogs.alert('Primero toma una fotografía.')
      return
    }

    try {
      const imageSource = await ImageSource.fromAsset(this.photo)

      await shareImage(
        imageSource,
        'Foto tomada desde NativeScript'
      )
    } catch (error) {
      console.error('Error sharing photo:', error)
      await Dialogs.alert('No fue posible compartir la fotografía.')
    }
  }
}
