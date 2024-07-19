import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommmentComponent } from './add-commment.component';

describe('AddCommmentComponent', () => {
  let component: AddCommmentComponent;
  let fixture: ComponentFixture<AddCommmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCommmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCommmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
