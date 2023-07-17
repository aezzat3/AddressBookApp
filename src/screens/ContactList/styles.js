import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  filterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  filterButton: (selectedFilter, gender) => ({
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: selectedFilter === gender ? '#33C1FF' : '#ccc',
  }),
  filterButtonText: (selectedFilter, gender) => ({
    fontSize: 14,
    fontWeight: 'bold',
    color: selectedFilter === gender ? '#fff' : '#000',
    textTransform: 'capitalize',
  }),
  contactContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  contactEmail: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  contactPhone: {
    fontSize: 14,
    color: '#777',
  },
});
