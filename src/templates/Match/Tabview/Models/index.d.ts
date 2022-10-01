import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";
import { GestureResponderEvent, ImageSourcePropType, SectionListData } from "react-native";


export type ModelOfTemplateMatchTabView<ItemT = any,SectionT = any> = {
  theme: ModelOfTheme;
  IconPlus: React.FC<React.SVGProps<SVGSVGElement>>; 
  navigateToView: (match: ItemT) => void;
  navigateToCreate: () => void;
  teamName: string;
  teamCrest?: ImageSourcePropType | undefined;
  firstTabTitle: string;
  isLoading: boolean;
  firstSquadData: Array<SectionListData<ItemT, SectionT>>;
  secondTabTitle: string;
  secondSquadData: Array<SectionListData<ItemT, SectionT>>;
  actionSheetDismiss: () => void;
  actionSheetVisible: boolean;
  actionSheetIsCheckedFirstSquad: boolean;
  actionSheetOnClickFirstSquad: () => void;
  actionSheetIsCheckedSecondSquad: boolean;
  actionSheetOnClickSecondSquad: () => void;
  actionSheetOnPress:
  | (((event: GestureResponderEvent) => void) &
      ((e: GestureResponderEvent) => void))
  | undefined;

}

export class TemplateMatchTabView extends Component<ModelOfTemplateMatchTabView> {}