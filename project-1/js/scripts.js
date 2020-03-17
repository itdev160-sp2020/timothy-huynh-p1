//welcome message
var user = 'Listeners';
var salutation = 'Welcome, ';
var greeting = salutation + user + '! Join us in building a community!';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Subscription Prices
var tier1Sub = 4.99
var tier2Sub = 9.99
var tier3Sub = 24.99
    tier1SubEl = document.getElementById('tier1');
    tier2SubEl = document.getElementById('tier2');
    tier3SubEl = document.getElementById('tier3');

tier1SubEl.textContent = tier1Sub.toFixed(2);
tier2SubEl.textContent = tier2Sub.toFixed(2);
tier3SubEl.textContent = tier3Sub.toFixed(2);