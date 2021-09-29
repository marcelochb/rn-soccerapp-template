import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { ListRenderItem } from "react-native";

type ModelOfItemT = {
  nickname?: string;
  name?: string;
  last_name?: string;
  player?:
  {
    position_name?: string;
  }
  created_distance?: string;
  }
export type ModelOfTemplateNotificationList<ItemT = ModelOfItemT> = {
  theme: ModelOfTheme;
  isLoading: boolean;
  data?: Array<ItemT>;
  navigateTo: (notification: ModelOfItemT) => void
}

export class TemplateNotificationList<ItemT = any> extends Component<ModelOfTemplateNotificationList<ItemT>> {}
