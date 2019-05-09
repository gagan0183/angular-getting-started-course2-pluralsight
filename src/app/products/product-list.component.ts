import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

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

  products: IProduct[] = [
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2016",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl:
        "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      productId: 5,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "May 21, 2016",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
  ];
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

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = "cart";
  }

  ngOnInit() {
    console.log("in init");
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
