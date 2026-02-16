
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlassCard from '../ui/GlassCard';

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineListProps = {
  timeline: TimelineItem[];
};

const TimelineList: React.FC<TimelineListProps> = ({ timeline }) => (
  <View style={styles.list}>
    {timeline.map((item, idx) => (
      <GlassCard key={item.year + item.title} style={styles.item}>
        <Text style={styles.year}>{item.year}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </GlassCard>
    ))}
  </View>
);

export default TimelineList;

const styles = StyleSheet.create({
  list: {
    marginVertical: 16,
    gap: 24,
  },
  item: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  year: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0070f3',
    marginBottom: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2,
  },
  desc: {
    fontSize: 14,
    color: '#444',
  },
});
