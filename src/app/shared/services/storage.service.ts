import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setToStorage(
    itemKey: string,
    itemValue: string,
    storageType: Storage = sessionStorage
  ) {
    if (storageType[itemKey] !== itemValue) {
      if (itemValue !== '') {
        storageType.setItem(itemKey, itemValue);
      } else {
        storageType.removeItem(itemKey);
      }
    }
  }

  getValueFromStorage(itemKey: string, storageType: Storage = sessionStorage) {
    if (storageType[itemKey]) {
      return storageType.getItem(itemKey);
    } else {
      return;
    }
  }

  removeFromStorage(itemName: string, storageType: Storage = sessionStorage) {
    storageType.removeItem(itemName);
  }
}
