import { Component } from "react";
import { ImageSourcePropType, NativeSyntheticEvent, 
  TextInputSubmitEditingEventData, GestureResponderEvent } from "react-native";
import { ModelOfTheme } from "@soccerapp/theme";

export type ModelOfTemplateSignIn = {
  theme: ModelOfTheme;
  logo: ImageSourcePropType;
  title: string;
  subTitle: string;
  emailValue?: string | undefined
  emailOnChangeText?: ((text: string) => void) | undefined
  passwordValue?: string | undefined
  passwordOnChangeText?: ((text: string) => void) | undefined
  passwordOnSubmitEditing?: ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void) | undefined
  buttonSignInOnPress: (((event: GestureResponderEvent) => void) & ((e: GestureResponderEvent) => void)) | undefined
  buttonSignInIsLoading?: boolean | undefined
  buttonSignUpOnPress: ((() => void) & (() => void))
  buttonCancelOnPress: ((() => void) & (() => void))
  signUpPopupVisible: boolean;
  signUpPopupOnDismiss: () => void;
  notificationOnHandler: () => void;
  notificationText: string;
  notificationType: 'Sucesso' | 'Atenção' | 'Erro';
  notificationVisible: boolean;
  signUpPopupFirstButtonLabel: string;
  signUpPopupFirstButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  signUpPopupFirstButtonOnPress: ((() => void) & (() => void))
  signUpPopupSecondButtonLabel: string;
  signUpPopupSecondButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  signUpPopupSecondButtonOnPress: ((() => void) & (() => void))
  signUpPopupTertiaryButtonLabel: string;
  signUpPopupTertiaryButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  signUpPopupTertiaryButtonOnPress: ((() => void) & (() => void))

}

export type ModelOfSignInMoveView = {
  x: number,
  y: number,
  duration: number
}

export class TemplateSignIn extends Component<ModelOfTemplateSignIn> {}