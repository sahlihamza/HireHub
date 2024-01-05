import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-offer-company',
  templateUrl: './add-offer-company.component.html',
  styleUrls: ['./add-offer-company.component.css']
})
export class AddOfferCompanyComponent implements OnInit {
  offerData: any = {
    id:'',
    titre: '',
    topic: '',
    description: '',
    category: '',
   companyId:1,
    done: '',
  };
  

  categories: string[] = ['Development & IT', 'AI Services', 'Design & Creative', 'Sales & Marketing', 'Writing & Translation', 'Admin & Customer Support', 'Finance & Accounting', 'Engineering & Architecture'];


  offers: any[] = [];

  constructor(private offerService: OfferService,private http: HttpClient,  ) {}

  ngOnInit() {
    // this.loadAllOffers();
  }

  addOffer() {
    console.log('Début de la fonction addOffer');
    console.log('Données de l\'offre à envoyer:', this.offerData);
  
    // Assurez-vous que companyId est défini dans offerData et est un nombre
    if (this.offerData.companyId && !isNaN(this.offerData.companyId)) {
      this.offerService.createOffer(this.offerData, this.offerData.companyId).subscribe(
        (response) => {
          console.log('Offre ajoutée avec succès:', response);
          // Rafraîchissez la liste des offres après l'ajout (décommentez la ligne suivante si nécessaire)
          // this.loadAllOffers();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'offre:', error);
        }
      );
    } else {
      console.error('CompanyId n\'est pas défini ou n\'est pas un nombre.');
    }
  }
  
  

  // addOffer() {
  //   console.log('Début de la fonction addOffer');
  //   console.log('Données de l\'offre à envoyer:', this.offerData);
  //   console.log('CompanyId:', this.offerData.companyId);
  
  //   // Assurez-vous que companyId est défini avant d'appeler createOffer
  //   if (this.offerData.companyId) {
  //     this.offerService.createOffer(this.offerData, this.offerData.companyId).subscribe(
  //       (response) => {
  //         console.log('Offre ajoutée avec succès:', response);
  //         // this.loadAllOffers(); // Rafraîchissez la liste des offres après l'ajout
  //       },
  //       (error) => {
  //         console.error('Erreur lors de l\'ajout de l\'offre:', error);
  //       }
  //     );
  //   } else {
  //     console.error('CompanyId n\'est pas défini.');
  //   }
  // }

  // addOffer(){
  //   console.log(this.offers);
  // }
  

  // loadAllOffers() {
  //   this.offerService.getAllOffers().subscribe(
  //     (offers) => {
  //       this.offers = offers;
  //     },
  //     (error) => {
  //       console.error('Erreur lors du chargement des offres:', error);
  //     }
  //   );
  // }

  // Fonction pour obtenir une offre par ID
  // getOfferById(id: string) {
  //   this.offerService.getOfferById(id).subscribe(
  //     (offer) => {
  //       console.log('Offre récupérée avec succès:', offer);
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la récupération de l\'offre par ID:', error);
  //     }
  //   );
  // }

  // // Fonction pour mettre à jour une offre
  // updateOffer(id: number, updatedData: any) {
  //   this.offerService.updateOffer(id, updatedData).subscribe(
  //     (response) => {
  //       console.log('Offre mise à jour avec succès:', response);
  //       this.loadAllOffers(); // Rafraîchissez la liste des offres après la mise à jour
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la mise à jour de l\'offre:', error);
  //     }
  //   );
  // }

  // // Fonction pour supprimer une offre
  // deleteOffer(id: number) {
  //   this.offerService.deleteOffer(id).subscribe(
  //     (response) => {
  //       console.log('Offre supprimée avec succès:', response);
  //       this.loadAllOffers(); // Rafraîchissez la liste des offres après la suppression
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la suppression de l\'offre:', error);
  //     }
  //   );
  // }

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

  
}


