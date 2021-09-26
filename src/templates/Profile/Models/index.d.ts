import { ModelOfTheme } from "@soccerapp/theme";

export type ModelOfTemplateProfile = {
  isStatusBarLight?: boolean;
  isViewOnly?: boolean;
  theme: ModelOfTheme;
  nickNameValue: string | undefined;
  nickNameChangeText: ((text: string) => void) | undefined;
  nickNameError: string | boolean | undefined;
  lastkNameValue: string | undefined;
  lastkNameChangeText: ((text: string) => void) | undefined;
  lastkNameError: string | boolean | undefined;
  nameValue: string | undefined;
  nameChangeText: ((text: string) => void) | undefined;
  nameError: string | boolean | undefined;
  bithDateValue: string | undefined;
  bithDateChangeText: ((text: string) => void) | undefined;
  bithDateError: string | boolean | undefined;
}

