import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductComponent } from "../../components/product/product.component";

@Component({
  selector: 'app-detail',
  imports: [NavbarComponent, ProductComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
