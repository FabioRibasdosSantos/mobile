import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();



import Welcome from '../pages/Welcome'
import SingIn from '../pages/SingIn'

const stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShow: false}}
            />

            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{headerShow: false}}
            />
        </Stack.Navigator>
    )
}