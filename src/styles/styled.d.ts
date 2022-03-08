import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string;
            contain: string;
            text: string;
            grayLine: string;
            whiteColor: string;
            title: string;
            green: string;
            red: string;
            blue: string;
            blueDark: string;
            blueTwitter: string;
            blackGithub: string;
            blueFacebook: string;
            blueLinkedIn: string;
            purpleTwitch: string;
            greenWhatsApp: string;
            blueDiscord: string;
            boxShadow: string;
        };
    }
}
