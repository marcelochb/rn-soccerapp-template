import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export type ModelOfTemplatePlayerTabview<ItemT = any> = {
  theme: ModelOfTheme;
  firstSquadisLoading: boolean;
  firstSquadcoachingStaffData: Array<ItemT>;
  firstSquadcoachingStaffNavigateTo: ((item: ItemT) => void);
  firstSquadgoalKeeperData: Array<ItemT>;
  firstSquadgoalKeeperNavigateTo: ((item: ItemT) => void);
  firstSquadcenterBackData: Array<ItemT>;
  firstSquadcenterBackNavigateTo: ((item: ItemT) => void);
  firstSquadleftAndRightBackData: Array<ItemT>;
  firstSquadleftAndRightBackNavigateTo: ((item: ItemT) => void);
  firstSquadmidifieldDefenseData: Array<ItemT>;
  firstSquadmidifieldDefenseNavigateTo: ((item: ItemT) => void);
  firstSquadmidifieldAttackData: Array<ItemT>;
  firstSquadmidifieldAttackNavigateTo: ((item: ItemT) => void);
  firstSquadforwardData: Array<ItemT>;
  firstSquadforwardNavigateTo: ((item: ItemT) => void);
  firstSquadBadge: number | undefined;
  secondSquadisLoading: boolean;
  secondSquadcoachingStaffData: Array<ItemT>;
  secondSquadcoachingStaffNavigateTo: ((item: ItemT) => void);
  secondSquadgoalKeeperData: Array<ItemT>;
  secondSquadgoalKeeperNavigateTo: ((item: ItemT) => void);
  secondSquadcenterBackData: Array<ItemT>;
  secondSquadcenterBackNavigateTo: ((item: ItemT) => void);
  secondSquadleftAndRightBackData: Array<ItemT>;
  secondSquadleftAndRightBackNavigateTo: ((item: ItemT) => void);
  secondSquadmidifieldDefenseData: Array<ItemT>;
  secondSquadmidifieldDefenseNavigateTo: ((item: ItemT) => void);
  secondSquadmidifieldAttackData: Array<ItemT>;
  secondSquadmidifieldAttackNavigateTo: ((item: ItemT) => void);
  secondSquadforwardData: Array<ItemT>;
  secondSquadforwardNavigateTo: ((item: ItemT) => void);
  secondSquadBadge: number | undefined;
}

export class TemplatePlayerTabView extends Component<ModelOfTemplatePlayerTabview> {}