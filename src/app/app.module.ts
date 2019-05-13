import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpaces } from "./pipes/convert-to-spaces.pipe";
import { StarComponent } from "./star/star.component";
import { ProductService } from "./products/product.service";
import { ProductDetailComponent } from "./products/product-detail.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProductDetailGuard } from "./products/product-detail.guard";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "products", component: ProductListComponent },
      {
        path: "product/:id",
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  providers: [ProductService, ProductDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
