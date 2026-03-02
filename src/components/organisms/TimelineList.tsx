
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
    <View style={styles.row}>
      {timeline.slice(0, 4).map((item, idx) => (
        <GlassCard
          key={item.year + item.title}
          style={[
            styles.item,
            idx % 2 === 0
              ? { backgroundColor: '#e3f2fd' } // odd (0,2)
              : { backgroundColor: '#fce4ec' } // even (1,3)
          ]}
        >
          <Text style={styles.year}>{item.year}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </GlassCard>
      ))}
    </View>
    <View style={styles.row}>
      {timeline.slice(4, 8).map((item, idx) => (
        <GlassCard
          key={item.year + item.title}
          style={[
            styles.item,
            idx % 2 === 0
              ? { backgroundColor: '#fce4ec' } // odd (0,2) reversed
              : { backgroundColor: '#e3f2fd' } // even (1,3) reversed
          ]}
        >
          <Text style={styles.year}>{item.year}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </GlassCard>
      ))}
    </View>
  </View>
);

export default TimelineList;

const styles = StyleSheet.create({
  list: {
    marginVertical: 0,
    gap: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    gap: 0,
  },
  item: {
     width: '25%',
     backgroundColor: '#f5f5f5',
     borderRadius: 0,
     padding: 16,
     borderWidth:1,
     marginHorizontal: 0,
     shadowColor: '#000',
     shadowOpacity: 0.05,
     shadowRadius: 4,
     shadowOffset: { width: 0, height: 2 },
     height: 220, // Increased height
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
