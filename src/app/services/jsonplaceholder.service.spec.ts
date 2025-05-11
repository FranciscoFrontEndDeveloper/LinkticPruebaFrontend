import { TestBed } from '@angular/core/testing';
import {
  provideHttpClientTesting,
  HttpTestingController,
   
} from '@angular/common/http/testing';
import { JsonplaceholderService } from './jsonplaceholder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('JsonplaceholderService', () => {
  let service: JsonplaceholderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [JsonplaceholderService, provideHttpClientTesting(),],
    });
    service = TestBed.inject(JsonplaceholderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('En teoria devuelme datos simulados', () => {
    const dataFake = [
      { id: 1, title: 'api info test 1' },
      { id: 2, title: 'api info test 2' },
    ];
    const url = 'https://jsonplaceholder.typicode.com/posts';
    service.getApiData(url).subscribe((data) => {
      expect(data).toEqual(dataFake);
    });

    const requestApi = httpMock.expectOne(url);
    expect(requestApi.request.method).toBe('GET');
    requestApi.flush(dataFake)
    expect(service).toBeTruthy();
  });
});
