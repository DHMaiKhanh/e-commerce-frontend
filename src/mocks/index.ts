import { env } from '@constants/config';

export async function enableMocking(): Promise<void> {
  if (!env.ENABLE_MOCK_API) return;
  const { worker } = await import('./browser');
  await worker.start({ onUnhandledRequest: 'bypass' });
}
