import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'http://localhost:8081/companies';

  constructor(private http: HttpClient) {}

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.baseUrl}/create`, company);
  }

  getCompanyById(id: number): Observable<Company> { 
    return this.http.get<Company>(`${this.baseUrl}/${id}`);
  }

  updateCompany(id: number, updateCompany: Company): Observable<Company> {
    return this.http.put<Company>(`${this.baseUrl}/update/${id}`, updateCompany);
  }

  deleteCompany(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/all`);
  }

  

  getCompanyNameById(companyId: number): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/getCompanyNameById/${companyId}`);
  }
}
