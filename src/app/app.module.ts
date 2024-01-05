import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FreelancerConnectComponent } from './freelancer-connect/freelancer-connect.component';
import { FreelancerProfilComponent } from './freelancer-profil/freelancer-profil.component';
import { OffersComponent } from './offers/offers.component';
import { CompaniesFrComponent } from './companies-fr/companies-fr.component';
import { CompanyConnectComponent } from './company-connect/company-connect.component';
import { CompanyProfilComponent } from './company-profil/company-profil.component';
import { FreelancersCcComponent } from './freelancers-cc/freelancers-cc.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BeforeSignupComponent } from './before-signup/before-signup.component';
import { SignUpCompanyComponent } from './sign-up-company/sign-up-company.component';
import { SignUpFreelancerComponent } from './sign-up-freelancer/sign-up-freelancer.component';
import { OffersCompanyComponent } from './offers-company/offers-company.component';
import { AddOfferCompanyComponent } from './add-offer-company/add-offer-company.component';
import { FavoriteFreelancersComponent } from './favorite-freelancers/favorite-freelancers.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { FormsModule } from '@angular/forms';
import { MessagingModule } from './messaging/messaging.module';
import { InterestedFreelancersComponent } from './interested-freelancers/interested-freelancers.component';
import { ProfilFrCComponent } from './profil-fr-c/profil-fr-c.component';
import { ProfilCFrComponent } from './profil-c-fr/profil-c-fr.component';
import { InterestedOffersComponent } from './interested-offers/interested-offers.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule ,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'freelancerconnect', component: FreelancerConnectComponent },
  { path: 'freelancerprofil', component: FreelancerProfilComponent },
  { path: 'freelancercc', component: FreelancersCcComponent },
  { path: 'companyprofil', component: CompanyProfilComponent },
  { path: 'companyconnect', component: CompanyConnectComponent },
  { path: 'companiesfr', component: CompaniesFrComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'beforesignup', component: BeforeSignupComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signupfreelancer', component: SignUpCompanyComponent },
  { path: 'signupcompany', component: SignUpCompanyComponent },
  { path: 'offerscompany', component: OffersCompanyComponent },
  {path: 'addoffercompany', component: AddOfferCompanyComponent},
  {path: 'favoritefreelancers', component: FavoriteFreelancersComponent},
  {path: 'messagerie', component: MessagerieComponent},
  //{path: 'messaging', component: MessagingComponent},
  {path: 'interestedfreelancers' , component: InterestedFreelancersComponent},
  {path: 'profilfrc' , component:ProfilFrCComponent},
  {path: 'profilcfr' , component:ProfilCFrComponent},
  {path: 'interestedoffers', component:InterestedOffersComponent}

];




@NgModule({
  declarations: [
   AppComponent,
   HomeComponent,
   FreelancerConnectComponent,
   FreelancerProfilComponent,
   OffersComponent,
   CompaniesFrComponent,
   CompanyConnectComponent,
   CompanyProfilComponent,
   FreelancersCcComponent,
   SignInComponent,
   BeforeSignupComponent,
   SignUpCompanyComponent,
   SignUpFreelancerComponent,
   OffersCompanyComponent,
   AddOfferCompanyComponent,
   FavoriteFreelancersComponent,
   MessagerieComponent,
   InterestedFreelancersComponent,
   ProfilFrCComponent,
   ProfilCFrComponent,
   InterestedOffersComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    FormsModule,
    MessagingModule,
    ReactiveFormsModule,
   // RouterModule.forRoot{routes};
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
