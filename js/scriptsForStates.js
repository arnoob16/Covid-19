$.getJSON('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise', function(result) 
{
    addRow($("#resultTable tfoot"), result.data.total);
    result.data.statewise.forEach(el=>addRow($("#resultTable tbody"),el));
    
});

function addRow(parent, el)
{
  var tr = $("<tr/>");
  
  tr.append($("<td>"+(el.state == undefined?"Overall":el.state)+"</td>"));
  tr.append($("<td>"+el.confirmed+"</td>"));
  tr.append($("<td>"+el.recovered+"</td>"));
  tr.append($("<td>"+el.deaths+"</td>"));
  tr.append($("<td>"+el.active+"</td>"));
  parent.append(tr);
}