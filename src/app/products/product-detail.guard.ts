import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
@Injectable()
export class ProductDetailGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log(route.url);
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert("invalid id");
      this.router.navigate(["/products"]);
      return false;
    }
    return true;
  }
  constructor(private router: Router) {}
}
