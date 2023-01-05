import { ModelOfTheme } from "@soccerapp/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  marginBottom: { marginBottom: theme.metrics.base },
  viewTopLeft: {
    flex: 1
  },
  image: {
    justifyContent: 'center',
    marginLeft: theme.metrics.base
  },
  viewUserType: {
    flexDirection: 'row',
    paddingLeft: theme.metrics.large,
    paddingTop: theme.metrics.small
  },
  viewUserTypeError: {
    borderWidth: theme.metrics.borderWidthLarger,
    borderStyle: 'solid',
    borderColor: theme.colors.textHighlight
  },
  checkBoxPlayerSoccer: {
    marginLeft: theme.metrics.large,
  },
  subTitlePosition: { marginTop: theme.metrics.base, marginBottom: theme.metrics.small },
  viewLinePosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.metrics.large,
    marginBottom: theme.metrics.base,
  },
  checkBoxPosition: {
    width: 100,
  },
  marginTop: { marginTop: theme.metrics.small },
  button: { marginTop: theme.metrics.large }
});
