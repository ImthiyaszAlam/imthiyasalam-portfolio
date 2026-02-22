import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '../../../app/navigation/NavigationProvider';
import { Button } from '../../../components/atoms/Button';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import { heroCTAStyles } from './HeroCTA.style';

const HeroCTA: React.FC = () => {
  const breakpoint = useBreakpoint();
  const { scrollToSection } = useNavigation();
  return (
    <View
      style={[
        heroCTAStyles.container,
        breakpoint === "mobile" ? heroCTAStyles.containerStacked : heroCTAStyles.containerRow,
      ]}
      accessibilityLabel="Hero call to action"
    >
      <Button
        title="View Projects"
        onPress={() => scrollToSection('projects')}
        accessibilityRole="button"
        accessibilityLabel="View Projects"
        style={breakpoint === "mobile" ? heroCTAStyles.buttonStacked : heroCTAStyles.buttonRow}
        glass
      />
      <Button
        title="Contact Me"
        onPress={() => scrollToSection('contact')}
        accessibilityRole="button"
        accessibilityLabel="Contact Me"
        style={breakpoint === "mobile" ? undefined : heroCTAStyles.buttonRow}
        glass
      />
    </View>
  );
};



export default HeroCTA;
