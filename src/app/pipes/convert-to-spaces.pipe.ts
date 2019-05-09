import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "convertToSpaces"
})
export class ConvertToSpaces implements PipeTransform {
  transform(value: string, params: string): string {
    return value.replace(params, " ");
  }
}
