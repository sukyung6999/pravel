'use client';

import { useEffect } from 'react';

import { useToast } from '@/hook/useToast';

export type MessageType = 'success' | 'error';

interface ToasterProps {
  type: MessageType;
  message: string;
}

const Toaster = ({ message, type }: ToasterProps) => {
  const { start } = useToast(message, type);

  useEffect(() => {
    start();
  }, [start]);

  return null;
};

export default Toaster;
