'use strict';

console.log('App.js is running!');

//JSX - JavaScript XML
var app = {
    title: 'Test title',
    subtitle: 'Test subtitle'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'first row'
        ),
        React.createElement(
            'li',
            null,
            'second row'
        )
    )
);

var user = {
    name: 'Michal',
    age: 25,
    location: 'Prague'
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
