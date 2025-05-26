import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { images } from 'src/app/data/images';
import { ImageModel } from 'src/app/model/image.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductDetailComponent implements OnInit {
  public images = images;
  image = signal<ImageModel | undefined>(undefined);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const imageId = this.route.snapshot.paramMap.get('id');
    if (imageId != null && +imageId > 0) {
      const image = this.images.find((x) => x.id === +imageId);
      this.image.set(image);
    }
  }
}
