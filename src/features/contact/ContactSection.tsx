import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Section from '../../components/layout/Section';
import { useTheme } from '../../theme/ThemeContext';
import { ContactForm } from './ContactForm';
import GlassCard from '../../components/ui/GlassCard';

const ContactSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Section id="contact" background="default">
      <View style={styles.headingWrap}>
        <Text
          style={[styles.title, { color: theme.colors.text, fontSize: theme.typography.h1.fontSize }]}
          accessibilityRole="header"
        >
          Contact
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary, fontSize: theme.typography.body.fontSize }]}
          accessibilityRole="text"
        >
          Get in touch using the form below.
        </Text>
      </View>
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
