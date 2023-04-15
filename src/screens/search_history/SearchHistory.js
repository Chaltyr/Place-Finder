import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {List} from '@ant-design/react-native';
import {useDispatch, useSelector} from 'react-redux';
import NoResultsFound from '../../components/NoResultsFound';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {
  removeSearchHistoryAction,
  storeSearchDataAction,
} from '../../sagas/SearchScreen.saga';
import {useNavigation} from '@react-navigation/native';

const SearchHistory = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const searchResultsList = useSelector(
    state => state.searchScreen.searchResults,
  );

  const handleRemoveHistory = index => {
    console.log('Remove item');
    dispatch(removeSearchHistoryAction(index));
  };

  const handleSearchHistoryItem = data => {
    console.log('storing item');
    dispatch(storeSearchDataAction(data));
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <List renderHeader={'History'}>
        <View>
          {!searchResultsList.length
            ? NoResultsFound()
            : searchResultsList.map((item, index) => (
                <View key={index} style={styles.historyItem}>
                  <TouchableOpacity
                    onPress={() => handleSearchHistoryItem(item)}>
                    <Text style={styles.historyDesc}>
                      {item.formatted_address}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleRemoveHistory(index)}>
                    <AntDesignIcons name="close" size={24} />
                  </TouchableOpacity>
                </View>
              ))}
        </View>
      </List>
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
    marginTop: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  map: {
    flex: 1,
    width: '100%',
  },
  historyItem: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  historyDesc: {
    fontSize: 20,
    fontWeight: 800,
    marginRight: 25,
  },
});

export default SearchHistory;
