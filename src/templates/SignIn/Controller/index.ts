import { Animated, Easing,Keyboard } from "react-native";
import { useEffect } from "react";
import { ModelOfSignInMoveView } from "../Models";

export const useTemplateSignInController = () => {
  const heightStart = 800;
  const heightStartViewUp = 40;
  const heightViewUpKeyboard = 0;
  const moveViewUp = new Animated.ValueXY({ x: 0, y: heightStart });
  const moveView = (moveIn: ModelOfSignInMoveView) => {
    Animated.timing(moveViewUp,
      {
        toValue: { x: moveIn.x, y: moveIn.y },
        easing: Easing.ease,
        duration: moveIn.duration,
        useNativeDriver: false
      }).start()
  }

  const moveViewUpStart = () => {
    moveView({x:0,y:heightStartViewUp,duration:500});
  }

  const moveViewUpByKeyboard = () => {
    moveView({x:0,y:heightViewUpKeyboard,duration:500});
  }

  useEffect(
    () => {
      setTimeout(() => {
        moveViewUpStart()
      }, 500)
    }, []
  );

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", moveViewUpByKeyboard);
    Keyboard.addListener("keyboardWillHide", moveViewUpStart);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardWillShow", moveViewUpByKeyboard);
      Keyboard.removeListener("keyboardWillHide", moveViewUpStart);
    };
  }, []);

  return {handleController: {moveViewUp}}
}
