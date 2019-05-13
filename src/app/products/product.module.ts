import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ConvertToSpaces } from "../pipes/convert-to-spaces.pipe";
import { StarComponent } from "../star/star.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailGuard } from "./product-detail.guard";
import { WelcomeComponent } from "../welcome/welcome.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "product/:id",
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailComponent
  ]
})
export class ProductModule {}
