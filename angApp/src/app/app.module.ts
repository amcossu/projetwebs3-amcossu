import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { Http, HttpModule, Headers, RequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CandidatureDetailComponent } from './candidature-detail/candidature-detail.component';
import { CandidatureCreateComponent } from './candidature-create/candidature-create.component';
import { CandidatureEditComponent } from './candidature-edit/candidature-edit.component';

import { CandidatureService } from '../../services/candidature.service';
import { AuthService } from '../../services/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'candidatures',
    component: CandidatureComponent,
  },
  {
    path: 'candidature/:id',
    component: CandidatureDetailComponent,
  },
  {
    path: 'candidature-edit',
    component: CandidatureEditComponent,
  },
  {
    path: 'candidature-create',
    component: CandidatureCreateComponent,

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profil',
    component: ProfileComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];




@NgModule({
  declarations: [
    AppComponent,
    CandidatureComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CandidatureDetailComponent,
    CandidatureCreateComponent,
    CandidatureEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CandidatureService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
