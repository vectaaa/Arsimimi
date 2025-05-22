import EncryptedStorage from 'react-native-encrypted-storage';

const key = 'sessionID';

export const ENCRYPTED_STORAGE_ERROR_CODES = {
  ITEM_NOT_FOUND: '-25300',
};

export const setSessionID = async (sessionID: string) => {
  try {
    return await EncryptedStorage.setItem(key, sessionID);
  } catch (e) {
    return undefined;
  }
};

export const removeSessionID = async () => {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (error) {}
};

export const getSessionID = async () => {
  try {
    return await EncryptedStorage.getItem(key);
  } catch (e) {
    return undefined;
  }
};
