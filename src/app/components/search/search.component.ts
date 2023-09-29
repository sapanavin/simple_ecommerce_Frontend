import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //url:string="http://localhost:8080/api/products"
  constructor(private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
   // console.log("SearchComponent  ngOnInit() ");
  }

  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }
  /*

  return this.httpClient.post(this.url +
      "/category/add", data,{
        headers: new HttpHeaders().set('Content-Type',"application/json"),
        responseType: 'text'//I added this to solve json parse error
      })
  */
}
