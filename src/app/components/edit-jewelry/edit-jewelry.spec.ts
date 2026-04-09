import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { EditJewelryComponent } from './edit-jewelry';

describe('EditJewelryComponent', () => {
  let component: EditJewelryComponent;
  let fixture: ComponentFixture<EditJewelryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditJewelryComponent],
      providers: [provideHttpClient(), provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(EditJewelryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start in loading state', () => {
    expect(component.isLoading).toBe(false);
  });
});
