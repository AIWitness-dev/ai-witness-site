import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLabelsComponent } from './search-labels.component';

describe('SearchLabelsComponent', () => {
  let component: SearchLabelsComponent;
  let fixture: ComponentFixture<SearchLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
