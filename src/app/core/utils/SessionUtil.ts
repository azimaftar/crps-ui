export class SessionUtil {
  /**
   * Save data to sessionStorage
   * @param key Storage key
   * @param value Data to store (object, array, string, number, etc.)
   */
  static setItem<T>(key: string, value: T): void {
    if (value !== undefined && value !== null) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   * Retrieve data from sessionStorage
   * @param key Storage key
   * @returns Parsed data as the correct type or null if not found
   */
  static getItem<T>(key: string): T | null {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) as T : null;
  }

  /**
   * Retrieve data from sessionStorage and then remove it
   * @param key Storage key
   * @returns Parsed data as the correct type or null if not found
   */
  static getItemOnce<T>(key: string): T | null {
    const data = sessionStorage.getItem(key);
    sessionStorage.removeItem(key);
    return data ? JSON.parse(data) as T : null;
  }

  /**
   * Remove a specific item from sessionStorage
   * @param key Storage key
   */
  static removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  /**
   * Clear all sessionStorage data
   */
  static clear(): void {
    sessionStorage.clear();
  }
}
