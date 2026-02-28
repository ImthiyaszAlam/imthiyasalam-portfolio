import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GlassCardOverlay: React.FC = () => {
  return (
    <View style={styles.overlay} pointerEvents="box-none">
      <View style={styles.card}>
        <View style={styles.profileImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imthiyas Alam profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Imthiyas Alam</Text>
          <Text style={styles.subtitle}>Android Engineer</Text>

          <View style={styles.socialContainer}>
            <a href="https://linkedin.com/in/imthiyasalam" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: 32, height: 32 }} />
            </a>
            <a href="https://github.com/imthiyasalam" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ width: 32, height: 32, background: '#fff', borderRadius: 16 }} />
            </a>
        
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '25vw',
    minWidth: 200,
    maxWidth: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    zIndex: 1000,
  },
  card: {
    width: 300,
    height: 500,
    borderRadius: 16,
    backgroundColor: 'rgba(118, 106, 106, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    pointerEvents: 'auto',
  },
  profileImageContainer: {
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  textContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  socialContainer: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
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
