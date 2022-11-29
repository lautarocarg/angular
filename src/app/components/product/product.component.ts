import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;
  @Output() productClicker: EventEmitter<any> = new EventEmitter();

  constructor(){
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChange){
    console.log('2. ngOnChanges')
    console.log(changes)
  }

  ngOnInit(){
    console.log('3. ngOnInit')
  }

  ngDoCheck(){
    console.log('4. doCheck')
  }

  ngOnDestroy(){
    console.log('5. ngOnDestroy')
  }

  addCart(){
    console.log('Añadir al carrito');

    this.productClicker.emit(this.product.id);
  }

}
