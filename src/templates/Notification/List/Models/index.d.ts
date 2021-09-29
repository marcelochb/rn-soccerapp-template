import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export type ModelOfTemplateNotificationList<ItemT = any> = {
  theme: ModelOfTheme;
  isLoading: boolean;
  data?: Array<ItemT>;
  item: (param:ItemT) => React.ReactElement | null;
}

export class TemplateNotificationList<ItemT = any> extends Component<ModelOfTemplateNotificationList<ItemT>> {}
