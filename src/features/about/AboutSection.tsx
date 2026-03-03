import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import { useTheme } from '../../theme/ThemeContext';
import { AboutCard } from './AboutCard';

const ABOUT = {
  title: 'About',
  subtitle: 'A brief introduction about myself.',
  description:
    'I am a passionate developer with experience in building modern web and mobile applications. I love working with new technologies and creating impactful solutions. Feel free to explore my portfolio and reach out for collaboration!'
};

const AboutSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Section id="about" background="transparent">
      <SectionHeader
        title={ABOUT.title}
        subtitle={ABOUT.subtitle}
        accessibilityLabel={ABOUT.title}
      />
  
          <View style={styles.row}>
            {/* Left Section */}
            <View style={styles.leftSection}>
              <View style={styles.cardsGrid}>
                {/* Card data */}
                {[
                  [
                    { title: '7+', description: 'Projects completed' },
                    { title: '4+', description: 'Years experience' },
                    { title: '10+', description: 'Technologies used' },
                  ],
                  [
                    { title: '3', description: 'Hackathons won' },
                    { title: '5', description: 'Certifications' },
                    { title: '20+', description: 'Blog posts' },
                    { title: '1000+', description: 'Cups of coffee' },
                    { title: '∞', description: 'Learning mindset' },
                  ],
                ].map((row, rowIdx) => (
                  <View style={styles.cardsRow} key={rowIdx}>
                    {row.map((card, colIdx) => (
                      <AboutCard
                        key={colIdx}
                        title={card.title}
                        description={card.description}
                        style={styles.gridCard}
                      />
                    ))}
                  </View>
                ))}
              </View>
            </View>
            {/* Right Section */}
            <View style={styles.rightSection}>
                <Image
                  source={require('../../../assets/images/imthiyas-profile.jpg')}
                  style={styles.profileImage}
                  resizeMode="cover"
                  accessibilityLabel="Imthiyas profile image"
                />
            </View>
          </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 250,
    height: 300,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    // Optionally add shadow or border
  },
  card: {
    width: '100%',
    alignSelf: 'stretch',
    marginLeft: 0,
    marginRight: 0,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
    shadowColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'stretch', // allow leftSection to fill height
    minHeight: 400, // ensure enough height for bottom alignment
  },
  leftSection: {
    flex: 1,
    paddingRight: 24,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  cardsGrid: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end', // align grid at the bottom
    alignItems: 'flex-start',
    gap: 12,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
  },
  gridCard: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
    shadowColor: 'transparent',
  },
  gridCardText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end', // align image at the bottom
  },
  imagePlaceholder: {
    width: 250,
    height: 300,
    borderRadius: 5,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholderText: {
    color: '#aaa',
  },
  headingWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  subtitle: {
    marginTop: 8,
    textAlign: 'center',
  },
  description: {
    marginTop: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default AboutSection;
