import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function PlayerCard(props) {
    const styles = getStyles(props.mode);
    return (
        <View style={styles.cardContainer}>
          <Image source={props.playerPhoto} style={styles.playerImage} />
          <Text style={styles.playerName}>{props.playerName}</Text>
        </View>
    );
};


export default PlayerCard;

const getStyles = (currMode) => StyleSheet.create({
    cardContainer: {
      backgroundColor: currMode.SECONDARY,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      padding: 10,
      alignItems: 'center',
      width: 110,
      height: 165,
      margin: 5,
      alignItems: 'center',
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
      textAlign: 'center',
      color: currMode.OPPOSITE,
    },
  });
