import { ModelOfTheme } from "@soccerapp/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
  viewRow: { flexDirection: 'row' },
  alignItensCenter: { alignItems: 'center' },
  padding: { paddingLeft: theme.metrics.base },
  marginBottom: { marginBottom: theme.metrics.base },
  marginTop: { marginTop: theme.metrics.base },
  input: { flex: 1 },
  marginLeft: { marginLeft: theme.metrics.base },
  name: {
    color: theme.colors.textSecundary,
    fontFamily: 'Roboto-LightItalic',
  },
  attendanceError: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.error
  }
});
