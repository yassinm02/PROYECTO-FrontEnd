import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsindexComponent } from './productsindex.component';

describe('ProductsindexComponent', () => {
  let component: ProductsindexComponent;
  let fixture: ComponentFixture<ProductsindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
