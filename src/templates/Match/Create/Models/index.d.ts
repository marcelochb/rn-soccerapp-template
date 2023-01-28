import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { GestureResponderEvent } from "react-native";

export type ModelOfTemplateMatchCreate = {
  theme: ModelOfTheme;
  sourceCrest?: string | undefined;
  teamName: string;
  teamResponsable: string;
  teamPhone: string;
  dateValue: string;
  dateChangeText: ((text: string) => void) | undefined;
  dateError: string | boolean | undefined;
  hourValue: string;
  hourChangeText: ((text: string) => void) | undefined;
  hourError: string | boolean | undefined;
  firstSquadIsChecked: boolean;
  firstSquadOnClick: () => void;
  secondSquadIsChecked: boolean;
  secondSquadOnClick: () => void;
  confirmAttendanceError: boolean;
  confirmAttendanceDaysBeforeValue: string;
  confirmAttendanceDaysBeforeChangeText: ((text: string) => void) | undefined;
  confirmAttendanceDaysBeforeError: string | boolean | undefined;
  confirmAttendanceIsChecked: boolean;
  confirmAttendanceOnClick: () => void;
  notConfirmAttendanceIsChecked: boolean;
  notConfirmAttendanceOnClick: () => void;
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
  onSubmit: (e?: any | undefined) => void;
  onCancel: ((() => void) & (() => void)) | undefined;
  isLoading: boolean;
}

export class TemplateMatchCreate extends Component<ModelOfTemplateMatchCreate> {}