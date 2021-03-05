import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResImageComponent } from './res-image.component';

describe('ResImageComponent', () => {
  let component: ResImageComponent;
  let fixture: ComponentFixture<ResImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
