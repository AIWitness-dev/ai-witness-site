import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  constructor(public router: Router ) { 
  }

  ngOnInit(): void {
  }

  goToIntro=  () => {
    this.router.navigateByUrl('/intro');
};
  goToApp=  () => {
    this.router.navigateByUrl('/description');
};
  goToAbout=  () => {
    this.router.navigateByUrl('/search-labels');
};
}
