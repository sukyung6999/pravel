'use client';

import { useEffect, useState } from 'react';

export type MessageType = 'success' | 'error';

interface ToasterProps {
  type: MessageType;
  message: string;
}

const Toaster = ({ message }: ToasterProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  if (!visible) return null;

  return (
    <div className="fixed left-1/2 top-5 -translate-x-1/2 px-5 py-3 bg-white rounded-md text-gray-700">
      {message}
    </div>
  );
};

export default Toaster;
