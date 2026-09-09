'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, Circle, Plus, FolderKanban, Clock, Filter, Trash2 } from 'lucide-react';

interface TaskItem {
  id: string;
  title: string;
  project: string;
  priority: 'high' | 'medium' | 'low';
  estMinutes: number;
  actualMinutes: number;
  completed: boolean;
  dueDate: string;
}

export default function TasksPage() {
  const [filter, setFilter] = useState<'today' | 'upcoming' | 'completed'>('today');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', title: 'Implement FocusOS custom PostgreSQL auth routes', project: 'FocusOS App', priority: 'high', estMinutes: 50, actualMinutes: 45, completed: false, dueDate: 'Today' },
    { id: '2', title: 'Refactor Tailwind v4 glassmorphic theme tokens', project: 'Design System', priority: 'medium', estMinutes: 25, actualMinutes: 25, completed: true, dueDate: 'Today' },
    { id: '3', title: 'Write AI Productivity Coach inference prompt', project: 'AI Insights', priority: 'high', estMinutes: 30, actualMinutes: 0, completed: false, dueDate: 'Upcoming' },
  ]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        title: newTaskTitle,
        project: 'FocusOS App',
        priority: 'medium',
        estMinutes: 25,
        actualMinutes: 0,
        completed: false,
        dueDate: 'Today',
      }
    ]);
    setNewTaskTitle('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'completed') return t.completed;
    if (filter === 'today') return !t.completed && t.dueDate === 'Today';
    return !t.completed && t.dueDate === 'Upcoming';
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#F4F7F3]">Tasks & Session Queue</h1>
          <p className="text-sm text-[#A5B0AB] mt-1">Manage single-focus tasks connected to project hours</p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-[#0B1510] rounded-xl border border-white/5 text-xs">
          {(['today', 'upcoming', 'completed'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 font-semibold rounded-lg capitalize transition-all cursor-pointer ${
                filter === tab ? 'bg-[#102019] text-[#B8FF3D] border border-white/10' : 'text-[#A5B0AB] hover:text-[#F4F7F3]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Add Task Input */}
      <form onSubmit={addTask} className="flex gap-3">
        <Input
          placeholder="Add task title (e.g. Build PostgreSQL Prisma relations)..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <Button type="submit" variant="primary" size="md">
          <Plus className="h-4 w-4 mr-1" /> Add Task
        </Button>
      </form>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <GlassCard className="p-8 text-center text-xs text-[#A5B0AB] space-y-2">
            <p>No tasks found in this view.</p>
            <p className="text-[#65726A]">Create a task above to queue your next focus session.</p>
          </GlassCard>
        ) : (
          filteredTasks.map((task) => (
            <GlassCard key={task.id} className="flex items-center justify-between p-4 group">
              <div className="flex items-center gap-3.5 flex-1">
                <button onClick={() => toggleTask(task.id)} className="cursor-pointer">
                  {task.completed ? <CheckCircle2 className="h-5 w-5 text-[#7CFF68]" /> : <Circle className="h-5 w-5 text-[#65726A]" />}
                </button>

                <div className="space-y-1">
                  <span className={`text-sm font-semibold ${task.completed ? 'line-through text-[#65726A]' : 'text-[#F4F7F3]'}`}>
                    {task.title}
                  </span>
                  <div className="flex items-center gap-3 text-[10px] text-[#A5B0AB]">
                    <span className="flex items-center gap-1"><FolderKanban className="h-3 w-3 text-[#B8FF3D]" /> {task.project}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-[#65726A]" /> {task.actualMinutes}m / {task.estMinutes}m est</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge variant={task.priority === 'high' ? 'danger' : 'amber'}>{task.priority}</Badge>
                <button onClick={() => deleteTask(task.id)} className="opacity-0 group-hover:opacity-100 p-1 text-[#65726A] hover:text-[#FF686B] transition-opacity cursor-pointer">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </GlassCard>
          ))
        )}
      </div>
    </div>
  );
}
