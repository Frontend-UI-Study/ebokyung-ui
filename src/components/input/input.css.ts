import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/vars.css';

const baseStyles = style({
  width: '100%',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '0.375rem',
  transition: 'all 100ms',
  selectors: {
    '&:focus': {
      borderColor: 'transparent',
      outlineColor: vars.colors.primary,
    },
    '&::placeholder': {
      color: 'rgb(156 163 175)',
      // fontSize: '0.875rem',
    },
  },
});

const variantStyles = {
  outline: {
    border: '1px solid rgb(229 231 235)',
  },
  filled: {
    backgroundColor: vars.colors.secondary,
  },
  unstyled: {
    outline: 'none',
    '&:focus': {
      outlineColor: vars.colors.primary,
    },
  },
};

const sizeStyles = {
  large: {
    fontSize: '1.25rem',
  },
  medium: {
    fontSize: '1rem',
  },
  small: {
    fontSize: '0.875rem',
  },
  xSmall: {
    fontSize: '0.75rem',
  },
};

export const inputStyles = recipe({
  base: baseStyles,
  variants: {
    variant: variantStyles,
    size: sizeStyles,
  },
  defaultVariants: {
    variant: 'outline',
    size: 'medium',
  },
});
