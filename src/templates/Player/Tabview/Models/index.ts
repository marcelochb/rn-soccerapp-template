import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export type ModelOfTemplatePlayerTabview<ItemT = any> = {
  theme: ModelOfTheme;
  firstSquadisLoading: boolean;
  firstSquadcoachingStaffData: Array<ItemT>;
  navigateToDetail: ((item: ItemT) => void);
  firstSquadgoalKeeperData: Array<ItemT>;
  firstSquadcenterBackData: Array<ItemT>;
  firstSquadleftAndRightBackData: Array<ItemT>;
  firstSquadmidifieldDefenseData: Array<ItemT>;
  firstSquadmidifieldAttackData: Array<ItemT>;
  firstSquadforwardData: Array<ItemT>;
  firstSquadBadge: number | undefined;
  secondSquadisLoading: boolean;
  secondSquadcoachingStaffData: Array<ItemT>;
  secondSquadgoalKeeperData: Array<ItemT>;
  secondSquadcenterBackData: Array<ItemT>;
  secondSquadleftAndRightBackData: Array<ItemT>;
  secondSquadmidifieldDefenseData: Array<ItemT>;
  secondSquadmidifieldAttackData: Array<ItemT>;
  secondSquadforwardData: Array<ItemT>;
  secondSquadBadge: number | undefined;
}

export class TemplatePlayerTabView extends Component<ModelOfTemplatePlayerTabview> {}