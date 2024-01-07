import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import { StatusBar } from "react-native"
import Main from './Main.js'
import NewTimeZone from './NewTimeZone.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen  
            name="Home"
            options={{headerShown: false}}
            component={Main}
          />
          <Stack.Screen
            name="Add a new timezone"
            options={{
                headerShown: true,
                headerStyle:{
                backgroundColor: "#212D40",
                color: "#AAC0AA",
              },
              headerTitleStyle:{
                color: "#AAC0AA",
              },
              headerTintColor: "#AAC0AA",
            }}
            component={NewTimeZone}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}