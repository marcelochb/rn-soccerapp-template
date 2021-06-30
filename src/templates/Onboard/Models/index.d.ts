import {Component} from 'react';
import { ModelOfTheme } from "@soccerapp/theme";
import { ImageSourcePropType, GestureResponderEvent } from "react-native";

export type ModelOfTemplateOnboard = {
  theme: ModelOfTheme;
  logo: ImageSourcePropType;
  buttonLabel: string;
  bodyText: string;
  buttonOnPress: (((event: GestureResponderEvent) => void) & ((e: GestureResponderEvent) => void)) | undefined
}

export class TemplateOnboard extends Component<ModelOfTemplateOnboard> {}
