import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

type ModelOfTemplateNotificationListItemT = {
  nickname?: string;
  name?: string;
  last_name?: string;
  player?:
  {
    position_name?: string;
  }
  created_distance?: string;
  }
export type ModelOfTemplateNotificationList<ItemT = ModelOfTemplateNotificationListItemT> = {
  theme: ModelOfTheme;
  isLoading: boolean;
  data?: Array<ItemT>;
  navigateTo: (notification: ItemT) => void;
}

export class TemplateNotificationList<ItemT = any> extends Component<ModelOfTemplateNotificationList<ItemT>> {}
