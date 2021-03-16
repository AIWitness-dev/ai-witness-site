import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-search-labels',
  templateUrl: './search-labels.component.html',
  styleUrls: ['./search-labels.component.css']
})
export class SearchLabelsComponent implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit(): void {
  }

  btnClick=  () => {
    this.router.navigateByUrl('/description');
  };

  btnSubmit=  () => {
    this.router.navigateByUrl('/res-images');
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
