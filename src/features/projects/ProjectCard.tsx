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
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        accessible
        accessibilityLabel={project.title + ' image'}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{project.description}</Text>
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
  card: {
    margin: 0,
    overflow: Platform.OS === 'web' ? 'visible' : 'hidden',
    transitionProperty: Platform.OS === 'web' ? 'transform, box-shadow' : undefined,
    transitionDuration: Platform.OS === 'web' ? '0.2s' : undefined,
    cursor: Platform.OS === 'web' ? 'pointer' : undefined,
    minHeight: 420,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    boxShadow: Platform.OS === 'web' ? '0 8px 32px 0 rgba(0,0,0,0.25)' : undefined,
    ...(Platform.OS === 'web' ? {
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
    } : {}),
    backgroundColor: 'transparent',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff',
    letterSpacing: 0.2,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 6,
    paddingHorizontal: 8,
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
    gap: 6,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: 'rgba(255,136,0,0.85)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
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
    backgroundColor: 'rgba(255,136,0,0.85)',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 8,
    shadowColor: '#FF8800',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    transform: [{ scale: 1 }],
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    ...(Platform.OS === 'web' ? {
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    } : {}),
  },
  buttonPressed: {
    backgroundColor: 'rgba(255,136,0,1)',
    transform: [{ scale: 1.04 }],
    shadowOpacity: 0.28,
    shadowRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.2,
  },
});

export default ProjectCard;
