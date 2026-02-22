
import React from 'react';
import { ThemeProvider } from '../app/providers/ThemeProvider';
import { Layout } from '../components/layout/Layout';
import HomeScreen from '../screens/HomeScreen';
import { NavigationProvider } from './navigation/NavigationProvider';

import GlassCardOverlay from '../components/ui/GlassCardOverlay';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <>
          <GlassCardOverlay />
          <Layout>
            <HomeScreen />
          </Layout>
        </>
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
