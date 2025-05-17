import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = 'http://localhost:8080/budgets';

  constructor(private http: HttpClient) {}

  getAllBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.apiUrl);
  }

  getBudget(id: number): Observable<Budget> {
    return this.http.get<Budget>(`${this.apiUrl}/${id}`);
  }

  addBudget(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(`${this.apiUrl}/add`, budget);
  }

  updateBudget(id: number, budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(`${this.apiUrl}/update/${id}`, budget);
  }

  deleteBudget(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
