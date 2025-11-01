import * as React from 'react';
import * as RadixLabel from '@radix-ui/react-label';

export function Label({
  className,
  ...props
}: React.ComponentProps<typeof RadixLabel.Root>) {
  return (
    <RadixLabel.Root
      className={[
        'mb-1 block text-sm font-medium text-brand-primary',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
}
