
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

  return (
    <section id="blog" ref={ref} style={styles.section as React.CSSProperties}>
      <div style={styles.background as React.CSSProperties} />
      <div style={styles.header as React.CSSProperties}>
        <h2 style={styles.title as React.CSSProperties}>Blog</h2>
        <p style={styles.subtitle as React.CSSProperties}>Latest articles, tutorials, and insights</p>
      </div>
      <div style={styles.gridWrap as React.CSSProperties}>
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            style={styles.row as React.CSSProperties}
          >
            {row.map((post) => (
              <div key={post.id} style={{ flex: 1, margin: '0 8px' }}>
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
