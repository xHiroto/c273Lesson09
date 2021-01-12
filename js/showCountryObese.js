  $(document).ready(function () {
                $("#idCountry").change(function () {
                    var countryID = $("#idCountry").val();
                    console.log(countryID);
                    $.ajax({
                        type: "GET",
                        url: "http://localhost/c273/P09/getCountryDetails.php",
                        cache: false,
                        data: "id=" + countryID,
                        dataType: "JSON",
                        success: function (response) {
                             var message = "<thead></th><th>Population</th><th>obese</th></tr></thead>";
                            
                             message += "<tbody><tr><td>" + response.population + "</td><td>"
                                    + response.obese + "</td></tr></tbody>";
                            

                            $("#obeseTable").html(message);
                        }
                    });

                });


            });