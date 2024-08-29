import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage {
  reportForm!: FormGroup; // Usando operador de aserción no nula

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private productService: ProductService
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.reportForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', Validators.required],
      imageUrl: [''],
      status: ['Reportado', Validators.required], // Default status
    });
  }

  submitReport() {
    if (this.reportForm.valid) {
      this.productService.addProduct(this.reportForm.value).then(() => {
        this.navCtrl.navigateBack('/home');
      });
    }
  }
}
