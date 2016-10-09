var text = '{ "weeks": [ { "week": "34", "days": [ { "day": "monday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" }, { "day": "tuesday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" }, { "day": "wednesday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" }, { "day": "thursday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" }, { "day": "friday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" } ] }, { "week": "35", "days": [ { "day": "monday", "reg": "sallad", "veg": "sallad2" }, { "day": "tuesday", "reg": "kött", "veg": "morot" }, { "day": "wednesday", "reg": "bröd", "veg": "Stekt filé med många olika saker i som tar upp lång plats och som måste se snyggt ut" }, { "day": "thursday", "reg": "Idag finns det ingen vegetarisk mat", "veg": null }, { "day": "friday", "reg": "köttfärslimpa", "veg": "cornfärsbiffar" } ] } ] }';

var obj = JSON.parse(text);

//vecka
document.getElementById('veckarubrik').innerHTML =
'Matsedel vecka ' + obj.weeks[1].week;

document.getElementById('matsedel').innerHTML =
//mån
  obj.weeks[1].days[0].day + "<br>" +
'Dagens rätt: ' + obj.weeks[1].days[0].reg + "<br>" +
'Vegetariskt: ' + obj.weeks[1].days[0].veg + "<br>" + "<br>" +
//tis
  obj.weeks[1].days[1].day + "<br>" +
'Dagens rätt: ' + obj.weeks[1].days[1].reg + "<br>" +
'Vegetariskt: ' + obj.weeks[1].days[1].veg + "<br>" + "<br>" +
//ons
  obj.weeks[1].days[2].day + "<br>" +
'Dagens rätt: ' + obj.weeks[1].days[2].reg + "<br>" +
'Vegetariskt: ' + obj.weeks[1].days[2].veg + "<br>" + "<br>" +
//tor
  obj.weeks[1].days[3].day + "<br>" +
'Dagens rätt: ' + obj.weeks[1].days[3].reg + "<br>" +
'Vegetariskt: ' + obj.weeks[1].days[3].veg + "<br>" + "<br>" +
//fre
  obj.weeks[1].days[4].day + "<br>" +
'Dagens rätt: ' + obj.weeks[1].days[4].reg + "<br>" +
'Vegetariskt: ' + obj.weeks[1].days[4].veg + "<br>" + "<br>";
