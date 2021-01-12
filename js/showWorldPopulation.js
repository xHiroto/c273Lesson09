$(document).ready(function () {
    var data = [];
    var labels = [];
    $.ajax({
        type: "GET",
        url: "http://localhost/c273/P09/getStatistics.php",
        cache: false,
        dataType: "JSON",
        success: function (response) {

 

            for (i = 0; i < response.length; i++) {
                data.push(response[i].population);
                labels.push(response[i].country);
            }
            var barChart = new Chart($("#barChart"), {
                type: 'horizontalBar',
                data: {
                    datasets: [{
                            data: data,
                            backgroundColor: "lightblue",
                            label: 'Population'
                        }],
                    labels: labels
                },
                options: {
                    responsive: true
                }
            });
        },
        error: function (obj, textStatus, errorThrown) {
            console.log("Error " + textStatus + ": " + errorThrown);
        }
    });


});
 