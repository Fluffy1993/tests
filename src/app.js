console.log('App.js is running!');

//JSX - JavaScript XML
var app = {
    title: 'Test title',
    subtitle: 'Test subtitle'
};

var template = (
    <div>
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
        <ol>
            <li>mrdatinit</li>
            <li>second row</li>
        </ol>
    </div>
);

var user = {
 name: 'Michal',
 age: 25,
 location: 'Prague'
};
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

test
