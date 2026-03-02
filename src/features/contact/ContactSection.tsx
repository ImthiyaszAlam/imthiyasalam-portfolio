import React from 'react';
import { StyleSheet } from 'react-native';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
import GlassCard from '../../components/ui/GlassCard';
import { useTheme } from '../../theme/ThemeContext';
import { ContactForm } from './ContactForm';

const ContactSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Section id="contact" background="transparent">
      <SectionHeader
        title="Contact"
        subtitle="Get in touch using the form below."
        accessibilityLabel="Contact"
      />
      <GlassCard style={{ width: '100%', maxWidth: 480, alignSelf: 'center' }}>
        <ContactForm />
      </GlassCard>
    </Section>
  );
};

const styles = StyleSheet.create({
  headingWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 32,
  },
  title: {
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  subtitle: {
    marginTop: 8,
    textAlign: 'center',
  },
});

export default ContactSection;
