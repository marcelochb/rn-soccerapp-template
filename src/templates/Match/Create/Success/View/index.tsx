import React from 'react';
import { PageWrapper, Texts, Buttons } from '@soccerapp/ui';
import { ModelOfTemplateMatchCreateSuccess } from '../Models';
import IconConfirmed from '@src/assets/Icons/iconConfirmed.svg';
import { View } from 'react-native';

export const TemplateMatchCreateSuccess:
  React.FC<ModelOfTemplateMatchCreateSuccess> = ({
    theme,
    onClickButton
  }) => {
    return (
      <PageWrapper theme={theme} isStatusBarLight>
        <View style={{ justifyContent: 'space-evenly', flex: 1 }}>

          <Texts.Title theme={theme}>Boa, jogo marcado!</Texts.Title>
          <IconConfirmed width={400} height={400} />
          <Buttons.Base
            theme={theme}
            label='OK'
            isOutline
            onPress={onClickButton}
          />
        </View>
      </PageWrapper>
    );
  }

