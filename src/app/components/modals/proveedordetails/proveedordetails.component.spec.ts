import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedordetailsComponent } from './proveedordetails.component';

describe('ProveedordetailsComponent', () => {
  let component: ProveedordetailsComponent;
  let fixture: ComponentFixture<ProveedordetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedordetailsComponent]
    });
    fixture = TestBed.createComponent(ProveedordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
