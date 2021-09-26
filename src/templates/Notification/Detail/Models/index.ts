import { RouteProp } from "@react-navigation/native";
import { ModelOfTheme } from "@soccerapp/theme";
import { ModelOfTableNotification } from "@src/database/Model";

type ModelOfNavigateParameters = {
  params: {
    notification: ModelOfTableNotification;
  };
};

export type ModelOfNotificationDetailPageParameters = RouteProp<
  ModelOfNavigateParameters,
  'params'
>;

export type  ModelOfPopupNotificationType = 'Sucesso' | 'Atenção' | 'Erro'

export type ModelOfTemplateNotificationDetail = {
  theme: ModelOfTheme;
}