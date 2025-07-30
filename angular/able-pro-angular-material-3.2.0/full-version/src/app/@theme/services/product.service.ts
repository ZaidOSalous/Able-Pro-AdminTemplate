import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';
import { Products, productResponse } from '../types/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  // Create a signal for product data
  private productSignal = signal<Products[]>([]);

  // Getter for the signal
  get product() {
    return this.productSignal;
  }

  getProduct(): void {
    this.http.get<productResponse>(`${environment.apiUrl}/api/products/list`).subscribe((data) => {
      // Update the signal with new product data
      this.productSignal.set(data.products);
    });
  }
}
