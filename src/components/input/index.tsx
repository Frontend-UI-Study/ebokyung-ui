import { forwardRef } from 'react';
import { inputStyles } from './input.css';
import { InputProps } from './input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, size, type = 'text', placeholder = 'placeholder', label, className }, ref) => {
    if (label) {
      return (
        <div>
          <label>{label}</label>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`${inputStyles({ variant, size })} ${className ?? ''}`}
          />
        </div>
      );
    }

    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`${inputStyles({ variant, size })} ${className ?? ''}`}
      />
    );
  },
);
