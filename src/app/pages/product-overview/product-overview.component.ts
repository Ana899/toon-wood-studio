import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { images } from 'src/app/data/images';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ProductOverviewComponent {
  public images = images;

  pageSize = 9;
  currentPage = 0;

  get paginatedImages() {
    const start = this.currentPage * this.pageSize;
    return this.images.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.images.length / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  goToPage(index: number) {
    this.currentPage = index;
  }
}
