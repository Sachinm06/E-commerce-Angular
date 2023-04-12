import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {


  productData: any
  constructor(private ps: ProductService) { }
  ngOnInit(): void {
    this.ps.viewAllProduct().subscribe((data: any) => {
      console.log(data);
      this.productData = data

    })
  }


}
