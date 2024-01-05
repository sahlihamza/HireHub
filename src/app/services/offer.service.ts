// src/app/services/offer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  // private baseUrl = '/api/offers'; // Utilisez le proxy
  private baseUrl = 'http://localhost:8083/offers'; // Utilisez l'URL directe du backend


  constructor(private http: HttpClient) {}

  // createOffer(offerData: any, companyId: number): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/create/${companyId}`, offerData);
  // }
  
  // createOffer(offerData: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/create`, offerData);
  // }
  // createOffer(offerData: any): Observable<Offer> {
  //   console.log('Envoi de la requête pour ajouter une offre :', offerData);
  //   return this.http.post<Offer>(`${this.baseUrl}/create`, offerData);
  // }
  createOffer(offre: Offer, companyId: number): Observable<Offer> {
    return this.http.post<Offer>(`${this.baseUrl}/create/${companyId}`, offre);
  }
  

  getOfferById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/all`);
  } 

  getOffersByCompanyId(companyId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getByCompanyId/${companyId}`);
  }

  updateOffer(id: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, updatedData);
  }

  deleteOffer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
  
  // setOfferDone(id: number): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/setOffreDone/${id}`, {});
  // }
  setOfferDone(id: number): Observable<any> {
    console.log('ID à envoyer:', id);
    return this.http.put(`${this.baseUrl}/setOffreDone/${id}`, {});
}



  
}
