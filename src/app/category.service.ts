import { Injectable } from '@angular/core';
import { Category } from './category';
import { Categories } from './mock-categories';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}
  getCategories(): Observable<Category[]> {
    return of(Categories);
  }
  getCategory(id: number): Observable<Category> {
    return of(Categories.find((category) => category.id === id));
  }
}
