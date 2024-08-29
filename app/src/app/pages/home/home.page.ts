import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  recentProducts: Product[] = [];

  constructor(private navCtrl : NavController, private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.recentProducts = products;
    });
  }

  navigateToReport(){
    this.navCtrl.navigateForward('/report');
  }

  navigateToFind(){
    this.navCtrl.navigateForward('/find');
  }

}
