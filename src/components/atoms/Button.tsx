import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  glass?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, style, ...props }) => (
  <TouchableOpacity
    style={[
      styles.button,
      props.glass && styles.glass,
      style,
    ]}
    {...props}
  >
    <Text
      style={[
        styles.text,
        props.glass && {
          color: '#FFFFFF', // white text for glass
        },
      ]}
    >{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: '#0070f3',
    borderRadius: 6,
    alignItems: 'center',
  },
  glass: {
    backgroundColor: 'rgba(255,255,255,0.08)', // more transparent
    borderColor: 'rgba(255,136,0,0.25)', // orange border
    borderWidth: 1,
    shadowColor: '#FF8800', // orange shadow
    shadowOpacity: 0.18,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    // Web only: backdrop blur
    ...(typeof window !== 'undefined' ? {
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
    } : {}),
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
