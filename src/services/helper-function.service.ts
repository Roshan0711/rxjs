import { Injectable } from '@angular/core';
import CryptoES from 'crypto-es';

@Injectable({
  providedIn: 'root',
})
export class HelperFunctionService {
  constructor() {}

  encryption(req: any) {
    const encData = CryptoES.AES.encrypt(
      JSON.stringify(req),
      this.generateRandomkey()
    );
    return {
      encryptedData: encData.toString(),
    };
  }

  generateRandomkey() {
    const randomstring = [
      ['3', '=', 'Y', '*', '/', '_'],
      ['W', '@', 'C', '5', '_'],
      ['k', 'm', 'Y', 'R', '_'],
      ['Q', '6', 'P', '_'],
    ];
    return this.generateKey(randomstring);
  }

  generateKey(datakey: any) {
    const dtkey: any = [];
    datakey.forEach((item: any) => dtkey.push(item.join('')));
    return dtkey.join('').replaceAll('_', '');
  }
}
