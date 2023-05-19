import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



import Welcome from '../pages/Welcome'
import SingIn from '../pages/SingIn'
import Password from '../pages/Password'
import Aluno from '../pages/Aluno'
import Professor from '../pages/Professor'


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
                name="Login"
                component={SingIn}
                options={{headerShow: false}}
            />

            <Stack.Screen
                name="Recuperar Senha"
                component={Password}
                options={{headerShow: false}}
            />

            <Stack.Screen
                name="Menu"
                component={Aluno}
                options={{headerShow: false}}
            />
            <Stack.Screen
                name="Menu Prof."
                component={Professor}
                options={{headerShow: false}}
            />

        </Stack.Navigator>
    )
}