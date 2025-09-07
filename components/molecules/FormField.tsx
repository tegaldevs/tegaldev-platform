'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LucideIcon } from 'lucide-react';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: LucideIcon;
  required?: boolean;
  name?: string;
  helperText?: string;
}

export function FormField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
  required = false,
  name,
  helperText,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-white font-medium">
        {label}
      </Label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          id={id}
          name={name || id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
          required={required}
        />
      </div>
      {helperText && <p className="text-xs text-gray-300">{helperText}</p>}
    </div>
  );
}
