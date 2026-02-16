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

    useEffect(() => {
      // For web, register HTMLElement ref; for native, skip
      if (typeof window !== 'undefined' && sectionRef.current) {
        registerSection(id as any, sectionRef as any);
      }
    }, [id, registerSection]);

    let backgroundColor: string | undefined;
    if (background === 'surface') backgroundColor = 'rgba(0,0,0,0.55)';
    else if (background === 'transparent') backgroundColor = 'transparent';
    else backgroundColor = 'rgba(0,0,0,0.85)';

    const paddingVertical = theme.spacing.lg;

    const sectionStyles = [
      {
        backgroundColor,
        paddingVertical,
      },
      fullWidth ? styles.fullWidth : undefined,
      style,
    ];

    const content = disableContainer ? (
      children
    ) : (
      <Container>{children}</Container>
    );

    // Forward ref if provided, otherwise use sectionRef
    return (
      <View
        ref={typeof window !== 'undefined' ? sectionRef : ref}
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
