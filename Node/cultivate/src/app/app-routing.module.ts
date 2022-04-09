import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
	{ path: '', redirectTo: '/main', pathMatch:'full', },
	{ path: 'main', component: MainComponent, },
  { path: 'information/:information_name', component: InformationComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
