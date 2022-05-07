import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { ImageSourcePropType, SectionListData } from "react-native";


export type ModelOfTemplateMatchTabView<ItemT = any,SectionT = any> = {
  theme: ModelOfTheme;
  IconPlus: React.FC<React.SVGProps<SVGSVGElement>>; 
  navigateToView: (match: ItemT) => void;
  navigateToCreate: () => void;
  teamName: string;
  teamCrest?: ImageSourcePropType | undefined;
  firstTabTitle: string;
  firstSquadIsLoading: boolean;
  firstSquadData: Array<SectionListData<ItemT, SectionT>>;
  secondTabTitle: string;
  secondSquadIsLoading: boolean;
  secondSquadData: Array<SectionListData<ItemT, SectionT>>;
}

export class TemplateMatchTabView extends Component<ModelOfTemplateMatchTabView> {}