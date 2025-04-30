'use client';

import React, { createContext, useContext, useState } from 'react';

interface AkiliContextType {
  isOpen: boolean;
  messages: string[];
  input: string;
  open: () => void;
  close: () => void;
  setInput: (value: string) => void;
  setMessages: (value: string[] | ((prev: string[]) => string[])) => void;
}

const AkiliContext = createContext<AkiliContextType | undefined>(undefined);

export function AkiliProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

   

  return (
    <AkiliContext.Provider value={{ isOpen, messages, input, open, close, setInput, setMessages }}>
      {children}
    </AkiliContext.Provider>
  );
}

export function useAkili() {
  const context = useContext(AkiliContext);
  if (context === undefined) {
    throw new Error('useAkili must be used within an AkiliProvider');
  }
  return context;
} 
