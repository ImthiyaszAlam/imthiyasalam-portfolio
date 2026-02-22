import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Section from '../../../components/layout/Section';
import GlassCard from '../../../components/ui/GlassCard';
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
          <GlassCard style={heroSectionStyles.glassCard}>
            <View style={heroSectionStyles.heroInfo}>
              <View style={heroSectionStyles.heroNameWrapper}>
                <Text style={heroSectionStyles.heroName}>{HERO_NAME}</Text>
              </View>
              <Text style={heroSectionStyles.heroRole}>{HERO_DESCRIPTION}</Text>
            </View>
          </GlassCard>
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
