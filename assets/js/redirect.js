/**
 * Created by keerti.nandihalli on 8/10/16.
 */
//508 alert message when user clicks on external link

$(document).ready(function(){
    $('a[target="_blank"]').click(function() {
        alert("You are now leaving Datacenters.cio.gov");
    });
});