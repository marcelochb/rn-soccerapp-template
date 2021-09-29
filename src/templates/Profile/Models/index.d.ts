import { ModelOfTheme } from "@soccerapp/theme";
import { Popups } from "@soccerapp/ui";
import { Component } from "react";
import { GestureResponderEvent } from "react-native";

export type ModelOfTemplateProfile = {
  isScrollForm?: boolean | undefined;
  isStatusBarLight?: boolean;
  isViewOnly?: boolean;
  theme: ModelOfTheme;
  nickNameValue: string | undefined;
  nickNameChangeText: ((text: string) => void) | undefined;
  nickNameError: string | boolean | undefined;
  lastNameValue: string | undefined;
  lastNameChangeText: ((text: string) => void) | undefined;
  lastNameError: string | boolean | undefined;
  avatarOnPress: (() => void) | undefined;
  avatarSource: string | undefined;
  avatarError: string | boolean | undefined;
  nameValue: string | undefined;
  nameChangeText: ((text: string) => void) | undefined;
  nameError: string | boolean | undefined;
  birthDateValue: string | undefined;
  birthDateChangeText: ((text: string) => void) | undefined;
  birthDateError: string | boolean | undefined;
  coachingStaffIsChecked: boolean;
  coachingStaffClick: () => void;
  playerIsChecked: boolean;
  playerClick: () => void;
  typeUserIsError: string | boolean | undefined;
  typeUserErrorText: string | undefined;
  goalKeeperIsChecked: boolean;
  goalKeeperClick: () => void;
  leftBackIsChecked: boolean;
  leftBackClick: () => void;
  rightBackIsChecked: boolean;
  rightBackClick: () => void;
  centralBackIsChecked: boolean;
  centralBackClick: () => void;
  midfielderDefensiveIsChecked: boolean;
  midfielderDefensiveClick: () => void;
  midifielderAttackingIsChecked: boolean;
  midifielderAttackingClick: () => void;
  forwardIsChecked: boolean;
  forwardClick: () => void;
  firstSquadIsChecked: boolean;
  firstSquadClick: () => void;
  secondSquadIsChecked: boolean;
  secondSquadClick: () => void;
  caracteristicValue: string | undefined;
  caracteristicChange: ((text: string) => void) | undefined;
  onSubmit?: (((event: GestureResponderEvent) => void) & ((e: GestureResponderEvent) => void)) | undefined;
  isloadingSubmit?: boolean | undefined;
  onCancel?: ((() => void) & (() => void)) | undefined;
  photoPopupDismiss?: () => void;
  photoPopupSelectFromGalery?: () => void;
  photoPopupTakePhoto?: () => void;
  photoPopupVisible?: boolean;
  popupNotificationOnHandler?: () => void;
  popupNotificationText?: string;
  popupNotificationType?: Popups.ModelOfPopupNotificationType;
  popupNotificationVisible?: boolean;
}

export class TemplateProfile extends Component<ModelOfTemplateProfile> {}