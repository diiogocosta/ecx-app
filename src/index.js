import React from 'react';
import Routes from './routes';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faFacebookF} from '@fortawesome/free-brands-svg-icons';

library.add(faCheckSquare, faCoffee, faFacebook, faFacebookF);

const App = () => <Routes />;

export default App;
