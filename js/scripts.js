$.getJSON('https://corona.lmao.ninja/countries/IND', function(data) 
{
    var total_cases = data.cases
     var deaths = data.deaths
     var recovered = data.recovered
     var new_cases = data.todayCases
    $(".total_cases").html(total_cases);
    $(".deaths").html(deaths);
    $(".recovered").html(recovered);
    $(".new_cases").html(new_cases);
});