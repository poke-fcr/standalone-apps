import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EncryptDecryptService {
  private async prepareKey(key: string): Promise<ArrayBuffer> {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(key);

    // Ensure key is 128, 192, or 256 bits by padding or truncating
    const keyBuffer = new Uint8Array(32); // 256 bits
    keyBuffer.set(keyData.slice(0, Math.min(keyData.length, keyBuffer.length)));

    return keyBuffer.buffer;
  }

  async encryptString(text: string, key: string): Promise<string> {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const preparedKey = await this.prepareKey(key);

      const cryptoKey = await window.crypto.subtle.importKey(
        'raw',
        preparedKey,
        { name: 'AES-GCM' },
        false,
        ['encrypt']
      );

      const iv = Array.from(crypto.getRandomValues(new Uint8Array(12)));

      const encryptedData = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: new Uint8Array(iv) },
        cryptoKey,
        data
      );

      const encryptedArray = Array.from(new Uint8Array(encryptedData));
      return btoa(String.fromCharCode.apply(null, encryptedArray));
    } catch (error) {
      console.error('Encryption error:', error);
      throw error; // Rethrow the error for the calling code to handle
    }
  }

  async decryptString(encryptedText: string, key: string): Promise<string> {
    try {
      const decoder = new TextDecoder();
      const encryptedData = new Uint8Array(atob(encryptedText).split('').map(char => char.charCodeAt(0)));
      const preparedKey = await this.prepareKey(key);
  
      const cryptoKey = await window.crypto.subtle.importKey(
        'raw',
        preparedKey,
        { name: 'AES-GCM' },
        false,
        ['decrypt']
      );
  
      const iv = Array.from(new Uint8Array(encryptedData));
  
      const decryptedData = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: new Uint8Array(iv) },
        cryptoKey,
        encryptedData
      );
  
      // Convert the ArrayBuffer to Base64 string and then decode it
      const decryptedBase64 = btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(decryptedData))));
      const decodedText = atob(decryptedBase64);
  
      return decodedText;
    } catch (error) {
      console.error('Decryption error:', error);
      throw error; // Rethrow the error for the calling code to handle
    }
  }

  
}