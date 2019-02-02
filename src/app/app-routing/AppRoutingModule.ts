import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { FormCandidatoComponent } from '../components/form-candidato/form-candidato.component';
import { ConsulReposComponent } from '../components/consul-repos/consul-repos.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registerCandidate', component: FormCandidatoComponent},
  {path: 'repositories', component: ConsulReposComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
