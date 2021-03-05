import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedImagesListComponent } from './matched-images-list.component';

describe('MatchedImagesListComponent', () => {
  let component: MatchedImagesListComponent;
  let fixture: ComponentFixture<MatchedImagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchedImagesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedImagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
