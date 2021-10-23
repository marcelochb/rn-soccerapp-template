import { ModelOfTheme } from "@soccerapp/theme";
import { StyleSheet } from "react-native";

export const styles = (theme:ModelOfTheme) => StyleSheet.create({
  viewRow: { flexDirection: 'row' },
  alignItensCenter: { alignItems: 'center' },
  padding: { paddingLeft: theme.metrics.base },
  marginBottom: { marginBottom: theme.metrics.base },
  marginTop: { marginTop: theme.metrics.base },
  city: { flex: 3 },
  zipCode: { flex: 1 },
  marginLeft: { marginLeft: theme.metrics.base },
  name: {
    color: theme.colors.textSecundary,
    fontFamily: 'Roboto-LightItalic',
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.elementsSecundary,
    width: 30,
    marginVertical: theme.metrics.small,
  }
});