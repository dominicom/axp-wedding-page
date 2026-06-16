"use client";

import { cn } from '@/lib/utils';

export function H1({ children, className, posterShadow = false, ...props }) {
  return (
    <h1 className={cn('heading h1', className, posterShadow ? 'text-shadow-poster' : '')} {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, className, posterShadow = false, ...props }) {
  return (
    <h2 className={cn('heading h2', className, posterShadow ? 'elevated text-shadow-poster' : '')} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, className, posterShadow = false, ...props }) {
  return (
    <h3 className={cn('heading h3', className, posterShadow ? 'elevated text-shadow-poster' : '')} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, className, posterShadow = false, ...props }) {
  return (
    <h4 className={cn('heading h4', className, posterShadow ? 'elevated text-shadow-poster' : '')} {...props}>
      {children}
    </h4>
  );
}

export function P({ children, className, posterShadow = false, ...props }) {
  return (
    <p className={cn('paragraph', className, posterShadow ? 'elevated text-shadow-poster' : '')} {...props}>
      {children}
    </p>
  );
}

export default { H1, H2, H3, H4, P };
