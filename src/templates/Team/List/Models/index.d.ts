import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";


type ModelOfTemplateTeamListItemT = {
  name: string;
  responsable: string;
  phone: string;
  crest?: string | undefined;
}


export type ModelOfTemplateTeamList<ItemT = ModelOfTemplateTeamListItemT> = {
  theme: ModelOfTheme;
  data?: Array<ItemT>;
  isLoading: boolean;
  editOnPressed: (team: ItemT) => void;
  selectOnPressed: (team: ItemT) => void;
  navigateToTeamCreate: () => void;
}

export class TemplateTeamList<ItemT = any> extends Component<ModelOfTemplateTeamList<ItemT>> {}