const renderApp = () => {
    console.log('Rendering App');
    return '[+]Loading Application';
}

const renderLogin = () => {
    return '[-]Please Login.....'
}

const authenticated = true

//ternary operator
authenticated ? renderApp() : renderLogin();

/*
\ternary>node examp.js
Rendering App
 */