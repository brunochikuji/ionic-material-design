import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class FirestoreService {

  constructor(
    public http: HttpClient
  ) {}
  

}
