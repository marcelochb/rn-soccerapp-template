import { ModelOfTheme } from "@soccerapp/theme"
import { Component } from "react"
import { GestureResponderEvent } from "react-native"

export type ModelOfChangePasswordForm = {
  password: string;
  confirmPassword: string;
}

export type ModelOfTemplateChangePassword ={
  title: string;
  theme: ModelOfTheme;
  newPasswordValue?: string | undefined;
  newPasswordChangeText: ((text: string) => void) | undefined;
  newPasswordError?: string | boolean | undefined;
  confirmPasswordValue?: string | undefined;
  confirmPasswordChangeText: ((text: string) => void) | undefined;
  confirmPasswordError?: string | boolean | undefined;
  onSubmit: (((event: GestureResponderEvent) => void) & ((e: GestureResponderEvent) => void)) | undefined;
  isLoadingSubmit: boolean;
  onCancel: ((() => void) & (() => void)) | undefined;
}


export class TemplateChangePassword extends Component<ModelOfTemplateChangePassword> {}