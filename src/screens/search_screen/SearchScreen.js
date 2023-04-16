import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {storeSearchResultAction} from '../../sagas/SearchScreen.saga';
import {useDispatch, useSelector} from 'react-redux';

const SearchScreen = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
  const [placeName, setPlaceName] = useState('');

  const searchResultsList = useSelector(
    state => state.searchScreen.searchResults,
  );
  const searchData = useSelector(state => state.searchScreen.searchData);

  const handleSelectPlace = (data, details) => {
    console.log('RUNNING SEARCH...');
    console.log('DATA', data);
    console.log('DATA', details);
    dispatch(storeSearchResultAction(details));
    setPlaceName(details.formatted_address);
    setLocation({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    console.log('searchData', searchData);
    if (Object.keys(searchData).length === 0) {
      console.log('Object is empty');
      return;
    }
    setLocation({
      latitude: searchData.geometry.location.lat,
      longitude: searchData.geometry.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setPlaceName(searchData.formatted_address);
    // console.log('searchData', searchData);
  }, [searchData]);

  return (
    <View style={styles.container}>
      <View>
        <GooglePlacesAutocomplete
          textInputProps={{
            value: placeName,
            onChangeText: text => setPlaceName(text),
          }}
          minLength={2}
          listViewDisplayed={true}
          keyboardShouldPersistTaps={'always'}
          placeholder="Find a place"
          onPress={handleSelectPlace}
          onFail={error => console.log(error)}
          fetchDetails={true}
          listUnderlayColor={'transparent'}
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{
            key: 'AIzaSyBS_pyIQSpdEZVDABo-iqKr-nrmpAjw0Xw',
            language: 'en',
          }}
          styles={{
            textInput: styles.input,
            listView: styles.list,
          }}
        />
      </View>

      {location ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          apiKey={'AIzaSyBS_pyIQSpdEZVDABo-iqKr-nrmpAjw0Xw'}
          style={styles.map}
          region={location}>
          <Marker coordinate={location} />
        </MapView>
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE}
          apiKey={'AIzaSyBS_pyIQSpdEZVDABo-iqKr-nrmpAjw0Xw'}
          style={styles.map}
          region={{
            latitude: 3.099088649458432,
            longitude: 101.68582820878122,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 3.099088649458432,
              longitude: 101.68582820878122,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    // marginRight: 20,
    marginHorizontal: 60,
    position: 'relative',
  },
  list: {
    position: 'absolute',
    top: 50,
    paddingHorizontal: 60,
    overflow: 'scroll',
  },
  map: {
    flex: 5,
    paddingBottom: 100,
    zIndex: -1,
  },
});

export default SearchScreen;
