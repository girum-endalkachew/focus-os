import { NextResponse } from 'next/server';

export async function GET() {
  const recommendations = [
    "Your focus score is top 5% this week! Maintain your 25-minute Pomodoro rhythm.",
    "Schedule your hardest task for tomorrow morning at 10 AM during your peak alertness window.",
    "You have completed 6 focus sessions today. Great effort—remember to stay hydrated!",
  ];

  const randomAdvice = recommendations[Math.floor(Math.random() * recommendations.length)];

  return NextResponse.json({
    success: true,
    data: {
      advice: randomAdvice,
      generatedAt: new Date().toISOString(),
    },
  });
}
