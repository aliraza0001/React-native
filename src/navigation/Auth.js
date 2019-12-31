import {createStackNavigator} from 'react-navigation-stack';
import SignUp from '../components/Auth/SignUp/index';
import SigIn from '../components/Auth/SignIn/index';
import Forget from '../components/Auth/ForgetPassword/index';

const authStack = createStackNavigator({
    SigIn:{
        screen:SigIn,
        navigationOptions:{
            headerTitle:"SignIn"
        }
    },
    SignUp:{
        screen:SignUp,
        navigationOptions:{
            headerTitle:'SignUp'
        }
    },
    Forget:{
        screen:Forget,
        navigationOptions:{
            headerTitle:'Forget Password'
        }
    }
})

export default authStack;