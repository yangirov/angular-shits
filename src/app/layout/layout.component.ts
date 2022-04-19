import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html"
})
export class LayoutComponent implements OnInit {
  exampleProp = 'Parent prop';

  constructor() {
    console.log("run constructor");
  }

  ngOnInit() {
    console.log("run ngOnInit - " this.exampleProp);
  }
}
