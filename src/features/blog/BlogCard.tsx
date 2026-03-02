import React from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Card } from '../../components/ui/Card';
import { blogCardStyles as styles } from './BlogCard.styles';
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

// styles moved to BlogCard.styles.ts

export default BlogCard;
