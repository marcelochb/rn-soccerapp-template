import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { GestureResponderEvent } from "react-native";

export type ModelOfTemplateTeamCreate = {
  isViewOnly?: boolean;
  theme: ModelOfTheme;
  nameValue: string | undefined;
  nameChangeText: ((text: string) => void) | undefined;
  nameError: string | boolean | undefined;
  responsableValue: string | undefined;
  responsableChangeText: ((text: string) => void) | undefined;
  responsableError: string | boolean | undefined;
  phoneValue: string | undefined;
  phoneChangeText: ((text: string) => void) | undefined;
  phoneError: string | boolean | undefined;
  noteValue: string | undefined;
  noteChangeText: ((text: string) => void) | undefined;
  avatarOnPress: (() => void) | undefined;
  avatarSource: string | undefined;
  onSubmit: (e?: any | undefined) => void;
  isloadingSubmit?: boolean | undefined;
  onCancel?: ((() => void) & (() => void)) | undefined;
  photoPopupDismiss: () => void;
  photoPopupSelectFromGalery: () => void;
  photoPopupTakePhoto: () => void;
  photoPopupVisible: boolean;
}

export class TemplateTeamCreate extends Component<ModelOfTemplateTeamCreate> {}