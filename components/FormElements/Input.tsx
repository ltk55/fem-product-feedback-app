"use client";

import { type ChangeEventHandler, type FocusEventHandler } from "react";

interface InputProps {
  errorMessage?: string | undefined;
  className?: string;
  maxLength?: number;
  value: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

export default function Input({
  errorMessage,
  className,
  maxLength,
  value,
  onBlur,
  onChange,
}: InputProps): JSX.Element {
  return (
    <div className={className}>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type="text"
        maxLength={maxLength}
        className={`h-12 w-full resize-none rounded bg-slate-50 p-6 text-xs font-normal text-slate-600 outline-1 md:text-base ${
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
