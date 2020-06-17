import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private userId;
  constructor() { }

  updateCreds(creds) {
    this.userId = creds;
  }

  getCreds() {
    return this.userId;
  }
}
