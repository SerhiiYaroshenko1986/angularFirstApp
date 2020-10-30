import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-cv-main',
  templateUrl: './cv-main.component.html',
  styleUrls: ['./cv-main.component.scss'],
})
export class CvMainComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService) {}
  getCategories(): void {
    this.categoryService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
  ngOnInit(): void {
    this.getCategories();
  }
  selectedCategory: Category;
  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
}
