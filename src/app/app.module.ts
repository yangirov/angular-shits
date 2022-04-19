import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { ChildComponent } from "./child/child.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, LayoutComponent, ChildComponent],
  entryComponents: [AppComponent, LayoutComponent, ChildComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
