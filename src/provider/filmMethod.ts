/* 
  * Provider : Film 
  * Description : Mise en place en prévision d'un éventuel ajout de page par l'API
  * Developpeur : SOBANDITH Jimmy, PINEAU Tristan, PICHARD Thomas, IHEELILE Zineb
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

var tmpPage = 1
var actuel = `https://swapi.co/api/people/`;
var next = 'https://swapi.co/api/people/?page=';

@Injectable()
export class FilmMethod {

  /* CONSTRUCTEUR */
  constructor(public http: HttpClient) {
    console.log('PROVIDER : Film');
  }

  /* FONCTION : Actualisation liste */
  listPeople() {
    return this.http.get(actuel)
      .map((res: any) => res.results);
  }

  /* FONCTION : Page suivente */
  enrSuivente()
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
