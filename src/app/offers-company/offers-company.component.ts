import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Offer } from '../models/offer';
import { OfferService } from '../services/offer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offers-company',
  templateUrl: './offers-company.component.html',
  styleUrls: ['./offers-company.component.css']
})
export class OffersCompanyComponent {
[x: string]: any;
  @ViewChild('doneContent') doneContent: any;
  @ViewChild('undoneContent') undoneContent: any;

  offers: Offer[] = [];
  

  constructor(
    private http: HttpClient,
    private offerService: OfferService,
    private modalService: NgbModal,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadAllOffers();
  }

  openModal(offer: Offer) {
    console.log('Offre actuelle:', offer);

    if (offer.done === true) {
      this.modalService.open(this.doneContent, { centered: true });
    } else if (offer.done === false) {
      this.modalService.open(this.undoneContent, { centered: true }).result.then(
        (result) => {
          // Si l'utilisateur appuie sur le bouton "Change Status"
          if (result === 'changeStatus') {
            // Appliquer la fonction setOfferDone avec l'ID de l'offre
            this.setOfferDone(offer.id);
          }
        },
        (reason) => {
          console.log(`Modal fermé avec la raison: ${reason}`);
        }
      );
    }
  }

  loadAllOffers() {
    this.offerService.getOffersByCompanyId(1).subscribe(
      (offers) => {
        this.offers = offers;
      },
      (error) => {
        console.error('Erreur lors du chargement des offres:', error);
      }
    );
  }

// ...

setOfferDone(id: number) {
  console.log('Tentative de mise à jour du statut de l\'offre. ID de l\'offre:', id);

  if (id !== undefined) {
    this.offerService.setOfferDone(id).subscribe(
      (response) => {
        console.log('Statut de l\'offre mis à jour avec succès:', response);
        this.loadAllOffers();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du statut de l\'offre:', error);
      }
    );
  } else {
    console.error('L\'ID de l\'offre n\'est pas défini.');
  }
}






  //  // Nouvelle fonction pour définir une offre comme "done"
  //  setOfferDone(id: number) {
  //   this.offerService.setOfferDone(id).subscribe(
  //     (response) => {
  //       console.log('Statut de l\'offre mis à jour avec succès:', response);
  //       this.loadAllOffers(); // Rafraîchissez la liste des offres après la mise à jour du statut
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la mise à jour du statut de l\'offre:', error);
  //     }
  //   );
  // }
  // offerData: any = {
  //   id:'',
  //   titre: '',
  //   topic: '',
  //   description: '',
  //   category: '',
  //  companyId:'',
  //   done: '',
  // };
  // setOfferDone(id: number) {
  //   console.log('ID de l\'offre:', id);
  //   console.log('Objet offre:', this.offerData);
  
  //   if ('id' in this.offerData && this.offerData.id !== undefined) {
  //     this.offerService.setOfferDone(this.offerData.id).subscribe(
  //       (response) => {
  //         console.log('Statut de l\'offre mis à jour avec succès:', response);
  //         this.loadAllOffers();
  //       },
  //       (error) => {
  //         console.error('Erreur lors de la mise à jour du statut de l\'offre:', error);
  //       }
  //     );
  //   } else {
  //     console.error('La propriété id n\'est pas définie dans l\'objet offer.');
  //   }
  // }
  
  
//   setOfferDone(offerId: number) {
//     console.log('ID de l\'offre à mettre à jour :', offerId);

//     this.http.put(`http://localhost:8080/offers/setOffreDone/${offerId}`, {})
//         .subscribe(
//             (response) => {
//                 console.log('Réponse du serveur:', response);
//                 // Autres actions après la mise à jour réussie
//             },
//             (error) => {
//                 console.error('Erreur lors de la mise à jour du statut de l\'offre:', error);
//             }
//         );
// }

// Fonction pour supprimer une offre
  deleteOffer(id: number) {
    this.offerService.deleteOffer(id).subscribe(
      (response) => {
        console.log('Offre supprimée avec succès:', response);
        this.loadAllOffers(); // Rafraîchissez la liste des offres après la suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'offre:', error);
      }
    );
  }

 
}
