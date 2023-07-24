import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {getUsers} from '../../services/usersApi';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isLoading, setLoading] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const fetchContacts = async () => {
    try {
      const results = await getUsers();
      setContacts(results);
      setFilteredContacts(results);
    } catch (error) {
      console.error(error);
    }
  };

  const filterContacts = gender => {
    setSelectedFilter(gender);
    if (gender === 'all') {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter(contact => contact.gender === gender);
      setFilteredContacts(filtered);
    }
  };

  const handleSort = () => {
    setLoading(true);
    const _sortedData = filteredContacts?.sort(
      (a, b) => a?.dob?.age - b?.dob?.age,
    );
    setFilteredContacts(_sortedData);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.filterButtonsContainer}>
        <TouchableOpacity
          style={styles.filterButton(selectedFilter, 'all')}
          onPress={() => filterContacts('all')}>
          <Text style={styles.filterButtonText(selectedFilter, 'all')}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton(selectedFilter, 'male')}
          onPress={() => filterContacts('male')}>
          <Text style={styles.filterButtonText(selectedFilter, 'male')}>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton(selectedFilter, 'female')}
          onPress={() => filterContacts('female')}>
          <Text style={styles.filterButtonText(selectedFilter, 'female')}>
            Female
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSort}>
          <Text>Sort</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredContacts}
        extraData={filteredContacts}
        refreshing={isLoading}
        renderItem={({item}) => {
          const age = item?.dob?.age;
          return (
            <View style={styles.contactContainer}>
              <Image
                source={{uri: item.picture.large}}
                style={styles.contactImage}
              />
              <View style={styles.contactDetails}>
                <Text style={styles.contactName}>
                  {item.name.first} {item.name.last}
                </Text>
                <Text style={styles.contactEmail}>{item.email}</Text>
                <Text style={styles.contactPhone}>{item.phone}</Text>
                <Text style={styles.contactPhone}>{`Age: ${age}`}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.email}
      />
    </View>
  );
};

export default ContactList;
