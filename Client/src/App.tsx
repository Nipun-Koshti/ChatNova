import { useAuth } from './hooks/use-auth';
import './App.css'
import AppRoutes from './routes'
import { useEffect } from 'react';
import Logo from './components/logo';
import { Spinner } from './components/ui/spinner';
import { useLocation } from 'react-router-dom';
import { isAuthRoute } from './routes/route';

function App() {
  const { pathname } = useLocation();
  const { user, isAuthStatus, isAuthStatusLaoding } = useAuth();
  const isAuth = isAuthRoute(pathname);

  useEffect(() => {
    if (isAuth) return;
    isAuthStatus();
  }, [isAuthStatus, isAuth]);

  if (isAuthStatusLaoding && !user) {
    return (
      <div
        className="flex flex-col items-center
       justify-center h-screen
      "
      >
        <Logo imgClass="size-20" showText={false} />
        <Spinner className="w-6 h-6" />
      </div>
    );
  }

  return (
   <>
    <AppRoutes/>
   </>
  )
}

export default App
