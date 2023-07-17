import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContactList from '../screens/ContactList';
import {CustomHeader} from './headers';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader />,
      }}>
      <Stack.Screen name="ContactList" component={ContactList} />
    </Stack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);
