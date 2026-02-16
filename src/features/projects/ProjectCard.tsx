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
      <View style={styles.imageWrap}>
        <Image
          source={{ uri: project.image }}
          style={styles.image}
          resizeMode="cover"
          accessible
          accessibilityLabel={project.title + ' image'}
        />
      </View>
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
    minHeight: 420, // Increased minHeight for taller card
  },
  imageWrap: {
    width: '100%',
    aspectRatio: 16 / 13, // Taller aspect ratio
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 15,
    color: '#555',
    marginBottom: 8,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    marginRight: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    transform: [{ scale: 1 }],
  },
  buttonPressed: {
    backgroundColor: '#1e40af',
    transform: [{ scale: 1.04 }],
    shadowOpacity: 0.16,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default ProjectCard;
