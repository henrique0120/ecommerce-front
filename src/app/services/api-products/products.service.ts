import { IProductService } from "./iproduct.service";
import { environment } from '../../../../src/app/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductDetailResponse, SaveProductRequest, SaveProductResponse } from "./product.models";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ProductsService implements IProductService {

  private readonly basePath = environment.apiUrl

  constructor(private http: HttpClient) { }

  findProduct(name:string): Observable<ProductDetailResponse> {
    return this.http.get<ProductDetailResponse>(`${this.basePath}product/find/${name}`)
  }

}
