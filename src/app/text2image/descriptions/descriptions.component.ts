import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { ResImageService} from '../images/res-image.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css']
})
export class DescriptionsComponent implements OnInit {

  downloadURL: any;
  constructor(
    public router: Router,
    public getResImage: ResImageService,
    private afStorage: AngularFireStorage
    ) { 
  }

  ngOnInit(): void {
  }

  onEnter(value:string) {
    this.getResImage.generateImage(value)
  }

  btnClick=  () => {
    this.router.navigateByUrl('/search-labels');
  };

  getClick=  () => {
    this.downloadURL = this.afStorage.ref('/output.png').getDownloadURL();
  };

  goToIntro=  () => {
    this.router.navigateByUrl('/intro');
  };
  goToApp=  () => {
  this.router.navigateByUrl('/description');
};
  goToAbout=  () => {
  this.router.navigateByUrl('/about');
};
  

}
