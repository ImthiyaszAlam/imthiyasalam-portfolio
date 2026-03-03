import React, { forwardRef, ReactNode, useEffect, useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useNavigation } from '../../app/navigation/NavigationProvider';
import { useTheme } from '../../theme/ThemeContext';
import Container from './Container';

export type SectionProps = {
  id: string;
  children: ReactNode;
  background?: 'default' | 'surface' | 'transparent';
  disableContainer?: boolean;
  fullWidth?: boolean;
  style?: ViewProps['style'];
  minHeight?: string | number;
} & Omit<ViewProps, 'ref'>;

const Section = forwardRef<View, SectionProps>(
  (
    {
      id,
      children,
      background = 'default',
      disableContainer = false,
      fullWidth = false,
      style,
      ...rest
    },
    ref
  ) => {

    const { theme } = useTheme();
    const sectionRef = useRef<any>(null);
    const { registerSection } = useNavigation();

    // Always forward the ref to the DOM node for web
    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Use the forwarded ref if provided, otherwise use sectionRef
        const targetRef = ref ?? sectionRef;
        registerSection(id as any, targetRef as any);
      }
    }, [id, registerSection, ref]);

    let backgroundColor: string | undefined;
    if (background === 'surface') backgroundColor = 'rgba(0,0,0,0.55)';
    else if (background === 'transparent') backgroundColor = 'transparent';
    else backgroundColor = 'rgba(0,0,0,0.85)';

    const paddingVertical = 0; // Remove all vertical spacing

    const sectionStyles = [
      {
        backgroundColor,
        paddingVertical,
        minHeight: rest.minHeight,
      },
      fullWidth ? styles.fullWidth : undefined,
      style,
    ];

    const content = disableContainer ? (
      children
    ) : (
      <Container>{children}</Container>
    );

    // Forward ref for web and native
    return (
      <View
        ref={typeof window !== 'undefined' ? (ref ?? sectionRef) : ref}
        accessibilityLabel={id}
        nativeID={id}
        style={sectionStyles}
        {...rest}
      >
        {content}
      </View>
    );
  }
);

Section.displayName = 'Section';

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
    alignSelf: 'stretch',
  },
});

export default Section;
