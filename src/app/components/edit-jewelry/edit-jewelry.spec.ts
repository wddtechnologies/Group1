import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJewelry } from './edit-jewelry';

describe('EditJewelry', () => {
  let component: EditJewelry;
  let fixture: ComponentFixture<EditJewelry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditJewelry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJewelry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
