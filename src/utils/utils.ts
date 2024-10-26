export function getSessionData(token?: string): { userId: string; sessionId: string } {
  try {
    if (token) {
      const splited = token.split('.');
      if (splited.length === 3) {
        const { userId, sessionId } = JSON.parse(
          Buffer.from(splited[1], 'base64').toString('utf-8')
        );
        return { userId, sessionId };
      }
    }
  } catch (err) {
    console.error(`Error to get session data: ${err}`, getSessionData.name);
  }
  return { userId: '', sessionId: '' };
}
