import React from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Card } from '../../components/ui/Card';
import type { BlogPost } from './types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = React.memo(({ post }) => {
  const handleOpen = (url: string) => {
    if (Platform.OS === 'web') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // For mobile, you may want to use Linking.openURL
    }
  };

  return (
    <Card style={styles.card}>
      <Image
        source={{ uri: post.image }}
        style={[StyleSheet.absoluteFillObject, { borderRadius: 8 }]}
        resizeMode="cover"
        accessible
        accessibilityLabel={post.title + ' image'}
      />
      <View style={styles.contentBottom}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.date}>{post.date}</Text>
        <View style={styles.tags} accessible accessibilityLabel="Tags">
          {post.tags.map((tag) => (
            <View key={tag} style={styles.tag} accessibilityRole="text">
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.description}>{post.description}</Text>
        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={() => handleOpen(post.url)}
            accessibilityRole="button"
            accessibilityLabel={`Read blog post: ${post.title}`}
          >
            <Text style={styles.buttonText}>Read More</Text>
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
    borderRadius: 8,
    minHeight: 320,
    maxWidth: 300,
    minWidth: 220,
    backgroundColor: '#fff',
    boxShadow: Platform.OS === 'web' ? '0 2px 8px rgba(0,0,0,0.08)' : undefined,
  },
  contentBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222',
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
    gap: 4,
  },
  tag: {
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    backgroundColor: '#222',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonPressed: {
    backgroundColor: '#444',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default BlogCard;
