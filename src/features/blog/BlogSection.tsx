
import { useTheme } from '@/src/theme';
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '../../app/navigation/NavigationProvider';
import Section from '../../components/layout/Section';
import SectionHeader from '../../components/layout/SectionHeader';
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
    <Section id="blog" background="transparent" ref={ref}>
      <div style={styles.background as React.CSSProperties} />
      <SectionHeader
        title="Blog"
        subtitle="Latest articles, tutorials, and insights"
        accessibilityLabel="Blog"
      />
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
    </Section>
  );
};

export default BlogSection;
