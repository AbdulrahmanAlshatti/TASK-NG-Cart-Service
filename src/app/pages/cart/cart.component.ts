import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { Item } from '../../../data/products';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {



  items:Item[] = []

  getItems(){
    return this.cartService.getCart()
  }

  constructor(private cartService: CartService){    
    console.log(cartService.getCart())
    this.items = cartService.getCart()
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice()
  }

  clearCart() {
    this.cartService.clearCart()
  }

}


