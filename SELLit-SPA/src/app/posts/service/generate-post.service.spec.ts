import { TestBed } from '@angular/core/testing';

import { GeneratePostService } from './generate-post.service';

describe('GeneratePostService', () => {
  let service: GeneratePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
