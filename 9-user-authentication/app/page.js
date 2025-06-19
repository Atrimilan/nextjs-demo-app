import AuthForm from '@/components/auth-form';

export default async function Home(props) {
  const searchParams = await props.searchParams;
  const formMode = searchParams.mode || 'login';
  return <AuthForm mode={formMode} />;
}
