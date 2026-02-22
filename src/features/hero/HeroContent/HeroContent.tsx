import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { heroContentStyles } from './HeroContent.style';

interface HeroContentProps {
	name: string;
	role: string;
	description: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({ name, role, description }) => {
	const { theme } = useTheme();
	const { colors } = theme;

	return (
		<View style={heroContentStyles.container} accessible accessibilityRole="header">
			<Text
				accessibilityRole="header"
				style={[heroContentStyles.heading, { color: colors.text }]}
				accessibilityLevel={1}
			>
				{name}
			</Text>
			<Text
				accessibilityRole="header"
				style={[heroContentStyles.role, { color: colors.primary }]}
				accessibilityLevel={2}
			>
				{role}
			</Text>
			<Text style={[heroContentStyles.description, { color: colors.textSecondary }]} accessibilityRole="text">
				{description}
			</Text>
		</View>
	);
};
// ...existing code...
