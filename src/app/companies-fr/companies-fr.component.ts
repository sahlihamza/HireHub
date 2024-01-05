import { Component } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-fr',
  templateUrl: './companies-fr.component.html',
  styleUrls: ['./companies-fr.component.css']
})
export class CompaniesFrComponent {
  // companies = [
  //   { commpany_name: 'company x',description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus eos rerum beatae consequuntur provident aperiam ipsa mollitia, adipisci quia. Iusto veritatis incidunt eaque quod cumque ut aliquam facere consequatur.',},
  //   { commpany_name: 'company y', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus eos rerum beatae consequuntur provident aperiam ipsa mollitia, adipisci quia. Iusto veritatis incidunt eaque quod cumque ut aliquam facere consequatur.',},
  //   { commpany_name: 'company z', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et necessitatibus eos rerum beatae consequuntur provident aperiam ipsa mollitia, adipisci quia. Iusto veritatis incidunt eaque quod cumque ut aliquam facere consequatur.',},
  // ];

  companies: Company[] = [];

  constructor(private companyService: CompanyService,private router: Router) {}

  ngOnInit() {
    this.loadAllCompanies();
  }

  loadAllCompanies() {
    this.companyService.getAllCompanies().subscribe(
      (companies) => {
        this.companies = companies;
      },
      (error) => {
        console.error('Erreur lors du chargement des entreprises:', error);
      }
    );
  }
   // Méthode pour rediriger vers la page de profil de l'entreprise
   navigateToCompanyProfile(companyId: number) {
    console.log('ID de la compagnie :', companyId);
    this.router.navigate(['/companyprofil', companyId]);
  }

  // createCompany() {
  //   const newCompany: Company = {
  //     //id: 0,  // L'id sera généré côté serveur lors de la création
  //     name: 'Nouvelle entreprise',
  //     email: 'nouvelle@entreprise.com',
  //     phone: '1234567890',
  //     website: 'https://www.nouvelleentreprise.com',
  //     description: 'Description de la nouvelle entreprise',
  //     password: 'motdepasse',
  //     localisation: ['Adresse 1', 'Adresse 2'],
  //     adresse: 'Adresse de la nouvelle entreprise',
  //     image: 'URL_de_l_image_de_la_nouvelle_entreprise'
  //   };

  //   this.companyService.createCompany(newCompany).subscribe(
  //     (createdCompany) => {
  //       console.log('Nouvelle entreprise créée avec succès:', createdCompany);
  //       this.loadAllCompanies();  // Rafraîchissez la liste des entreprises après la création
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la création de l\'entreprise:', error);
  //     }
  //   );
  // }

  // updateCompany(id: number) {
  //   const updatedCompany: Company = {
  //     // Définir les propriétés mises à jour de l'entreprise
  //   };

  //   this.companyService.updateCompany(id, updatedCompany).subscribe(
  //     (updatedCompany) => {
  //       console.log('Entreprise mise à jour avec succès:', updatedCompany);
  //       this.loadAllCompanies();  // Rafraîchissez la liste des entreprises après la mise à jour
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la mise à jour de l\'entreprise:', error);
  //     }
  //   );
  // }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe(
      () => {
        console.log('Entreprise supprimée avec succès');
        this.loadAllCompanies();  // Rafraîchissez la liste des entreprises après la suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'entreprise:', error);
      }
    );
  }
}
