function decryptLoveMessage(loveMessage: string) {
  const decryptedLoveMessage = loveMessage
    .toLowerCase()
    .replaceAll('z', 'zz')
    .replaceAll('zzzz', 'z')
    .replaceAll('zz', '')
    .replaceAll('1', 'u')
    .replaceAll('2', 'o')
    .replaceAll('3', 'i')
    .replaceAll('4', 'e')
    .replaceAll('5', 'a');
  return decryptedLoveMessage;
}

function encryptLoveMessage(loveMessage: string) {
  const encryptedLoveMessage = loveMessage
    .toLowerCase()
    .replaceAll('a', '5')
    .replaceAll('e', '4')
    .replaceAll('i', '3')
    .replaceAll('o', '2')
    .replaceAll('u', '1')
    .replace(/[bcdfghjklmnpqrstvwxyz]/gi, "$&z");
  return encryptedLoveMessage;
}

export const loveMessage = {
  encrypt: encryptLoveMessage,
  decrypt: decryptLoveMessage,
}
