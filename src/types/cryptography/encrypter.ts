export interface Encrypter {
  execute: (userId: string, sessionId: string) => { token: string };
}
