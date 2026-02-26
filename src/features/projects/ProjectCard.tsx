import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Card } from '../../components/ui/Card';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project }) => {
  const handleOpen = (url: string) => {
    if (Platform.OS === 'web') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      Linking.openURL(url);
    }
  };

  return (
    <Card style={styles.card}>
      <Image
        source={{ uri: project.image }}
        style={[StyleSheet.absoluteFillObject, { borderRadius: 8 }]}
        resizeMode="cover"
        accessible
        accessibilityLabel={project.title + ' image'}
      />
      {/* Main gradient overlay */}
      <LinearGradient
        pointerEvents="none"
        colors={["rgba(30,30,60,0.75)", "rgba(30,30,60,0.18)", "rgba(30,30,60,0)"]}
        locations={[0, 0.7, 1]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.gradientOverlay}
      />
      {/* Darker bottom gradient overlay */}
      <LinearGradient
        pointerEvents="none"
        colors={["rgba(10,10,20,0.95)", "rgba(30,30,60,0)"]}
        locations={[0, 1]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.bottomGradient}
      />
      <View style={styles.contentBottom}>
        <Text style={styles.title}>{project.title}</Text>
        <View style={styles.techStack} accessible accessibilityLabel="Tech stack">
          {project.techStack.map((tech) => (
            <View key={tech} style={styles.tag} accessibilityRole="text">
              <Text style={styles.tagText}>{tech}</Text>
            </View>
          ))}
        </View>
        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={() => handleOpen(project.liveUrl)}
            accessibilityRole="button"
            accessibilityLabel={`Open live demo for ${project.title}`}
          >
            <Text style={styles.buttonText}>Live Demo</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={() => handleOpen(project.githubUrl)}
            accessibilityRole="button"
            accessibilityLabel={`Open GitHub for ${project.title}`}
          >
            <Text style={styles.buttonText}>GitHub</Text>
          </Pressable>
        </View>
      </View>
    </Card>
  );
});

const styles = StyleSheet.create({
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    zIndex: 1,
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '200%', // Cover 40% of the card height
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 2,
  },
  // ...removed imageWrapper and image styles...
  card: {
    margin: 0,
    overflow: Platform.OS === 'web' ? 'visible' : 'hidden',
    transitionProperty: Platform.OS === 'web' ? 'transform, box-shadow' : undefined,
    transitionDuration: Platform.OS === 'web' ? '0.2s' : undefined,
    cursor: Platform.OS === 'web' ? 'pointer' : undefined,
    minHeight: 420,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    boxShadow: Platform.OS === 'web' ? '0 8px 32px 0 rgba(0,0,0,0.25)' : undefined,
    ...(Platform.OS === 'web' ? {
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
    } : {}),
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff',
    letterSpacing: 0.2,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 15,
    color: '#fff',
    opacity: 0.85,
    marginBottom: 8,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    borderRadius: 50,
    paddingHorizontal: 8,
    marginRight: 3,
    marginBottom: 3,
    borderWidth: 1,
    borderColor: '#fff',
    ...(Platform.OS === 'web' ? {
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    } : {}),
  },
  tagText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  button: {
    borderRadius: 2,
    paddingHorizontal: 18,
    paddingVertical: 2,
    alignItems: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.2,
  },
  contentBottom: {
    width: '100%',
    padding: 20,
    paddingBottom: 24,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
});

export default ProjectCard;
