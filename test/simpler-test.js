let google = require("./../lib/google.js");

google.resultsPerPage = 5;
let count=0;
google('oh no whats going on', function (err, res) {
    if (err) console.error(err)
    for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
        console.log(link.title + ' - ' + link.href)
        console.log(link.description + "\n")
    }
    //res.next for pagination
    if (count == 0) {
        count = 1;
        res.next();
    }
})