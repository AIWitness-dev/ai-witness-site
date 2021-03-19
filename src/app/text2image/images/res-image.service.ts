import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class ResImageService {
  image_list: any;
  imageToShow: any;

  constructor(
    private http: HttpClient,
    private firebase: AngularFireDatabase) { }

  public generateImage(queryTextMessage: string) {
    // change url here
    //'http://bc98ad3b11fb.ngrok.io/predict?descriptions=a male in his 20s , black hair and eyebrows . '
    console.log('res image service triggered'); 
    console.log(queryTextMessage)
    const url_ = 'http://8588f705c242.ngrok.io/predict?';
    const httpParams = new HttpParams().set('descriptions', queryTextMessage)
    const URL = url_ + httpParams.toString();
    console.log(URL)

    return this.http.post(URL.toString(), { title: 'Generate Images' })
      .subscribe(
        result => {
          console.log(result);
        },
        error => {
          //console.log('There was an error')
          console.log(error)
        }
      );
  };

  public getImage() {
    // change url here
    console.log('download image service triggered'); 
    const url_ = 'http://8588f705c242.ngrok.io/downlaod?';

    return this.http.get(url_)
  };

  public solveImage(queryTextMessage: string): Observable<Blob> {
    console.log('res image service triggered'); 
    console.log(queryTextMessage)
    const url_ = 'http://localhost:5000/files/';
    var URL = url_ + queryTextMessage
    console.log(URL)
    return this.http.get(URL, {responseType: 'blob'});
  };

}