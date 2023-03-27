import {Home} from '../Portfolio_Container/Home/Home';
import AboutMe from '../Portfolio_Container/AboutMe/AboutMe';
import Resume from '../Portfolio_Container/Resume/Resume';
// import ContactMe from '../Portfolio_Container/ContactMe/ContactMe';
// import Projects from '../Portfolio_Container/Projects/Projects';

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "AboutMe",
        component: AboutMe,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    // {
    //     screen_name: "Projects",
    //     component: Projects,
    // },  
    // {
    //     screen_name: "ContactMe",
    //     component: ContactMe,
    // },
  
];


export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1;

    for(let i = 0; i < TOTAL_SCREENS.length; i++){
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }

    return -1;
};