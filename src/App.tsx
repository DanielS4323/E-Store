import Header from './components/Layout/Header';
import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';


function App() {
  
  return (
    <AppProvider>
      <Header />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
