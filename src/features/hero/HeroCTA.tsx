import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '../../app/navigation/NavigationProvider';
import { Button } from '../../components/atoms/Button';
import { useBreakpoint } from '../../hooks/useBreakpoint';

const HeroCTA: React.FC = () => {
  const breakpoint = useBreakpoint();
  const { scrollToSection } = useNavigation();
  return (
    <View
      style={[
        styles.container,
        breakpoint === "mobile" ? styles.containerStacked : styles.containerRow,
      ]}
      accessibilityLabel="Hero call to action"
    >
      <Button
        title="View Projects"
        onPress={() => scrollToSection('projects')}
        accessibilityRole="button"
        accessibilityLabel="View Projects"
        style={breakpoint === "mobile" ? styles.buttonStacked : styles.buttonRow}
        glass
      />
      <Button
        title="Contact Me"
        onPress={() => scrollToSection('contact')}
        accessibilityRole="button"
        accessibilityLabel="Contact Me"
        style={breakpoint === "mobile" ? undefined : styles.buttonRow}
        glass
      />
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
