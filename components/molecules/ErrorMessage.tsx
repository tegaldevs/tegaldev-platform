interface ErrorMessageProps {
  code: string;
  title: string;
  description: string;
  codeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function ErrorMessage({
  code,
  title,
  description,
  codeClassName = 'text-6xl font-bold text-white',
  titleClassName = 'text-2xl font-semibold text-gray-200',
  descriptionClassName = 'text-gray-400',
}: ErrorMessageProps) {
  return (
    <div className="space-y-2">
      <h1 className={codeClassName}>{code}</h1>
      <h2 className={titleClassName}>{title}</h2>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
}
