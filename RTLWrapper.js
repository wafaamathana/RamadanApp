import React, {useEffect} from 'react';
import {I18nManager} from 'react-native';

const RTLWrapper = ({children}) => {
  useEffect(() => {
    // Enable RTL right to left
    //علشان نثبت ال app
    I18nManager.forceRTL(true);
    // Allow RTL
    I18nManager.allowRTL(true);

    return () => {
      //بتعكس الحالات
      // Reset RTL settings when the component unmounts
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
    };
  }, []);

  return children;
};

export default RTLWrapper;
