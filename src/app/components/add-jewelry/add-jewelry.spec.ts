import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AddJewelryComponent } from './add-jewelry';

describe('AddJewelryComponent', () => {
  let component: AddJewelryComponent;
  let fixture: ComponentFixture<AddJewelryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddJewelryComponent],
      providers: [provideHttpClient(), provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AddJewelryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default item values', () => {
    expect(component.item.name).toBe('');
    expect(component.item.category).toBe('Ring');
    expect(component.item.price).toBe(0);
  });
});
