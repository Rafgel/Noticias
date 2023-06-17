import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewsList from "./src/NewsList";
import NewsDetail from "./src/NewsDetail";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="NewsList"
        component={NewsList}
        options={{title: 'Ultimas Noticias'}}
        />
        <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{ title: "Detalle de Noticias "}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;