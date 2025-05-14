import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-product',
  imports: [MatInputModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
open = false;
toggle() {
  this.open = !this.open;
}

}
