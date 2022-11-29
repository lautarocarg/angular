import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  title = 'formulario-pagos';

  items = ['lautaro', 'julian', 'nicolas'];



  addItem(){
    this.items.push('nuevo item');
  };

  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
