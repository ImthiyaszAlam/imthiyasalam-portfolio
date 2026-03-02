
import { useTheme } from '@/src/theme';
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '../../app/navigation/NavigationProvider';
import BlogCard from './BlogCard';
import styles from './BlogSection.styles';
import { blogPosts } from './data';

const BlogSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { registerSection } = useNavigation();

  useEffect(() => {
    registerSection('blog', ref);
  }, [registerSection]);

  // Split blogPosts into 2 rows of 4 cards each
  const rows = [];
  for (let i = 0; i < 2; i++) {
    rows.push(blogPosts.slice(i * 4, i * 4 + 4));
  }

  // Use theme colors for title and subtitle
  const { theme } = useTheme();
  return (
    <section id="blog" ref={ref} style={styles.section as React.CSSProperties}>
      <div style={styles.background as React.CSSProperties} />
      <div style={styles.header as React.CSSProperties}>
        <h2 style={{ ...styles.title, color: theme.colors.textPrimary }}>Blog</h2>
        <p style={{ ...styles.subtitle, color: theme.colors.textSecondary }}>Latest articles, tutorials, and insights</p>
      </div>
      <div style={styles.gridWrap as React.CSSProperties}>
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
              style={styles.row as React.CSSProperties}
          >
            {row.map((post) => (
              <div key={post.id} style={styles.card as React.CSSProperties}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
