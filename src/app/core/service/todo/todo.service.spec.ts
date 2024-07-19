import { TestBed } from '@angular/core/testing';

import { TODoService } from './todo.service';

describe('TODoService', () => {
  let service: TODoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TODoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
