import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css']
})
export class DescriptionsComponent implements OnInit {
  constructor(public router: Router ) { 
  }

  ngOnInit(): void {
  }

  keysPressed: string[] = [];

  onKeyUp(event: { key: string; }) {
    this.keysPressed.push(event.key);
  }

  btnClick=  () => {
    this.router.navigateByUrl('/search-labels');
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
