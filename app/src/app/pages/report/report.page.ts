import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ProductService } from '../../services/product.service';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  reportForm!: FormGroup; // Usamos el operador de aserción no nula para inicializar luego
  selectedImage: File | null = null; // Para manejar la imagen seleccionada

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Inicializamos el formulario en ngOnInit
    this.reportForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', Validators.required],
      imageUrl: [''], // Inicialmente vacío, lo llenaremos si se selecciona una imagen
      status: ['Reportado', Validators.required], // Estado inicial por defecto
    });
  }

  // Método para manejar el envío del formulario
  submitReport() {
    if(this.reportForm.valid) {
      const productData = this.reportForm.value;
      this.productService.createLostProduct(productData)
        .then(() => {
          console.log('Producto reportado satisfactoriamente');
          this.navCtrl.navigateForward('/home');
        })
        .catch((error) => {
          console.log('Error al reportar el producto', error);
        });
    }
  }

  // Método para manejar la selección de la imagen
  onImageSelected(image: File) {
    this.selectedImage = image; // Almacenamos la imagen seleccionada
  }

  // Método para tomar foto
  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri,
    });

    var imageUrl = image.webPath;
    console.log(imageUrl);
  }
}
