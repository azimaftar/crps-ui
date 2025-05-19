export class LocalStorageUtil {
  /**
   * Save data to localStorage
   * @param key Storage key
   * @param value Data to store (object, array, string, number, etc.)
   */
  static setItem<T>(key: string, value: T): void {
    if (value !== undefined && value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   * Retrieve data from localStorage
   * @param key Storage key
   * @returns Parsed data as the correct type or null if not found
   */
  static getItem<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    console.log("data:", data);
    return data ? JSON.parse(data) as T : null;
  }

  /**
   * Remove a specific item from localStorage
   * @param key Storage key
   */
  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clear all localStorage data
   */
  static clear(): void {
    localStorage.clear();
  }
}
