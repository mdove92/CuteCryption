import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';


const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent,
},
{
    path: 'templates',
    component: TemplatesComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
