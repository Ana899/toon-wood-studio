import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {
  AboutComponent,
  ContactComponent,
  ProductDetailComponent,
  ProductOverviewComponent,
} from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductOverviewComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
