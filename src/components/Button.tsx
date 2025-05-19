// components/ui/button.tsx
import React from 'react'
import { cn } from '@/lib/utils' // hoặc bỏ nếu bạn không dùng hàm cn

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'default', className, children, ...props }) => {
  const baseClass =
    variant === 'default'
      ? 'bg-orange-500 hover:bg-orange-600 text-white'
      : 'border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white'
  return (
    <button
      {...props}
      className={cn(
        'px-6 py-2 rounded-full font-semibold transition duration-300',
        baseClass,
        className
      )}
    >
      {children}
    </button>
  )
}
