import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailComponent } from "./pages/detail/detail.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-front';
}
