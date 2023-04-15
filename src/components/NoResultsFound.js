import {View, StyleSheet, Image, Text} from 'react-native';

const NoResultsFound = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/emptyBox.jpeg')}
      />
      <Text style={styles.text}>No History yet!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    marginTop: '50%',
    height: 200,
    width: 200,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
  },
});

export default NoResultsFound;
