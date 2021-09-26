import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { GestureResponderEvent } from "react-native";

export type ModelOfMatchCreateDateTimeTemplate = {
  theme: ModelOfTheme;
  sourceCrest?: string | undefined;
  teamName: string;
  teamResponsable: string;
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
  onSubmit: (((event: GestureResponderEvent) => void) & ((e: GestureResponderEvent) => void)) | undefined;
  onCancel: ((() => void) & (() => void)) | undefined;
}

export class MatchCreateDateTimeTemplate extends Component<ModelOfMatchCreateDateTimeTemplate> {}