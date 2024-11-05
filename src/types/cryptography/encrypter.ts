export interface Encrypter {
  execute: (userId: string, sessionId: string) => string;
}
