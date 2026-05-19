import { logger } from './logger';

type StorageType = 'local' | 'session';

const getStore = (type: StorageType): Storage =>
  type === 'local' ? window.localStorage : window.sessionStorage;

export const storage = {
  get<T>(key: string, type: StorageType = 'local'): T | null {
    try {
      const raw = getStore(type).getItem(key);
      if (raw === null) return null;
      return JSON.parse(raw) as T;
    } catch (error) {
      logger.error('[storage.get]', key, error);
      return null;
    }
  },

  set<T>(key: string, value: T, type: StorageType = 'local'): void {
    try {
      getStore(type).setItem(key, JSON.stringify(value));
    } catch (error) {
      logger.error('[storage.set]', key, error);
    }
  },

  remove(key: string, type: StorageType = 'local'): void {
    getStore(type).removeItem(key);
  },

  clear(type: StorageType = 'local'): void {
    getStore(type).clear();
  },
};
