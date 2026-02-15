import React from 'react';
import { Button } from '../atoms/Button';

interface ExternalLinkButtonProps {
  url: string;
  label: string;
  showIcon?: boolean;
  style?: any;
}

const isWeb = typeof window !== 'undefined' && typeof document !== 'undefined';

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({ url, label, showIcon = false, style }) => {
  const handlePress = React.useCallback(() => {
    if (isWeb) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // fallback for native
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Linking = require('react-native').Linking;
      Linking.openURL(url);
    }
  }, [url]);

  return (
    <Button
      title={showIcon ? `${label} \u2197` : label}
      onPress={handlePress}
      accessibilityRole="link"
      accessibilityLabel={label + ' (opens in new tab)'}
      style={style}
    />
  );
};

export default ExternalLinkButton;
