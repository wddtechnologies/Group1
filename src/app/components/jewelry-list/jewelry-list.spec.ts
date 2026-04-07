import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { JewelryListComponent } from './jewelry-list';

describe('JewelryListComponent', () => {
  let component: JewelryListComponent;
  let fixture: ComponentFixture<JewelryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelryListComponent],
      providers: [provideHttpClient(), provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(JewelryListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty items', () => {
    expect(component.items.length).toBe(0);
  });
});
