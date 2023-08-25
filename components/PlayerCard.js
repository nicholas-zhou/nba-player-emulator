import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PlayerCard = ({ playerPhoto, playerName }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={playerPhoto} style={styles.playerImage} />
      <Text style={styles.playerName}>{playerName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      padding: 10,
      alignItems: 'center',
      width: 110,
      margin: 5,
    },
    playerImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    playerName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default PlayerCard;
