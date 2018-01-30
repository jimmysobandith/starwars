import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

var tmpPage = 1;
var actuel = `https://swapi.co/api/vehicles/`;
var next = 'https://swapi.co/api/vehicles/?page=';

@Injectable()
export class VehiculeMethod {

  constructor(public http: HttpClient) {
    console.log('PROVIDER : Vehicule');
  }

  /* FONCTION : Actualisation liste */
  listVehicule() {
    return this.http.get(actuel)
      .map((res: any) => res.results);
  }

  /* FONCTION : Page suivante */
  enrSuivante()
  {
    this.http.get(actuel).subscribe((data:any) =>
    {
      if(data.next != null)
      {
        tmpPage = tmpPage + 1;
        var toString = tmpPage.toString();
        actuel = next + toString;
        console.log("actuel : " + actuel);
      }
      else
      {
        console.log("Next = null");
      }
    });
  }

  /* FONCTION : Page précédente */
  enrPrecedente()
  {
    this.http.get(actuel).subscribe((data:any) =>
    {
      if(data.previous != null)
      {
        tmpPage = tmpPage - 1;
        var toString = tmpPage.toString();
        actuel = next + toString;
        console.log("actuel : " + actuel);
      }
      else
      {
        console.log("Next = null");
      }
    });

  }
}
