import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import PlayerCard from './components/PlayerCard';

import Steph from './assets/steph.png';
import Kyrie from './assets/kyrie.png';
import Dlo from './assets/dlo.png';

const playerData = [
  { id: '1', playerName: 'Stephen Curry', playerPhoto: Steph },
  { id: '2', playerName: 'Kyrie Irving', playerPhoto: Kyrie },
  { id: '3', playerName: 'D\'Angelo Russell', playerPhoto: Dlo },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={playerData}
        renderItem={({ item }) => (
          <PlayerCard playerName={item.playerName} playerPhoto={item.playerPhoto} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
      <StatusBar style="auto"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    paddingTop: 50,
  },
});

export default App;
