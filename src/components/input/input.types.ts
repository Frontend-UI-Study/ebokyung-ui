// type InputVariant = 'default' | 'disabled' | 'withLable';
type InputVariant = 'outline' | 'filled' | 'unstyled';

type InputSize = 'large' | 'medium' | 'small' | 'xSmall';

type InputType = 'text' | 'email' | 'password' | 'file';

export type InputProps = {
  variant: InputVariant;
  size: InputSize;
  type: InputType;
  label?: string;
  placeholder?: string;
  className?: string;
};
