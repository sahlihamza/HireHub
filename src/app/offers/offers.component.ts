import { Component, OnInit } from '@angular/core';
import { Offer } from '../models/offer';
import { OfferService } from '../services/offer.service';
import { CompanyService } from '../services/company.service';  // Importation du service CompanyService
import { Company } from '../models/company';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers: Offer[] = [];
  companies: Company[] = [];

  constructor(
    private offerService: OfferService,
    private companyService: CompanyService  // Injection du service CompanyService
  ) {}

  ngOnInit() {
    this.loadAllOffers();
  }

  categories: string[] = ['Development & IT', 'AI Services', 'Design & Creative', 'Sales & Marketing', 'Writing & Translation', 'Admin & Customer Support', 'Finance & Accounting', 'Engineering & Architecture'];

  loadAllOffers() {
    this.offerService.getAllOffers().subscribe(
      (offers) => {
        this.offers = offers;
      },
      (error) => {
        console.error('Erreur lors du chargement des offres:', error);
      }
    );
  }

  companyName: string = ''; // Déclarer la propriété pour stocker le nom de l'entreprise

  getCompanyName(companyId: number) {
    this.companyService.getCompanyNameById(companyId).subscribe(
      (companyName) => {
        console.log(`Le nom de l'entreprise avec l'ID ${companyId} est ${companyName}`);
      },
      (error) => {
        console.error(`Erreur lors de la récupération du nom de l'entreprise avec l'ID ${companyId}:`, error);
  
        // Ajoute cette étape de débogage
        if (error instanceof HttpErrorResponse) {
          console.log('HTTP Response:', error.status, error.statusText, error.url, error.error);
        }
      }
    );
  }
  


//   loadAllOffers() {
//     this.offerService.getAllOffers().subscribe(
//       (offers) => {
//         this.offers = offers;
//         // Après le chargement des offres, vous pouvez itérer sur chaque offre et obtenir le nom de l'entreprise directement
//         this.offers.forEach(offer => {
//           this.companyService.getCompanyNameById(offer.companyId).subscribe(
//             (companyName) => {
//               console.log(`Le nom de l'entreprise avec l'ID ${offer.companyId} est ${companyName}`);
//               // Vous pouvez faire quelque chose avec le nom de l'entreprise ici
//             },
//             (error) => {
//               console.error(`Erreur lors de la récupération du nom de l'entreprise avec l'ID ${offer.companyId}:`, error);
//             }
//           );
//         });
//       },
//       (error) => {
//         console.error('Erreur lors du chargement des offres:', error);
//       }
//     );
//   }
 }



