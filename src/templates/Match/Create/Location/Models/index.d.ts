import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { GestureResponderEvent } from "react-native";

export type ModelOfTemplateMatchCreateLocation = {
  theme: ModelOfTheme;
  sourceCrest: string | undefined;
  name: string;
  responsable: string;
  phone: string;
  dateAndsquad: string;
  confirmAttendance: string;
  soccerFieldNameValue: string;
  soccerFieldNameChangeText: ((text: string) => void) | undefined;
  soccerFieldNameError: string | boolean | undefined;
  zipCodeValue: string;
  zipCodeChangeText: ((text: string) => void) | undefined;
  streetValue: string;
  streetChangeText: ((text: string) => void) | undefined;
  addressNumberValue: string;
  addressNumberChangeText: ((text: string) => void) | undefined;
  neighborhoodValue: string;
  neighborhoodChangeText: ((text: string) => void) | undefined;
  startAnimateInput: boolean;
  complementValue: string;
  complementChangeText: ((text: string) => void) | undefined;
  cityValue: string;
  cityChangeText: ((text: string) => void) | undefined;
  ufValue: string;
  ufChangeText: ((text: string) => void) | undefined;
  onSubmit: (((event: GestureResponderEvent) => void) & ((e: GestureResponderEvent) => void)) | undefined;
  isLoading: boolean;
  onCancel: ((() => void) & (() => void)) | undefined;
}

export class TemplateMatchCreateLocation extends Component<ModelOfTemplateMatchCreateLocation> {}