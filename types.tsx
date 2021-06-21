/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { WELCOME_SCREEN } from "./screens/WelcomeScreen";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  [WELCOME_SCREEN]: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
