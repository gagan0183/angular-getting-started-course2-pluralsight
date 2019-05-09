import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  productListTitle: String = "Product List";
  imageWidth = 50;
  imageHeight = 2;
  showImage: boolean = false;

  filteredProducts: IProduct[] = [];

  products: IProduct[];
  _listFilter: string;
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.products
      ? this.performFilter(value)
      : this.products;
  }

  get listFilter() {
    return this._listFilter;
  }

  constructor(private productService: ProductService) {
    this.listFilter = "cart";
  }

  ngOnInit() {
    console.log("in init");
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(value: string): IProduct[] {
    value = value.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(value) !== -1
    );
  }

  ratingClicked(message: string): void {
    this.productListTitle = message;
  }
}
