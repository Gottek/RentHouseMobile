import {DefaultTheme} from "@react-navigation/native";

export const themeDark = {
    ...DefaultTheme,
    dark:true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#414141',
        accent: '#382039',
        background : '#313131'
    },
};
export const themeLight = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#aaa',
        accent: '#9900ff',
        background : '#ccc'
    },
};