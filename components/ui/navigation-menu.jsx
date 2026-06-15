import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';

export function NavigationMenu({ className, ...props }) {
  return <NavigationMenuPrimitive.Root className={cn('relative z-10 flex', className)} {...props} />;
}

export function NavigationMenuList({ className, ...props }) {
  return <NavigationMenuPrimitive.List className={cn('flex flex-wrap items-center gap-2', className)} {...props} />;
}

export function NavigationMenuItem({ className, ...props }) {
  return <NavigationMenuPrimitive.Item className={cn('', className)} {...props} />;
}

export function NavigationMenuLink({ className, ...props }) {
  return <NavigationMenuPrimitive.Link className={cn('block', className)} {...props} />;
}
