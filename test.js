var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
var inputId = "#lst-ib";
var searchPhrase = "babuko";
var clickButton = '[name="btnK"]';
var enter = "\uE007";
var waitFunction = () => {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve(true)
    }, 3000);
  });
}
console.log('eloszka');
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .setValue(inputId, searchPhrase)
    .keys(enter)
    .waitUntil(waitFunction)
    .end();
