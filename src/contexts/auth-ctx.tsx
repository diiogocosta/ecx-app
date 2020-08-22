import {createContext} from 'react';
import configBootstrapNavigation from '../navigation/config';

const AuthContext = createContext({token: null});

const AuxContextProvider: React.FC = ({children}) => {
  const {loading, deepLinkUserId, token} = configBootstrapNavigation();

  return (
    <AuthContext.Provider
      value={{token: null}}
      children={children}></AuthContext.Provider>
  );
};

export default AuxContextProvider;
