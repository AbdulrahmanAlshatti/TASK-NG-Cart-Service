import { Component, Input } from '@angular/core';
import { Item } from '../../../data/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  
  @Input() item!:Item;
  
  constructor(private cartService:CartService){}

  RemoveFromCart() {
    this.cartService.removeFromCart(this.item)
  }
  DecreaseQuantity() {
    this.item.quantity--
    
    if(this.item.quantity <= 0)
      this.RemoveFromCart()
  }
  IncreaseQuantity() {
    if(this.item.quantity < this.item.product.stock)
      this.item.quantity++
  }



}
