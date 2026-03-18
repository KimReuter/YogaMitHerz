import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'inverted';

const variantClasses: Record<Variant, string> = {
  primary:  'bg-iris-terracotta text-white hover:bg-iris-terracotta/80 hover:text-white',
  outline:  'border-2 border-iris-terracotta text-iris-terracotta hover:bg-iris-terracotta hover:text-white',
  inverted: 'bg-white text-iris-terracotta hover:bg-iris-terracotta hover:text-white',
};

const base = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition';

type CommonProps = {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
};

type AsButton = CommonProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;
type AsAnchor = CommonProps & { href: string }  & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({ variant = 'primary', className = '', href, children, ...rest }: AsButton | AsAnchor) {
  const classes = `${base} ${variantClasses[variant]}${className ? ` ${className}` : ''}`;
  if (href !== undefined) {
    return <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>;
  }
  return <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}
