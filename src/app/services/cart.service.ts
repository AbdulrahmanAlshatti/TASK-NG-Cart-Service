import { Injectable } from '@angular/core';
import { Item, Product } from '../../data/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private items: Item[] = []
  
  removeFromCart(item: any) {
    this.items = this.items.filter(i=>i.product.id != item.product.id)
  }

  addToCart(product: Product) {
    const item = this.items.find(i => i.product.id === product.id);
    if (item) 
      item.quantity += 1;    
    else 
      this.items.push({ product, quantity: 1})
  }

  getCart(): Item[] {
    return this.items;
  }

  getTotalPrice() {
    return this.items.reduce((sum, item) => {
      return sum + item.quantity * item.product.price;
    }, 0);
  }

  clearCart(){
    this.items = []
  }

}
