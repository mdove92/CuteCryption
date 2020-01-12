import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TemplatesComponent } from "./templates/templates.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path: "templates",
    component: TemplatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
