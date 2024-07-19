import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomtodoListComponent } from './randomtodo-list.component';

describe('RandomtodoListComponent', () => {
  let component: RandomtodoListComponent;
  let fixture: ComponentFixture<RandomtodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomtodoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomtodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
