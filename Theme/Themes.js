import {DefaultTheme} from "@react-navigation/native";

export const themeDark = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#57606f',
        accent: '#003489',
        background: '#2d3436',
        textColor: '#fff' // to do
    },
};
export const themeLight = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#fff',
        accent: '#9900ff',
        background: '#ccc',
        textColor: 'black'

    },
};
