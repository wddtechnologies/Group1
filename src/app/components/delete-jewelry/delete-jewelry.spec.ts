import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJewelry } from './delete-jewelry';

describe('DeleteJewelry', () => {
  let component: DeleteJewelry;
  let fixture: ComponentFixture<DeleteJewelry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteJewelry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteJewelry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
