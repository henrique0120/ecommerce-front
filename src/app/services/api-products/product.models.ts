export interface SaveProductRequest {
  name:string
  category:string
  price:string
  stock:number
  description:string
}

export interface SaveProductResponse {
  id:number
  name:string
  category:string
  price:string
  stock:number
  description:string
}

export interface ListProductResponse {
  id:number
  name:string
  category:string
  price:string
  stock:number
  description:string
}

export interface ProductDetailResponse {
  id:number
  name:string
  category:string
  price:string
  stock:number
  description:string
}


