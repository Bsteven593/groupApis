import { VehiculoService } from './../service/vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
/*  data: any [] = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void{
    this.llenardata()
  }
  llenardata(){
    this.vehiculoService.getData().subscribe(data =>
      {this.data = data;
        console.log(this.data);
      })

  }*/

constructor (private httpClient:HttpClient){
}

ngOnInit(): void{
//this.getProducts();
//this.getProduct();
//this.createProduct();
 //this.updateProduct();
this.deleteProduct();
}



getProducts(){
  const response = this.httpClient.get('https://api.escuelajs.co/api/v1/products/').subscribe(
    response=>{
      console.log(response);

    }
  );
  console.log(response)
};
getProduct(){
  const  url ='https://api.escuelajs.co/api/v1/products/8'
  const response = this.httpClient.get(url).subscribe(
    response=>{
      console.log(response);

    }
  );
  console.log(response);
};
createProduct(){
  const data ={
    id: 5 ,
    title: "Kia",
    price: 4564,
    description: "Bryan Lenin",
    categoryId: 1,
    images: [
    "https://picsum.photos/640/640?r=4213",
    "https://picsum.photos/640/640?r=7623",
    "https://picsum.photos/640/640?r=9048"
    ]

  }
  const url = 'https://api.escuelajs.co/api/v1/products'
  this.httpClient.post(url, data).subscribe(
    response=>{
      console.log(response);
    }
  )
};
updateProduct(){
  const data = {
    title:"camaro",
    price: 12,
    description:"/Bryan  y lennin"
  }
  const url='https://api.escuelajs.co/api/v1/products/3'
  this.httpClient.put(url, data).subscribe(
    response=>{
      console.log(response);
    }
  )
};
deleteProduct(){
  const url='https://api.escuelajs.co/api/v1/products/5'
  this.httpClient.delete(url).subscribe(
    response=>{
      console.log(response);
    }
  )
  };
}



