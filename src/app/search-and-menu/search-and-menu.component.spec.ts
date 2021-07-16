import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndMenuComponent } from './search-and-menu.component';

describe('SearchAndMenuComponent', () => {
  let component: SearchAndMenuComponent;
  let fixture: ComponentFixture<SearchAndMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
