import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MenubarComponent } from "../../components/menubar/menubar.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, MenubarComponent, BannerComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
