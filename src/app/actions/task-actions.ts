'use server';

import { revalidatePath } from 'next/cache';

export async function createTaskAction(formData: FormData) {
  const text = formData.get('text') as string;
  if (!text || !text.trim()) {
    return { success: false, error: 'Task text is required' };
  }

  // Simulated server mutation
  revalidatePath('/');
  return { success: true, data: { id: Date.now().toString(), text, completed: false } };
}

export async function toggleTaskAction(taskId: string) {
  revalidatePath('/');
  return { success: true, taskId };
}
