import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "./product";

@Component({
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product detail";
  product: IProduct;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);
    this.pageTitle += id;
  }
}
