import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Section from '../../components/layout/Section';
import GlassCard from '../../components/ui/GlassCard';
import HeroCTA from './HeroCTA';
import HeroVisual from './HeroVisual';


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
      style={{
        width: '100%',
        minHeight: sectionHeight,
        height: sectionHeight,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', flex: 1 }}>
          <GlassCard style={{ backgroundColor: 'rgba(255,255,255,0.12)', alignItems: 'flex-start', justifyContent: 'center', flex: 1, marginRight: 16 }}>
            <View style={{ backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center' }}>
              {HERO_NAME}
              {HERO_DESCRIPTION}
            </View>
          </GlassCard>
          <View style={{ backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'center', flex: 1, marginLeft: 16 }}>
            <HeroVisual />
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', width: '100%', flex: 1 }}>
          <View style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
            <HeroCTA />
          </View>
        </View>
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  // All styles removed
});

export default HeroSection;
