// utils/showToast.ts
'use client';

import { useToast } from '@/hooks/use-toast';

export const useShowToast = () => {
  const { toast } = useToast();

  return (options: {
    title: string;
    description?: string;
    variant?: 'default' | 'destructive';
  }) => {
    const toastStyles = getToastStyles(options.variant);

    toast({
      title: options.title,
      description: options.description,
      variant: options.variant || 'default',
      className: toastStyles,
    });
  };
};

// Helper function to return toast styles based on the variant
const getToastStyles = (variant: 'default' | 'destructive' | undefined) => {
  const baseStyles =
    'p-4 rounded-lg text-sm font-medium shadow-md border transition-all duration-300';

  if (variant === 'destructive') {
    return `${baseStyles} bg-[#FEE2E2] text-[#7F1D1D] border-[#7F1D1D]`;
  }

  return `${baseStyles} bg-[#E5E7EB] text-[#1F2937] border-[#D1D5DB]`;
};
