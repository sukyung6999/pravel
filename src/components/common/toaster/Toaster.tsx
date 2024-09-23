'use client';

import { useEffect } from 'react';

import { useToast } from '@/hook/useToast';

export type MessageType = 'success' | 'error';

interface ToasterProps {
  type: MessageType;
  message: string;
  time: number;
}

const Toaster = ({ message, type, time }: ToasterProps) => {
  const { start } = useToast(message, type);

  useEffect(() => {
    if (time + 1000 < new Date().getTime()) return;
    start();
  }, [start, time]);

  return null;
};

export default Toaster;
