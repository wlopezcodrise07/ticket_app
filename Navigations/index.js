import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tab/TabNavigator';
import AuthNavigator from './login/LoginNavigator';

const MainNavigator = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn
        ? <TabNavigator />
        : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;