import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJewelry } from './add-jewelry';

describe('AddJewelry', () => {
  let component: AddJewelry;
  let fixture: ComponentFixture<AddJewelry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddJewelry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJewelry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
