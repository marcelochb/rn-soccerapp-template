import { StyleSheet } from "react-native";
import { ModelOfTheme } from "@src/theme";

export const styles = (theme: ModelOfTheme) => {
  const { colors, metrics } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.elements,
    },
    viewTop: {
      height: '10%',
      alignItems: 'center',
      flexDirection: 'row',
      padding: metrics.small,
    },
    viewBottom: {
      height: 800,
      padding: metrics.large,
      backgroundColor: colors.background,
      borderTopStartRadius: metrics.radiusLargest,
      borderTopEndRadius: metrics.radiusLargest
    },
    viewButtons: {
      paddingTop: metrics.largest
    },
    imageLogo: {
      width: 50,
      height: 50,
      resizeMode: 'stretch',
      marginLeft: metrics.base
    },
    viewTitle: { marginLeft: metrics.large },
    password: {
      marginTop: metrics.base
    },
    buttonLink: { marginTop: metrics.largest },
    forgotPassword: { textAlign: 'right' },
    signUp: { color: colors.textSecundary, textAlign: 'right' }
  })
}
