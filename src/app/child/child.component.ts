import { Component } from "@angular/core";
import { LayoutComponent } from "../layout/layout.component";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html"
})
export class ChildComponent extends LayoutComponent {
  exampleProp = "Child prop";
}
