import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ExchangeService {

  private baseUrl = "http://api.fixer.io/latest";

  constructor(private httpClient: HttpClient) { }

  getExchanges (params: Array<string>): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}?${params.join('&')}`)
  }

}
