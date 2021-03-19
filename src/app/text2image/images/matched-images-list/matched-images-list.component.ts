import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ResImageService} from '../res-image.service';
import {Location} from '@angular/common';
import { map } from 'rxjs/operators'; 
import { MongoSearchService} from '../../search-labels/mongo-search.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-matched-images-list',
  templateUrl: './matched-images-list.component.html',
  styleUrls: ['./matched-images-list.component.css']
})
export class MatchedImagesListComponent implements OnInit {

  downloadURL: any;
  image_list:any;
  res_id!:string;
  reader = new FileReader();
       
  state$: Observable<object> | undefined;
  isImageLoading!: boolean;
  imageService: any;
  url!:any;
  imageToShow: any;

  url_ ='http://localhost:5000/files/';

  constructor(
    public router: Router,
    private resImageService: ResImageService,
    public activatedRoute: ActivatedRoute,
    private location: Location,
    private mongo:MongoSearchService,
    private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.image_list = this.location.getState();
    console.log(this.image_list);
    this.mongo.labelSearch(this.image_list).subscribe(
      result => {
        this.res_id = JSON.parse(JSON.stringify(result)).posts;
        console.log(this.res_id);
      }
    );
  };

  createImageFromBlob(image: Blob){
    let reader = new FileReader();
    reader.addEventListener("load", 
      () => {
        let objectURL = URL.createObjectURL(image);
        this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }, 
        false);
 
    if (image) {
       reader.readAsDataURL(image);
      }
    };

  getImageFromService() {
    this.isImageLoading = true;
    this.resImageService.solveImage(this.res_id).subscribe(
      (data: Blob) => {
        console.log(data);
        this.createImageFromBlob(data);
        this.isImageLoading = false;
    }, (error: any) => {
      console.log('!!!!!!!');
      this.isImageLoading = false;
      console.log(error);
    });
  };  
  
  goToIntro=  () => {
    //this.getImageFromService();
    this.router.navigateByUrl('/intro');
  };
  goToApp=  () => {
    this.router.navigateByUrl('/description');
  };
  goToAbout=  () => {
    this.router.navigateByUrl('/about');
  };

  btnClick=  () => {
    this.getImageFromService();
  };


}
