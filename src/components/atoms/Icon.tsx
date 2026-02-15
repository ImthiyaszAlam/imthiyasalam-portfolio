import React from 'react';
import { Text, TextProps } from 'react-native';

interface IconProps extends TextProps {
  name: string; // Use a real icon library in production
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => (
  <Text {...props}>{name}</Text>
);
