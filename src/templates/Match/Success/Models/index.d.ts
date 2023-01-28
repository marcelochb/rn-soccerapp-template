import { ModelOfTheme } from "@soccerapp/theme";
import { Component } from "react";

export type ModelOfTemplateMatchCreateSuccess = {
  theme: ModelOfTheme
  onClickButton: () => void;
}

export class TemplateMatchCreateSuccess extends Component<ModelOfTemplateMatchCreateSuccess> {}
