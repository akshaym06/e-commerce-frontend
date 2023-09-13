import { Component } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent {

  productDetails: Product[] = []

  displayedColumns: string[] = ['Id', 'Product Name', 'Product Description', 'Product Discounted Price', 'Product Actual Price', 'Edit', 'Delete'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (response: Product[]) => {
        this.productDetails = response
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

  public deleteProduct(productId) {
    this.productService.deleteProduct(productId).subscribe({
      next: (response) => {
        this.getAllProducts();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }
}
