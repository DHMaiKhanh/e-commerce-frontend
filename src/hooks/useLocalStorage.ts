import { useCallback, useEffect, useState } from 'react';

import { storage } from '@utils/storage';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => storage.get<T>(key) ?? initialValue);

  useEffect(() => {
    storage.set(key, value);
  }, [key, value]);

  const remove = useCallback(() => {
    storage.remove(key);
    setValue(initialValue);
  }, [key, initialValue]);

  return [value, setValue, remove] as const;
}
