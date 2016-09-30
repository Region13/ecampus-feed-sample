<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>E-Campus Feed</title>

    <!-- cloud jquery. !-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-compat/3.0.0-alpha1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css" />

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</head>
<body>
<div class="container">

    <h1>On campus workshops (without hidden classes) </h1>
    <div id="workshopsHere">Should display a list of in-person workshops.</div>

    <h1>On campus workshops ( + hidden )</h1>
    <div id="secretWorkshops">Should display a list of published workshops which are hidden from the catalog.</div>

    <h1>Online (WBT) workshops</h1>
    <div id="workshopsInternet">Should display a list of online workshops.</div>

    <noscript>Javascript is disabled. Can't load workshops.</noscript>
</div>
<script src="ecampus-feed.js"></script>
<script type="text/javascript">

    $(document).ready(function(){
        /*
         * Example usage:
         * Specify the course category and the days to look ahead here.
         */
       var feed = new ecampusEventFeed('math',10);
       //Then choose which feed to display and specify the element ID on the page.
       //This will replace the element.
       feed.drawClassByCategoryTable('workshopsHere');
       feed.drawOnlineClassByCategoryTable('workshopsInternet');
       feed.drawHiddenClassByCategoryTable('secretWorkshops');
    });

</script>
</body>
</html>