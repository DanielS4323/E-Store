import React from 'react';
import { Button } from 'semantic-ui-react';
import StoreContextProvider from '../store/storeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

const ErrorFallback = () => {
  return (
    <div className="" role="alert">
      <h2 className="">Ooops, something went wrong. </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StoreContextProvider>
        <QueryClientProvider client={queryClient}>
          <Router>{children}</Router>
          <ToastContainer />
        </QueryClientProvider>
      </StoreContextProvider>
    </ErrorBoundary>
  );
};
