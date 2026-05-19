import { env } from '@constants/config';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

function log(level: LogLevel, ...args: unknown[]) {
  if (env.IS_PROD && level === 'debug') return;
  // eslint-disable-next-line no-console
  console[level](...args);
}

export const logger = {
  debug: (...args: unknown[]) => log('debug', ...args),
  info: (...args: unknown[]) => log('info', ...args),
  warn: (...args: unknown[]) => log('warn', ...args),
  error: (...args: unknown[]) => log('error', ...args),
};
