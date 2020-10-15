import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import mapMarker from '../images/map-marker.png';

export default function OrphanagesMap() {
  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanagesDetails');
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -15.849083,
          longitude: -48.121111,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>

        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 0.5,
            y: -0.15,
          }}
          coordinate={{
            latitude: -15.849083,
            longitude: -48.121111,
          }}>

          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar dos gatinhos</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => { }}>
          <Feather name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  calloutContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    fontFamily: 'Nunito_700Bold',
    height: 46,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 160,
  },
  calloutText: {
    color: '#0089A5',
    fontSize: 14,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    bottom: 32,
    elevation: 3,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    left: 24,
    paddingLeft: 24,
    position: 'absolute',
    right: 24,
  },
  footerText: {
    color: '#8FA7B3',
    fontFamily: 'Nunito_700Bold'
  },
  createOrphanageButton: {
    alignItems: 'center',
    backgroundColor: '#15C3D6',
    borderRadius: 20,
    color: '#8FA7B3',
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
});
