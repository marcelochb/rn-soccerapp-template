import { Component } from "react";
import { GestureResponderEvent } from "react-native";
import { ModelOfTheme } from "@soccerapp/theme";

export type ModelOfTemplateSignUp = {
  theme: ModelOfTheme;
  title: string;
  emailValue: string;
  emailChangeText?: ((text: string) => void) | undefined
  passwordlValue: string;
  passwordlChangeText?: ((text: string) => void) | undefined
  passwordError?: string | boolean | undefined;
  passwordErrorText: string | undefined;
  confirmpasswordlValue: string;
  confirmpasswordlChangeText?: ((text: string) => void) | undefined
  confirmpasswordError?: string | boolean | undefined;
  notificationOnHandler: () => void;
  notificationText: string;
  notificationType: 'Sucesso' | 'Atenção' | 'Erro';
  notificationVisible: boolean;
  onSubmit: (((event: GestureResponderEvent) => void) & ((e: GestureResponderEvent) => void)) | undefined;
  isLoadingSubmit?: boolean | undefined;
  onCancel: | ((() => void) & (() => void)) | undefined;
}

export class TemplateSignUp extends Component<ModelOfTemplateSignUp> {}