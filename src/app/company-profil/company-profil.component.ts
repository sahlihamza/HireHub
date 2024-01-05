// import { Component, ViewChild, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { CompanyService } from '../services/company.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Company } from '../models/company';
// import { OfferService } from '../services/offer.service';
// import { Offer } from '../models/offer';
// import { HttpErrorResponse } from '@angular/common/http';
// import { FormBuilder, FormGroup } from '@angular/forms';


// @Component({
//   selector: 'app-company-profil',
//   templateUrl: './company-profil.component.html',
//   styleUrls: ['./company-profil.component.css']
// })
// export class CompanyProfilComponent implements OnInit {
//   @ViewChild('content') content: any;
//   company: Company = {} as Company;
//  offers: Offer[] = [];
//  doneOffers: any[] = [];
//  undoneOffers: any[] = [];


//   constructor(
//     private modalService: NgbModal,
//     private companyService: CompanyService,
//     private offerService: OfferService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private fb: FormBuilder
//   ) {}

//   profileForm!: FormGroup;

//   ngOnInit() {
//     this.profileForm = this.fb.group({
//       name: [''],
//       email: [''],
//       phone: [''],
//       description: [''],
//       image:['']
//       // Ajoutez d'autres champs si nécessaire
//     });
  
//     this.route.params.subscribe(params => {
//       const companyId = +params['id'];
//       if (companyId) {
//         this.loadCompanyDetails(companyId);
//       }
//     });
//     this.loadCompanyOffers();
//   }

//   openModal() {
//     this.modalService.open(this.content, { centered: true });
//   }

//   loadCompanyDetails(companyId: number) {
//     // Appeler le service pour charger les détails de l'entreprise
//     this.companyService.getCompanyById(companyId).subscribe(
//       (company) => {
//         this.company = company;
//       },
//       (error) => {
//         console.error(`Erreur lors du chargement des détails de l'entreprise:`, error);
//       }
//     );
//   }

//   loadCompanyOffers() {
//     const companyId = this.route.snapshot.params['id'];
//     this.offerService.getOffersByCompanyId(companyId).subscribe(
//       (offers) => {
//         // Séparer les offres en done et undone
//         this.doneOffers = offers.filter((offer: Offer) => offer.done === true);
//         this.undoneOffers = offers.filter((offer: Offer) => !offer.done);
//       },
//       (error) => {
//         console.error('Erreur lors du chargement des offres:', error);

//         if (error instanceof HttpErrorResponse) {
//           console.error('Status:', error.status);
//           console.error('Status Text:', error.statusText);
//           console.error('Message:', error.error);
//         }
//       }
//     );
//   }


  



  
// }
import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from '../services/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../models/company';
import { OfferService } from '../services/offer.service';
import { Offer } from '../models/offer';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-company-profil',
  templateUrl: './company-profil.component.html',
  styleUrls: ['./company-profil.component.css']
})
export class CompanyProfilComponent implements OnInit {
  @ViewChild('content') content: any;
  company: Company = {} as Company;
  offers: Offer[] = [];
  doneOffers: any[] = [];
  undoneOffers: any[] = [];
  profileForm!: FormGroup;

  constructor(
    private modalService: NgbModal,
    private companyService: CompanyService,
    private offerService: OfferService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      description: [''],
      image: [''],
      website:[''],
      adresse:['']
      // Ajoutez d'autres champs si nécessaire
    });

    this.route.params.subscribe(params => {
      const companyId = +params['id'];
      if (companyId) {
        this.loadCompanyDetails(companyId);
      }
    });
    this.loadCompanyOffers();
  }

  openModal() {
    this.modalService.open(this.content, { centered: true });
  }

  loadCompanyDetails(companyId: number) {
    // Appeler le service pour charger les détails de l'entreprise
    this.companyService.getCompanyById(companyId).subscribe(
      (company) => {
        this.company = company;
        // Mettez à jour les valeurs du formulaire avec les données de l'entreprise
        this.profileForm.patchValue({
          name: company.name,
          email: company.email,
          phone: company.phone,
          description: company.description,
          image: company.image,
          website:company.website,
          adresse:company.adresse
        });
      },
      (error) => {
        console.error(`Erreur lors du chargement des détails de l'entreprise:`, error);
      }
    );
  }

  loadCompanyOffers() {
    const companyId = this.route.snapshot.params['id'];
    this.offerService.getOffersByCompanyId(companyId).subscribe(
      (offers) => {
        // Séparer les offres en done et undone
        this.doneOffers = offers.filter((offer: Offer) => offer.done === true);
        this.undoneOffers = offers.filter((offer: Offer) => !offer.done);
      },
      (error) => {
        console.error('Erreur lors du chargement des offres:', error);

        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Status Text:', error.statusText);
          console.error('Message:', error.error);
        }
      }
    );
  }



  updateProfile() {
    const companyId = this.route.snapshot.params['id'];
    const updatedProfile = this.profileForm.value;
  
    // Appelez le service de mise à jour avec l'ID de l'entreprise et les nouvelles valeurs
    this.companyService.updateCompany(companyId, updatedProfile).subscribe(
      (response) => {
        console.log('Profil mis à jour avec succès:', response);
        // Mettez à jour les détails de l'entreprise après la mise à jour
        this.loadCompanyDetails(companyId);
  
        // Fermez la fenêtre modale après la mise à jour réussie
        this.modalService.dismissAll();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du profil:', error);
      }
    );
  }
  

  resetFileInput() {
    this.profileForm.get('image')?.reset();
  }
}


