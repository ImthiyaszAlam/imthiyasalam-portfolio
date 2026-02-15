import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '../../app/navigation/NavigationProvider';
import { Button } from '../../components/atoms/Button';
import { useBreakpoint } from '../../hooks/useBreakpoint';

const HeroCTA: React.FC = () => {
  const { isSmall } = useBreakpoint();
  const { scrollToSection } = useNavigation();

  return (
    <View
      style={[
        styles.container,
        isSmall ? styles.containerStacked : styles.containerRow,
      ]}
      accessibilityRole="group"
      accessibilityLabel="Hero call to action"
    >
      <Button
        variant="primary"
        onPress={() => scrollToSection('projects')}
        accessibilityRole="button"
        accessibilityLabel="View Projects"
        style={isSmall ? styles.buttonStacked : styles.buttonRow}
      >
        View Projects
      </Button>
      <Button
        variant="secondary"
        onPress={() => scrollToSection('contact')}
        accessibilityRole="button"
        accessibilityLabel="Contact Me"
        style={isSmall ? undefined : styles.buttonRow}
      >
        Contact Me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  containerRow: {
    flexDirection: 'row',
    gap: 16,
  },
  containerStacked: {
    flexDirection: 'column',
    gap: 12,
  },
  buttonRow: {
    marginRight: 16,
  },
  buttonStacked: {
    marginBottom: 12,
  },
});

export default HeroCTA;
