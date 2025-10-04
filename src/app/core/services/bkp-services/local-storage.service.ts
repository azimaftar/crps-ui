import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // Save data
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Get data
  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  // Remove data
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all
  clear(): void {
    localStorage.clear();
  }
}
