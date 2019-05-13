import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ConvertToSpaces } from "../pipes/convert-to-spaces.pipe";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailGuard } from "./product-detail.guard";
import { SharedModule } from "../share/share.module";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "product/:id",
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ],
  declarations: [ProductListComponent, ConvertToSpaces, ProductDetailComponent]
})
export class ProductModule {}
