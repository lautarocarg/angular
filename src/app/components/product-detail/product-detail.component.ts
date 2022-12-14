import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'
import { ProductsService } from '../../services/products.service'
import { Product } from '../../product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productSService: ProductsService){}

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) =>{
        const id = params['id'];
        this.product = this.productSService.getProductById(id);
      });
  }
}
