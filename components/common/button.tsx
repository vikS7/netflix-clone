import { VariantProps, cva, cx } from 'class-variance-authority';
import React from 'react';



const button = cva('', {
    variants: {
        intent: {
            primary: ['bg-primary', 'hover:bg-primary/20'],
            secondary: ['bg-secondary'],
            translucent: ['bg-slate-50/50', 'hover:bg-slate-50/20']
        },
        size: {
            small: ['text-sm', 'py-1', 'px-2'],
            medium: ['text-base', 'py-2', 'px-4'],
        },
        rounded: {
            full: ['rounded-full'],
            large: ['rounded-lg']
        }
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

const Button = ({ intent, size, rounded, className, children, ...props }: ButtonProps) => {
    
    return (
        <button {...props} className={cx(button({ intent, className, size, rounded }))}>
            {children}
        </button>
    );
};

export default Button;
