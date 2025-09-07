import ErrorPageLayout from '@/components/layouts/ErrorPageLayout';
import ErrorActions from '@/components/molecules/ErrorActions';
import ErrorMessage from '@/components/molecules/ErrorMessage';

export default function NotFound() {
  return (
    <ErrorPageLayout>
      <ErrorMessage
        code="404"
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
      />
      <ErrorActions />
    </ErrorPageLayout>
  );
}
