import PageLayout from './PageLayout';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center gap-5 max-w-md mx-auto">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="text-gray-200">{subtitle}</p>
        </div>
        {children}
      </div>
    </PageLayout>
  );
}
