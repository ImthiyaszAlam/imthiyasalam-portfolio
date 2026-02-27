
import React from 'react';
import { ThemeProvider } from '../app/providers/ThemeProvider';
import { Layout } from '../components/layout/Layout';
import HomeScreen from '../screens/HomeScreen';
import { NavigationProvider } from './navigation/NavigationProvider';



const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <Layout>
          <HomeScreen />
        </Layout>
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
