import { ModelOfTheme } from "@soccerapp/theme";
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
  firstSquadOnCheck: () => void;
  secondSquadIsChecked: boolean;
  secondSquadOnCheck: () => void;
  confirmAttendanceError: boolean;
  confirmAttendanceDaysBeforeValue: string;
  confirmAttendanceDaysBeforeChangeText: ((text: string) => void) | undefined;
  confirmAttendanceDaysBeforeError: string | boolean | undefined;
  confirmAttendanceIsChecked: boolean;
  confirmAttendanceOnCheck: () => void;
  notConfirmAttendanceIsChecked: boolean;
  notConfirmAttendanceOnCheck: () => void;
  onSubmit: (((event: GestureResponderEvent) => void) & ((e: GestureResponderEvent) => void)) | undefined;

}