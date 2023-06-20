import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private urlApi = 'https://rickandmortyapi.com/api/character/1,183';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  };




  /*constructor (private httpClient:HttpClient){
}

ngOnInit(): void{
 //this.getProducts();
 //this.getProduct();
//this.createProduct();
 //this.updateProduct();
this.deleteProduct();
}



getProducts(){
  const response = this.httpClient.get('https://api.escuelajs.co/api/v1/products').subscribe(
    response=>{
      console.log(response);

    }
  );
  console.log(response)
};
getProduct(){
  const  url ='https://api.escuelajs.co/api/v1/products/638'
  const response = this.httpClient.get(url).subscribe(
    response=>{
      console.log(response);

    }
  );
  console.log(response);
};
createProduct(){
  const data ={
    id: 98,
    title: "Pantalon",
    price: 52,
    description: "Pantalon / Bryan Latacumba",
    categoryId: 639,
    images: [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffotografiamejorparavendermas.com%2Fla-importancia-de-la-imagen%2F&psig=AOvVaw1NZCYCaUkea-7Z6JLmlo8X&ust=1686797054846000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiUzO3ewf8CFQAAAAAdAAAAABAD"
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
    title:"zapatos",
    price: 12,
    description:"zapatos/Bryan Latacumba"
  }
  const url='https://api.escuelajs.co/api/v1/products/453'
  this.httpClient.put(url, data).subscribe(
    response=>{
      console.log(response);
    }
  )
};
deleteProduct(){
  const url='https://api.escuelajs.co/api/v1/products/320'
  this.httpClient.delete(url).subscribe(
    response=>{
      console.log(response);
    }
  )
  };
}
}

*/
}
