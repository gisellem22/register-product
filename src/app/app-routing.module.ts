import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliverComponent } from './pages/deliver/deliver.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'deliver', component: DeliverComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
