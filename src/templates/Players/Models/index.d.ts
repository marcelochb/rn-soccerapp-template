import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";


type ModelOfTemplatePlayersItemT = {
  nickname?: string;
  name?: string;
  avatar?: string;
  }

export type ModelOfTemplatePlayers<ItemT = ModelOfTemplatePlayersItemT> = {
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

export class TemplatePlayers extends Component<ModelOfTemplatePlayers> {}