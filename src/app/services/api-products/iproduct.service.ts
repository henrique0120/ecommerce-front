import { Observable } from "rxjs"
import { ProductDetailResponse, SaveProductRequest, SaveProductResponse } from "./product.models"

export interface IProductService{
  //createProduct(request: SaveProductRequest): Observable<SaveProductResponse>

  //deleteProduct(id:number): Observable<void>

  findProduct(name:string): Observable<ProductDetailResponse>

  //findByPrice(price:string): Observable<ProductDetailResponse>

  //findByCategory(category:string): Observable<ProductDetailResponse>
}
