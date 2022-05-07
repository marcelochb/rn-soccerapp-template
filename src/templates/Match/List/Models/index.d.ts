import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { DefaultSectionT, ImageSourcePropType, SectionListData } from "react-native";

type ItemData = {
  monthDay: string;
  weekDay: string;
  matchHour: string;
  teamCrest: string;
  teamName: string;
}

type ModelOfTemplateMatchListItemT = {
  yearMonth?: string;
  data: ItemData[];
  }

export type ModelOfTemplateMatchList<ItemT = ItemData,SectionT = ModelOfTemplateMatchListItemT> = {
  theme: ModelOfTheme;
  isLoading: boolean;
  teamName: string;
  teamCrest?: ImageSourcePropType | undefined;
  data: Array<SectionListData<ItemT, SectionT>>;
  navigateToView: (match: ItemT) => void;
  navigateToCreate: () => void;
  IconPlus: React.FC<React.SVGProps<SVGSVGElement>>;
}

export class TemplateMatchList<ItemT = any,SectionT= DefaultSectionT> extends Component<ModelOfTemplateMatchList<ItemT,SectionT>> {}
