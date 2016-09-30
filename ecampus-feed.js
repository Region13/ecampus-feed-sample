
/**
 *
 * @param category The ecampus course category to retrieve. Only one category at a time may be used.
 * @param days List events up to X number of days from now. Default is 60.
 */
function ecampusEventFeed(category,days) {
    this.courseCategory = category;
    this.lookAheadDays = days;

    /**
     *
     * @returns {string}
     */
    this.getClassByCategoryFeedUrl = function () {
        //console.log("getClassByCategory Args:", this.courseCategory, this.lookAheadDays);
        return 'https://apps.esc13.net/websvc/webservices.php?method=getClassByCategory&cat=' + encodeURIComponent(this.courseCategory) +
            '&days=' + encodeURIComponent(this.lookAheadDays) + '&output=json';
    };
    this.getOnlineClassByCategoryFeedUrl = function() {
        //console.log("getClassByCategory Args:", this.courseCategory, this.lookAheadDays);
        return 'https://apps.esc13.net/websvc/webservices.php?method=getOnlineClassByCategory&cat=' + encodeURIComponent(this.courseCategory) +
            '&days=' + encodeURIComponent(this.lookAheadDays) + '&output=json';
    };
    this.getHiddenClassByCategoryFeedUrl = function() {
        //console.log("getClassByCategory Args:", this.courseCategory, this.lookAheadDays);
        return 'https://apps.esc13.net/websvc/webservices.php?method=getHiddenClassByCategory&cat=' + encodeURIComponent(this.courseCategory) +
            '&days=' + encodeURIComponent(this.lookAheadDays) + '&output=json';
    };
    /**
     *
     * @param targetElementId
     */
    this.drawClassByCategoryTable = function (targetElementId) {
        targetElementId = '#' + targetElementId;
        $(targetElementId).empty();

        var url = this.getClassByCategoryFeedUrl();

        $.getJSON(url, function (data) {
            //console.log(data);
            var output = '';
            //test for empty set or error response
            if (('status' in data) && ('response' in data) && (data.response = "Empty set")) {
                //No workshops found for this category in date range.
                output = '<div class="error-emptyset">No workshops were found in the next ' + ecampusEventFeed.lookAheadDays + ' days</div>';
            } else {
                //valid response. Draw table
                output = '<thead><tr><th>Workshop</th><th>Presenter</th><th>When</th><th>&nbsp;</th></tr></thead><tbody>';
                for (var i in data) {
                    output += '<tr>' +
                        '<td>' + '<a href="http://ecampus.esc13.net/show_class_info.html?classid=' + data[i].ClassID + '" target="_blank">' + data[i].Workshop + '</a></td>' +
                        '<td>' + data[i].Presenter + '</td>' +
                        '<td>' + data[i].Date + '</td>' +
                        '<td>' + '<a class="btn btn-primary" href="http://ecampus.esc13.net/show_class_info.html?classid=' + data[i].ClassID + '" target="_blank">Register</a></td></tr>';
                }
                output += '</tbody>';
                output = '<table class="table table-bordered">' + output + '</table>';
            }
            $(targetElementId).replaceWith(output);
        }).fail(function () {
            //Handle http error or empty response
            output = '<div class="error-http">An error occured while retrieving this feed.</div>';
            $(targetElementId).replaceWith(output);
        });
    };

    /**
     *
     * @param targetElementId
     */
    this.drawOnlineClassByCategoryTable = function (targetElementId) {
        targetElementId = '#' + targetElementId;
        $(targetElementId).empty();

        var url = this.getOnlineClassByCategoryFeedUrl();

        $.getJSON(url, function (data) {
            //console.log(data);
            var output = '';
            //test for empty set or error response
            if (('status' in data) && ('response' in data) && (data.response = "Empty set")) {
                //No workshops found for this category in date range.
                output = '<div class="error-emptyset">No workshops were found in the next ' + ecampusEventFeed.lookAheadDays + ' days</div>';
            } else {
                //valid response. Draw table
                output = '<thead><tr><th>Workshop</th><th>Open Date</th><th>Close Date</th><th>&nbsp;</th></tr></thead><tbody>';
                for (var i in data) {
                    output += '<tr>' +
                        '<td>' + '<a href="http://ecampus.esc13.net/show_class_info.html?classid=' + data[i].ClassID + '" target="_blank">' + data[i].Workshop + '</a></td>' +
                        '<td>' + data[i]["Registration Opens"] + '</td>' +
                        '<td>' + data[i]["Registration Closes"] + '</td>' +
                        '<td>' + '<a class="btn btn-primary" href="http://ecampus.esc13.net/show_class_info.html?classid=' + data[i].ClassID + '" target="_blank">Register</a></td></tr>';
                }
                output += '</tbody>';
                output = '<table class="table table-bordered">' + output + '</table>';
            }
            $(targetElementId).replaceWith(output);
        }).fail(function () {
            //Handle http error or empty response
            output = '<div class="error-http">An error occured while retrieving this feed.</div>';
            $(targetElementId).replaceWith(output);
        });
    };

    /**
     *
     * @param targetElementId
     */
    this.drawHiddenClassByCategoryTable = function (targetElementId) {
        targetElementId = '#' + targetElementId;
        $(targetElementId).empty();

        var url = this.getHiddenClassByCategoryFeedUrl();

        $.getJSON(url, function (data) {
            //console.log(data);
            var output = '';
            //test for empty set or error response
            if (('status' in data) && ('response' in data) && (data.response = "Empty set")) {
                //No workshops found for this category in date range.
                output = '<div class="error-emptyset">No workshops were found in the next ' + ecampusEventFeed.lookAheadDays + ' days</div>';
            } else {
                //valid response. Draw table
                output = '<thead><tr><th>Workshop</th><th>Presenter</th><th>When</th><th>&nbsp;</th></tr></thead><tbody>';
                for (var i in data) {
                    output += '<tr>' +
                        '<td>' + '<a href="http://ecampus.esc13.net/show_class_info.html?classid=' + data[i].ClassID + '" target="_blank">' + data[i].Workshop + '</a></td>' +
                        '<td>' + data[i].Presenter + '</td>' +
                        '<td>' + data[i].Date + '</td>' +
                        '<td>' + '<a class="btn btn-primary" href="http://ecampus.esc13.net/show_class_info.html?classid=' + data[i].ClassID + '" target="_blank">Register</a></td></tr>';
                }
                output += '</tbody>';
                output = '<table class="table table-bordered">' + output + '</table>';
            }
            $(targetElementId).replaceWith(output);
        }).fail(function () {
            //Handle http error or empty response
            output = '<div class="error-http">An error occured while retrieving this feed.</div>';
            $(targetElementId).replaceWith(output);
        });
    };
}