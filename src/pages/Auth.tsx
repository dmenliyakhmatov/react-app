import { LoginForm } from '../features/auth/ui';
import { LanguageProvider } from '../features/core/language';

export const AuthPage = () => {
  return (
    <LanguageProvider>
      <LoginForm />{' '}
    </LanguageProvider>
  );
};
