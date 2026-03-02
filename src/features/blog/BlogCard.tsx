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
    borderRadius: 5,
    height: 220, // reduced height
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.12)', // transparent
    boxShadow: Platform.OS === 'web' ? '0 2px 8px rgba(0,0,0,0.08)' : undefined,
  },
  contentBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.35)', // add slight overlay for readability
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#fff',
  },
  date: {
    fontSize: 10,
    color: '#888',
    marginBottom: 4,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 4,
    gap: 2,
  },
  tag: {
    borderColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 1,
    marginRight: 2,
  },
  tagText: {
    fontSize: 10,
    color: '#555',
  },
  description: {
    fontSize: 12,
    color: '#444',
    marginBottom: 4,
    maxHeight: 32,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    gap: 4,
  },
  button: {
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center',
    marginRight: 4,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonPressed: {
    backgroundColor: '#444',
  },
  buttonText: {
    color: '#fff',
    borderWidth:1,
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default BlogCard;
