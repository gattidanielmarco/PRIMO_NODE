import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Product } from './Product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: Product[];
  private BASE_URL:string = '/api/products';
    constructor(private http: HttpClient) {}

    ngOnInit(): void {

    }

    faiQualcosa() : void{

      console.log("ciao1");
       this.http.get<Product[]>('https://3000-fc28b48c-ee36-44b3-9b21-684602745fa2.ws-eu0.gitpod.io/api/products').subscribe((data: Product[]) => {
        this.results = data['products'];

      console.log(data);
      });
    }
}
