import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-violet-300'>
      <Text className='text-violet-500'>Tab One</Text>
      <View />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}