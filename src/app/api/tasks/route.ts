import { NextResponse } from 'next/server';

let mockTasks = [
  { id: '1', text: 'Configure FocusOS Design Tokens', completed: true },
  { id: '2', text: 'Build interactive Pomodoro Timer engine', completed: true },
  { id: '3', text: 'Integrate Prisma ORM & PostgreSQL Endpoints', completed: false },
];

export async function GET() {
  return NextResponse.json({ success: true, data: mockTasks });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.text) {
      return NextResponse.json({ success: false, error: 'Task text is required' }, { status: 400 });
    }

    const newTask = {
      id: Date.now().toString(),
      text: body.text,
      completed: false,
    };

    mockTasks.push(newTask);
    return NextResponse.json({ success: true, data: newTask }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
