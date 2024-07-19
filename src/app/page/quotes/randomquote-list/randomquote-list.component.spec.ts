import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomquoteListComponent } from './randomquote-list.component';

describe('RandomquoteListComponent', () => {
  let component: RandomquoteListComponent;
  let fixture: ComponentFixture<RandomquoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomquoteListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomquoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
