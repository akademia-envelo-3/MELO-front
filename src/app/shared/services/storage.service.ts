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
    if (storageType[itemKey] !== itemValue && itemValue.length > 0) {
      storageType.setItem(itemKey, itemValue);
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
