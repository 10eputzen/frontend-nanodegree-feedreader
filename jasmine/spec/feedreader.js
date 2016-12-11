/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('should have a URL and the URL should not be empty', function() {

            allFeeds.forEach(function(entry) {
                expect(entry.url).toBeDefined();
                expect(entry.url.length).not.toBe(0);
            });

        });


        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a name and the name should not be empty', function() {

            allFeeds.forEach(function(entry) {
                expect(entry.name).toBeDefined();
                expect(entry.name.length).not.toBe(0);
            });

        });

    });


    describe('The menu ', function() {
        var body = $('body');
        var menuIcon = $('.menu-icon-link');
        /* Ensures the menu element is
         * hidden by default.
         */
        it('should be hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* Ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it('should show when clicked', function() {
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });
    describe('Initial Entries ', function() {


        /* Ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);

        });

        it('should contain at least one element', function() {
            var entries = $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });
    describe('New Feed Selection ', function() {
        var contentOld, contentNew;
        /* Ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done) {
            //loading two different feeds
            loadFeed(0, function() {
                contentOld = $('.feed').text();
                loadFeed(1, function() {
                    contentNew = $('.feed').text();
                    done();
                });
            });

        });

        //compare the two feeds, created before
        it('should change when loaded with new content', function() {
            expect(contentNew).not.toBe(contentOld);
        });

    });





}());
