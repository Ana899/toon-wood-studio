import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductOverviewComponent } from './pages/product-overview/product-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
