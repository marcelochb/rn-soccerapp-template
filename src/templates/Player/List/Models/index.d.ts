import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";


type ModelOfTemplatePlayerListItemT = {
  nickname?: string;
  name?: string;
  avatar?: string;
  }

export type ModelOfTemplatePlayerList<ItemT = ModelOfTemplatePlayerListItemT> = {
  theme: ModelOfTheme;
  isLoading: boolean;
  navigateToDetail: ((item: ItemT) => void);
  coachingStaffData: Array<ItemT>;
  goalKeeperData: Array<ItemT>;
  centerBackData: Array<ItemT>;
  leftAndRightBackData: Array<ItemT>;
  midifieldDefenseData: Array<ItemT>;
  midifieldAttackData: Array<ItemT>;
  forwardData: Array<ItemT>;
}

export class TemplatePlayerList extends Component<ModelOfTemplatePlayerList> {}