import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export function Button({ className, variant = 'default', size = 'default', asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';
  const variantClass = variant === 'primary' ? 'button-primary' : variant === 'secondary' ? 'button-secondary' : variant === 'ghost' ? 'button-ghost' : 'button';
  const sizeClass = size === 'sm' ? 'button-sm' : size === 'lg' ? 'button-lg' : '';

  return <Comp className={cn('button', variantClass, sizeClass, className)} {...props} />;
}
