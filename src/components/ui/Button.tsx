import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  children: React.ReactNode;
  className?: string;
  dataCursor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'end',
  children,
  className = '',
  dataCursor = 'hover',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 select-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 overflow-hidden group';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-accent hover:bg-accent-hover text-white shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/40 active:scale-[0.98]',
    secondary:
      'bg-white dark:bg-dark-surface text-slate-800 dark:text-dark-text border border-slate-200 dark:border-white/10 hover:border-accent/40 dark:hover:border-accent/40 shadow-sm hover:shadow active:scale-[0.98]',
    outline:
      'bg-transparent text-slate-800 dark:text-dark-text border border-slate-300 dark:border-white/10 hover:border-accent/50 hover:bg-accent/5 active:scale-[0.98]',
    ghost:
      'bg-transparent text-slate-600 dark:text-dark-muted hover:text-accent dark:hover:text-accent hover:bg-accent/10 active:scale-[0.98]',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'start' && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'end' && (
        <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combinedClass}
        data-cursor={dataCursor}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={props.type || 'button'}
      className={combinedClass}
      data-cursor={dataCursor}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
};
