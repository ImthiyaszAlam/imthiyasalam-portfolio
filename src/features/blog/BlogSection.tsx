import React, { useEffect, useRef } from 'react';
import { useNavigation } from '../../app/navigation/NavigationProvider';

const BlogSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { registerSection } = useNavigation();

  useEffect(() => {
    registerSection('blog', ref);
  }, [registerSection]);

  return (
    <section id="blog" ref={ref}>
      <h2>Blog</h2>
      <p>This is the Blog section. Add your blog posts here.</p>
    </section>
  );
};

export default BlogSection;
