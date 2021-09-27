import { Popups } from "@soccerapp/ui";
import { Component } from "react";
import { GestureResponderEvent } from "react-native";
import { ModelOfTemplateProfile } from "../../../Profile/Models";


export type ModelOfTemplateNotificationDetail = ModelOfTemplateProfile & {
  acceptOnPressed: (((event: GestureResponderEvent) => void) & ((e: GestureResponderEvent) => void)) | undefined
  refusedOnPressed: ((() => void) & (() => void)) | undefined;
  popupNotificationOnHandler: () => void;
  popupNotificationText: string;
  popupNotificationType: Popups.ModelOfPopupNotificationType;
  popupNotificationVisible: boolean;
  popupConfirmationLoading: boolean;
  popupConfirmationHandleNegativeAnswer: ((() => void) & (() => void)) | undefined;
  popupConfirmationHandlePositiveAnswer: ((() => void) & (() => void)) | undefined;
  popupConfirmationLablePositiveAnswer: string;
  popupConfirmationQuestion: string;
  popupConfirmationVisible: boolean;
}

export class TemplateNotificationDetail extends Component<ModelOfTemplateNotificationDetail> {}