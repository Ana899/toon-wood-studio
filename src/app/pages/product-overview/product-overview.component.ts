import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageModel } from 'src/app/model/image.model';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductOverviewComponent {
  images: ImageModel[] = [
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
    {
      src: 'assets/images/dear.png',
      description: 'Hertenkop',
      price: 50,
    },
  ];
}
