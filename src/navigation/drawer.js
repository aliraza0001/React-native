import {createDrawerNavigator} from 'react-navigation-drawer';
// import Home from '../components/Home/index';
// import MainTab from '../components/MainTab/index';
// import User from '../components/users/index';
// import Profile from '../components/Profile/index';
// import Setting from '../components/Setting/index';
import TabNavigator from './Tab';


const Drawer = createDrawerNavigator({
    MainTabs:TabNavigator
})

export default Drawer;