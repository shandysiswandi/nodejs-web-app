export interface InputProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
