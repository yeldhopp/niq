import React, { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: ReactNode;
  hoverable?: boolean;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  className, 
  children, 
  hoverable = false,
  bordered = true
}) => {
  return (
    <div 
      className={cn(
        'bg-white rounded-lg overflow-hidden',
        bordered && 'border border-gray-200',
        hoverable && 'transition-all duration-200 hover:shadow-md hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
  return (
    <div className={cn('px-6 py-4 border-b border-gray-200', className)}>
      {children}
    </div>
  );
};

interface CardContentProps {
  className?: string;
  children: ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
  return (
    <div className={cn('px-6 py-4', className)}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  className?: string;
  children: ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ className, children }) => {
  return (
    <div className={cn('px-6 py-4 border-t border-gray-200', className)}>
      {children}
    </div>
  );
};