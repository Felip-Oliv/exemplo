import { CadastrosComponent } from './cadastros/cadastros.component';
import { SobreComponent } from './sobre/sobre.component';
import { AdmComponent } from './adm/adm.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:"adm", component: AdmComponent},
  {path:"cadastros", component: CadastrosComponent},
  {path:"sobre", component: SobreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
