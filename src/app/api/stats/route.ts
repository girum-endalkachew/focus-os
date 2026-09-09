import { NextResponse } from 'next/server';

export async function GET() {
  const stats = {
    todayDeepWorkMinutes: 277,
    todayTargetMinutes: 360,
    completedSessions: 6,
    currentStreakDays: 5,
    totalXp: 1240,
    userLevel: 'Level 4 - Focused Scholar',
  };

  return NextResponse.json({ success: true, data: stats });
}
