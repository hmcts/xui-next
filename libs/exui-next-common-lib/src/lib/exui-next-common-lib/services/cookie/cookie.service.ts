import { DOCUMENT } from '@angular/common';
import {inject,  Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private readonly document: Document;

  constructor() {
    this.document = inject(DOCUMENT)
  }

  public setCookie(key: string, value: string, expiryDate?: string): void {
    const expiry = expiryDate ? ` expires=${expiryDate}` : '';
    const cookie = `${key}=${value};${expiry}`;
    this.document.cookie = cookie;
  }

  public getCookie(key: string): string {
    // @ts-ignore
    const cookieValue = this.document.cookie
      .split('; ')
      .find(row => row.startsWith(`${key}=`))
      .split('=')[1];
    return cookieValue;
  }

  public deleteCookie(key: string, path?: string, domain?: string): void {
    const pathValue = path ? `; path=${path}` : '';
    const domainValue = domain ? `; domain=${domain}` : '';
    this.document.cookie = `${key}=${pathValue}${domainValue}; expires=Thu, 01 Jan 1970 00:00:01 GMT; max-age=0`;
  }

  public deleteCookieByPartialMatch(key: string, path?: string, domain?: string): void {
    this.document.cookie
      .split('; ')
      .filter(row => row.startsWith(`${key}`))
      .forEach(element => {
        this.deleteCookie(element.split('=')[0], path, domain);
      });
  }

  public checkCookie(key: string): boolean {
    return this.document.cookie.split('; ').some(item => item.trim().startsWith(`${key}=`));
  }
}
