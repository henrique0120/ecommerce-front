import { InjectionToken } from "@angular/core";
import { IProductService } from "./api-products/iproducts.service";

export const SERVICES_TOKEN = {
  HTTP: {
    PATIENT: new InjectionToken<IProductService>('SERVICES_TOKEN.HTTP.PATIENT')
}
}
