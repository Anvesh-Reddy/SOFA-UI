import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private userId;
  constructor() { }

  updateCreds(creds: string) {
    this.userId = creds;
  }

  getCreds() {
    return this.userId;
  }
}
