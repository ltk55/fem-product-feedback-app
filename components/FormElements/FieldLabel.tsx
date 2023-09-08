export default function FieldLabel({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}): JSX.Element {
  return (
    <div className={className} data-testid="field-label-wrapper">
      <label className="text-xs font-bold text-slate-600 md:text-sm">
        {title}
      </label>
      <small className="block text-xs font-normal text-slate-500 md:text-sm">
        {description}
      </small>
    </div>
  );
}
