import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const openModal = (playerName) => {
    setSelectedPlayer(playerName);
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={playerData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item.playerName)}>
            <PlayerCard playerName={item.playerName} playerPhoto={item.playerPhoto} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text>{selectedPlayer}</Text>
          {/* Add more content to the modal here */}
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default App;
