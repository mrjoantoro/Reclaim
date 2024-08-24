import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  recentProducts: Product[] = [
    {
      id: '1',
      title: 'Zapatillas',
      description: 'Zapillas blancas terrible pulentas',
      imageUrl: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126979469_01/w=1500,h=1500,fit=pad',
      status: 'Reportado',
      location: 'En el baño',
      dateReported: new Date()
    },
    {
      id: '2',
      title: 'iPhone 14',
      description: 'iPhone 14 negro black wazap',
      imageUrl: 'https://d1aqw5mz0wngqe.cloudfront.net/images/spree/images/2123123/attachments/large/Apple_iPhone_14_Midnight_1A.jpg?1678205819',
      status: 'Encontrado',
      location: 'Laboratorio LPC11',
      dateReported: new Date()
    },
    {
      id: '3',
      title: 'Product 3',
      description: 'Description 3',
      imageUrl: 'https://picsum.photos/200/300',
      status: 'Validado',
      location: 'Calle 3',
      dateReported: new Date()
    },
    {
      id: '4',
      title: 'Product 4',
      description: 'Description 4',
      imageUrl: 'https://picsum.photos/200/300',
      status: 'Entregado',
      location: 'Calle 4',
      dateReported: new Date()
    }
  ]

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  navigateToReport(){
    this.navCtrl.navigateForward('/report');
  }

  navigateToFind(){
    this.navCtrl.navigateForward('/find');
  }

}
