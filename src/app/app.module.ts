import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpaces } from "./pipes/convert-to-spaces.pipe";
import { StarComponent } from "./star/star.component";
import { ProductService } from "./products/product.service";
import { ProductDetailComponent } from "./products/product-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
