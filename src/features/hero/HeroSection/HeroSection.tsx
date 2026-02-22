import React from 'react';
import { Dimensions, View } from 'react-native';
import Section from '../../../components/layout/Section';
import HeroCTA from '../HeroCTA/HeroCTA';
import HeroVisual from '../HeroVisual/HeroVisual';
import { heroSectionStyles } from './HeroSection.style';


const HERO_NAME = 'Imthiyas Alam';
const HERO_DESCRIPTION = 'Android Engineer';
// Removed role and description

const HeroSection: React.FC = () => {
  const windowHeight = Dimensions.get('window').height;
  const sectionHeight = windowHeight - 64;

  return (
    <Section
      id="home"
      minHeight={sectionHeight}
      background="transparent"
      style={[heroSectionStyles.section, { minHeight: sectionHeight, height: sectionHeight }]}
    >
      <View style={heroSectionStyles.main}>
        <View style={heroSectionStyles.row}>
          {/* The glass card is now rendered globally as an overlay. Only render the rest of the content here. */}
          <View style={heroSectionStyles.visualWrapper}>
            <HeroVisual />
          </View>
        </View>
        <View style={heroSectionStyles.ctaRow}>
          <View style={heroSectionStyles.ctaInner}>
            <HeroCTA />
          </View>
        </View>
      </View>
    </Section>
  );
};



export default HeroSection;
