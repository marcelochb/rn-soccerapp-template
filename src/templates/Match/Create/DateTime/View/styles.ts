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
    fontFamily: theme.fontFamily.italic,
  },
  attendanceError: {
    borderWidth: theme.metrics.borderWidthLarger,
    borderStyle: 'solid',
    borderColor: theme.colors.error
  },
  viewFormGroupOpponent: {
    marginLeft: theme.metrics.large,
    marginBottom: theme.metrics.largest
  },
  viewFormGroupOurTeam: {
    marginLeft: theme.metrics.large,
    marginBottom: theme.metrics.largest,
    flexDirection: 'row'
  },
  viewFormGroupWhen: {
    marginLeft: theme.metrics.large,
    marginBottom: theme.metrics.largest,
    flexDirection: 'row'
  },
  viewFormGroupAttendance: {
    marginLeft: theme.metrics.large,
    marginBottom: theme.metrics.largest,
  },
  city: { flex: 3 },
  zipCode: { flex: 1 },
});
