import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();



import Welcome from '../pages/Welcome'
import SingIn from '../pages/SingIn'
import Password from '../pages/Password'
import Topics from '../pages/Topics'


const stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="GoTech"
                component={Welcome}
                options={{headerShow: false}}
                
            />

            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{headerShow: false}}
            />

            <Stack.Screen
                name="Password"
                component={Password}
                options={{headerShow: false}}
            />

            <Stack.Screen
                name="Topics"
                component={Topics}
                options={{headerShow: false}}
            />

        </Stack.Navigator>
    )
}