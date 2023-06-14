import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityEditComponent } from './city-edit.component';

describe('CityEditComponent', () => {
  let component: CityEditComponent;
  let fixture: ComponentFixture<CityEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityEditComponent]
    });
    fixture = TestBed.createComponent(CityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
