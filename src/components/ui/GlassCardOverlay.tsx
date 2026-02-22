import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GlassCardOverlay: React.FC = () => {
  return (
    <View style={styles.overlay} pointerEvents="box-none">
      <View style={styles.card}>
        {/* Replace with your actual content */}
        <Text style={styles.title}>Imthiyas Alam</Text>
        <Text style={styles.subtitle}>Android Engineer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'fixed', // For web, use 'fixed'. For native, use 'absolute'.
    left: 50,
    top: 0,
    height: '100vh',
    width: 400,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
  card: {
    width: 300,
    height: 500,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 32,
    pointerEvents: 'auto',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#eee',
  },
});

export default GlassCardOverlay;
