import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

class App extends Component {
  state = {
    merahon: 'ON',
    merahoff: 'OFF',
    kuningon: 'ON',
    kuningoff: 'OFF',
    hijauon: 'ON',
    hijauoff: 'OFF',
  };

  _handleKirimPerintah(value) {
    firestore()
      .collection('kontroler')
      .doc('merah')
      .set({
        merah: value,
      })
      .then(() => {
        Alert.alert('Send data cloud firestore success');
      })
      .catch(error => console.error(error));
  }

  _handleKirimPerintah1(value) {
    firestore()
      .collection('kontroler')
      .doc('kuning')
      .set({
        kuning: value,
      })
      .then(() => {
        Alert.alert('Send data cloud firestore success');
      })
      .catch(error => console.error(error));
  }

  _handleKirimPerintah2(value) {
    firestore()
      .collection('kontroler')
      .doc('hijau')
      .set({
        hijau: value,
      })
      .then(() => {
        Alert.alert('Send data cloud firestore success');
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            alignSelf: 'center',
          }}>
          Kontroler
        </Text>
        <Text style={styles.teks}>Lampu Merah</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handleKirimPerintah(this.state.merahon)}>
            <Text style={styles.textButton}>ON</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handleKirimPerintah(this.state.merahoff)}>
            <Text style={styles.textButton}>OFF</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.teks}>Lampu Kuning</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handleKirimPerintah1(this.state.kuningon)}>
            <Text style={styles.textButton}>ON</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handleKirimPerintah1(this.state.kuningoff)}>
            <Text style={styles.textButton}>OFF</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.teks}>Lampu Hijau</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handleKirimPerintah2(this.state.hijauon)}>
            <Text style={styles.textButton}>ON</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handleKirimPerintah2(this.state.hijauoff)}>
            <Text style={styles.textButton}>OFF</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    margin: 10,
  },
  input: {
    height: 50,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    paddingHorizontal: 20,
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'black',
    fontSize: 20,
  },
  card: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  teks: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default App;
