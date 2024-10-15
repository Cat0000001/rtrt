import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './AuthContext';
import Home from './Home'; // Create this component for your homepage
const App = () => {
return (
<Router>
<AuthContextProvider>
<Routes>
<Route path="/" element={<Home />} />
{/* Add other routes as needed */}
</Routes>
</AuthContextProvider>
</Router>
);
};
export default App;