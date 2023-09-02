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
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PlayerCard from './components/PlayerCard';
import Colors from './utilities/Color';

import Steph from './assets/steph.png';
import Kyrie from './assets/kyrie.png';
import Dlo from './assets/dlo.png';
import Durant from './assets/kd.png'
import Luka from './assets/luka.png'

const playerData = [
  { id: '1', playerName: 'Stephen Curry', playerPhoto: Steph },
  { id: '2', playerName: 'Kyrie Irving', playerPhoto: Kyrie },
  { id: '3', playerName: 'D\'Angelo Russell', playerPhoto: Dlo },
  { id: '4', playerName: 'Kevin Durant', playerPhoto: Durant },
  { id: '5', playerName: 'Luka Doncic', playerPhoto: Luka },
];

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [currMode, toggleLightDark] = useState(Colors.light);
  
  const styles = getStyles(currMode);

  const openModal = (playerName) => {
    setSelectedPlayer(playerName);
    setModalVisible(true);
  };

  function toggleLightDarkHandler() {
    currMode === Colors.light ? toggleLightDark(Colors.dark) : toggleLightDark(Colors.light);
  }

  return (
    <View style={styles.container}>
      <View style={styles.lightDarkContainer}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          style={styles.lightDarkItem}
          size={35}
          onPress={toggleLightDarkHandler}
        />
      </View>
      <FlatList
        data={playerData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item.playerName)}>
            <PlayerCard playerName={item.playerName} playerPhoto={item.playerPhoto} mode={currMode}/>
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
      <StatusBar style={currMode.STATUS}/>
    </View>
  );
};

const getStyles = (currMode) => StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: currMode.PRIMARY,
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
  lightDarkContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  lightDarkItem: {
    color: currMode.OPPOSITE,
  }
});

export default App;
