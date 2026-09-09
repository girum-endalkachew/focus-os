import { NextResponse } from 'next/server';

let mockSessions = [
  { id: '1', durationMin: 25, mode: 'pomodoro', completed: true, xpEarned: 50, createdAt: new Date().toISOString() },
  { id: '2', durationMin: 25, mode: 'pomodoro', completed: true, xpEarned: 50, createdAt: new Date().toISOString() },
  { id: '3', durationMin: 5, mode: 'shortBreak', completed: true, xpEarned: 10, createdAt: new Date().toISOString() },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockSessions,
    totalSessions: mockSessions.length,
    totalXp: mockSessions.reduce((acc, curr) => acc + curr.xpEarned, 0),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newSession = {
      id: Date.now().toString(),
      durationMin: body.durationMin || 25,
      mode: body.mode || 'pomodoro',
      completed: body.completed ?? true,
      xpEarned: body.mode === 'pomodoro' ? 50 : 10,
      createdAt: new Date().toISOString(),
    };

    mockSessions.unshift(newSession);
    return NextResponse.json({ success: true, data: newSession }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
  }
}
