import React from 'react';
import Chatbot from './components/Chatbot';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header>
                <h1>Welcome to E-Shop Chatbot</h1>
            </header>
            <main>
                <Chatbot />
            </main>
        </div>
    );
};

export default App;