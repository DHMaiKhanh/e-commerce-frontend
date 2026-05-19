export type Nullable<T> = T | null;
export type Maybe<T> = T | null | undefined;
export type ValueOf<T> = T[keyof T];

export type WithId<T> = T & { id: string };
export type WithTimestamps<T> = T & { createdAt: string; updatedAt: string };
