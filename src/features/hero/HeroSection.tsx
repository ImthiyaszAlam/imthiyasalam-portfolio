

import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Container from '../../components/layout/Container';
import Section from '../../components/layout/Section';
import AnimatedGradientText from '../../components/ui/AnimatedGradientText';
import CursorSpotlight from '../../components/ui/CursorSpotlight';
import FadeInUp from '../../components/ui/FadeInUp';
import GlassCard from '../../components/ui/GlassCard';
import GlowBackground from '../../components/ui/GlowBackground';
import GradientMeshBackground from '../../components/ui/GradientMeshBackground';
import MagneticButton from '../../components/ui/MagneticButton';
import { useTheme } from '../../theme/ThemeContext';
import HeroCTA from './HeroCTA';
import HeroVisual from './HeroVisual';


const HERO_NAME = 'Imthiyas Alam';
const HERO_ROLE = 'Android Engineer';
const HERO_DESC = 'I build modern, performant web and mobile experiences that delight users and drive business value.';

const HeroSection: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 768;
  const { theme } = useTheme();

  // Set minHeight to viewport height
  const minHeight = height;

  return (
    <Section
      id="home"
      style={{
        position: 'relative',
        overflow: 'hidden', // Hide overflow for full screen effect
        minHeight,
        height: minHeight,
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Ultra-premium background */}
      <GradientMeshBackground />
      <CursorSpotlight />
      <Container>
        <View
          style={[
            styles.root,
            { minHeight, gap: isMobile ? theme.spacing.xl : theme.spacing.xl * 2 },
            isMobile ? styles.mobile : styles.desktop,
            { position: 'relative', zIndex: 1 },
          ]}
        >
          {/* Content Column */}
          <FadeInUp delay={0} style={[styles.left, isMobile && styles.fullWidth, { zIndex: 2 }]}> 
            <GlassCard style={{ width: '100%', alignItems: 'center', padding: isMobile ? 20 : 32, gap: 16 }}>
              <AnimatedGradientText fontSize={isMobile ? 32 : 48} style={{ marginBottom: 8 }}>
                {HERO_NAME}
              </AnimatedGradientText>
              <View style={styles.ctaWrap}>
                <View style={{ flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 16, width: '100%' }}>
                  {/* Wrap each CTA button with MagneticButton */}
                  <MagneticButton strength={28}>
                    <HeroCTA />
                  </MagneticButton>
                </View>
              </View>
            </GlassCard>
          </FadeInUp>

          {/* Visual Column */}
          <FadeInUp delay={120} style={[styles.right, isMobile && styles.fullWidth, { zIndex: 2, position: 'relative' }]}> 
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              {/* Glow behind visual */}
              <GlowBackground size={isMobile ? 180 : 340} color={theme.colors.primary} opacity={0.22} />
              <HeroVisual />
            </View>
          </FadeInUp>
        </View>
      </Container>
    </Section>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  desktop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 64,
  },
  mobile: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 32,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
    alignItems: 'center',
  },
  ctaWrap: {
    marginTop: 24,
    width: '100%',
    alignItems: 'flex-start',
  },
});

export default HeroSection;
