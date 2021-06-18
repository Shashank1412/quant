import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponentComponent } from 'src/pages/page-component/page-component.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  // { path: 'login', component: LoginPageComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pages', component: PageComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {

}
