import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FeatureSearchService } from './feature-search.service';
import { MongoSearchService} from './mongo-search.service';
import {ResImageService}  from '../images/res-image.service'

@Component({
  selector: 'app-search-labels',
  templateUrl: './search-labels.component.html',
  styleUrls: ['./search-labels.component.css']
})
export class SearchLabelsComponent implements OnInit {
  public hair_options: string[]=[
   'black',
   'blond',
   'bald',
   'grey',
   'brown'
  ]
  public default = 'null';

  public selectedFields:string[]= [];
  image_list:any;
  object:any;

  @Output() valueChange = new EventEmitter();

  constructor(
    public router: Router,
    private queryGen: FeatureSearchService ,
    private mongo:MongoSearchService,
    private imageService: ResImageService) { }

  ngOnInit(): void {
  }

  btnClick=  () => {
    this.router.navigateByUrl('/description');
  };

  selectChange(value: string) {
    //In my case $event come with a id value
    this.selectedFields.push(value);
  }

  btnSubmit=  () => {
    this.object = this.queryGen.queryGenerator(this.selectedFields);
    this.router.navigateByUrl('/matched-images', { state: this.object});
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
