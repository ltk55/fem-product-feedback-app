"use client";

import { type ChangeEventHandler, type FocusEventHandler } from "react";

interface InputProps {
  errorMessage?: string | undefined;
  className?: string;
  maxLength?: number;
  value: string | number;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({
  errorMessage,
  className,
  maxLength,
  value,
  onBlur,
  onChange,
  placeholder,
}: InputProps): JSX.Element {
  return (
    <div className={className}>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
        value={value}
        className={`h-20 w-full resize-none rounded bg-slate-50 px-6 py-4 text-xs font-normal text-slate-600 outline-1 md:text-base ${
          errorMessage != null
            ? "outline outline-red-600"
            : "focus:outline focus:outline-indigo-600"
        }`}
      />
      {errorMessage != null ? (
        <div className="mt-1 text-sm font-normal text-red-600">
          {errorMessage}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
