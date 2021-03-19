import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class MongoSearchService {

  constructor(
    private http: HttpClient
    ) {
     }


  labelSearch(queryText: any) { 
    console.log('mongo service attibution search triggered'); 
    console.log(queryText); 
    //return this.http.get(`${baseUrl}?files=${queryText}`);
    return this.http.get(
      'http://localhost:5000/files', 
      { 
        params: { 
          "hair": queryText.hair,
          "straightHair":queryText.straightHair,
          "bigLips":queryText.bigLips ,
          "bigNose":queryText.bigNose,
          "doubleChin":queryText.doubleChin,
          "eyeGlasses":queryText.eyeGlasses,
          "male":queryText.male,
          "beard":queryText.beard,
          "paleSkin":queryText.paleSkin,
          "recedingHairline":queryText.recedingHairline,
          "age":queryText.age,
        }} 
      )
  }

  imageSearch(queryText: any){ 
    console.log('mongo service image search triggered'); 
    console.log(queryText); 
    //return this.http.get(`${baseUrl}?files=${queryText}`);
    return this.http.get(
      'http://localhost:5000/files/:filename', 
      { 
        params: { 
          "hair": queryText.hair,
          "straightHair":queryText.straightHair,
          "bigLips":queryText.bigLips ,
          "bigNose":queryText.bigNose,
          "doubleChin":queryText.doubleChin,
          "eyeGlasses":queryText.eyeGlasses,
          "male":queryText.male,
          "beard":queryText.beard,
          "paleSkin":queryText.paleSkin,
          "recedingHairline":queryText.recedingHairline,
          "age":queryText.age,
        }} 
      )
  }

}
