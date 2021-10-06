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
  coachingStaffData: Array<ItemT>;
  coachingStaffNavigateTo: ((item: ItemT) => void);
  goalKeeperData: Array<ItemT>;
  goalKeeperNavigateTo: ((item: ItemT) => void);
  centerBackData: Array<ItemT>;
  centerBackNavigateTo: ((item: ItemT) => void);
  leftAndRightBackData: Array<ItemT>;
  leftAndRightBackNavigateTo: ((item: ItemT) => void);
  midifieldDefenseData: Array<ItemT>;
  midifieldDefenseNavigateTo: ((item: ItemT) => void);
  midifieldAttackData: Array<ItemT>;
  midifieldAttackNavigateTo: ((item: ItemT) => void);
  forwardData: Array<ItemT>;
  forwardNavigateTo: ((item: ItemT) => void);
}

export class TemplatePlayerList extends Component<ModelOfTemplatePlayerList> {}