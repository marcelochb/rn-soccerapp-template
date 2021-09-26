import { ModelOfTheme } from "@soccerapp/theme";
import { ImageOrVideo } from "react-native-image-crop-picker";

export type ModelOfTemplateProfile = {
  isStatusBarLight?: boolean;
  isViewOnly?: boolean;
  theme: ModelOfTheme;
}

