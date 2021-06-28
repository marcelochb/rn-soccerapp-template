import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { PageWrapper, Buttons, Texts } from '@soccerapp/ui';
import { ModelOfTemplateOnboard } from '../Models';
import { ModelOfTheme } from '@src/theme';


export const TemplateOnboard: React.FC<ModelOfTemplateOnboard> = ({
  theme,
  buttonLabel,
  buttonOnPress,
  bodyText,
  logo,
}) => {
  return (
    <PageWrapper theme={theme}
      Header={
        <View style={styles(theme).viewTop}>
          <Image style={styles(theme).imageLogo} source={logo} />
        </View>
      }
    >
      <View style={styles(theme).viewBottom}>
        <Texts.Body theme={theme}>{bodyText}</Texts.Body>
        <Buttons.Base theme={theme} label={buttonLabel}
          onPress={buttonOnPress} />
      </View>
    </PageWrapper>
  );
}

const styles = (theme: ModelOfTheme) => {
  const { colors, metrics } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    viewTop: {
      alignItems: 'center',
      paddingBottom: metrics.base
    },
    imageLogo: {
      width: 300,
      height: 350,
      resizeMode: 'stretch',
      borderRadius: 50,
    },
    viewBottom: {
      flex: 1,
      paddingHorizontal: metrics.large,
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    text: {
      marginTop: metrics.base
    }
  })
};
