'use server';

import { revalidatePath } from 'next/cache';

export async function logFocusSessionAction(durationMin: number, mode: string) {
  const xp = mode === 'pomodoro' ? 50 : 10;

  revalidatePath('/');
  return {
    success: true,
    data: {
      id: Date.now().toString(),
      durationMin,
      mode,
      xpEarned: xp,
      createdAt: new Date().toISOString(),
    },
  };
}
