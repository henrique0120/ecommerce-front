import { InjectionToken } from "@angular/core";
import { IProductService } from "./api-products/iproduct.service";

export const SERVICES_TOKEN = {
  HTTP: {
    PATIENT: new InjectionToken<IProductService>('SERVICES_TOKEN.HTTP.PATIENT')
}
}
