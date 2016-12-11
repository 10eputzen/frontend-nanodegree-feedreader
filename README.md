# Udacity Feedreader Testing

## Installation

 1. Download or clone the repository
 2. Unzip the repository
 3. Open the index.html with any Browser

**RSS Feeds:**
Can be tested by manipulating the all feeds array. Deleting the content of the array or deleting its attributes will cause the test to fail.

**The menu**
Change the class on the body to anything than menu-hidden will cause the test to fail.

Changing the following line will cause the test to fail

```js
    menuIcon.on('click', function() {
        $('body').toggleClass('menu-hidden');
    });
```
**New Feed Selection**
Deleting the content of the allFeeds array will cause the test to fail.

Loading the initial feed (feed 0) will cause the test to fail.