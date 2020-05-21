function readFloat ( string ) {
    return parseFloat(string.replace(',','.'));
}

function Defibrilator ( name , longitude , latitude ) {
    this.name = name ;
    this.longitude = longitude;
    this.latitude = latitude;
}

function computeDistance ( aLongitude , aLatitude , bLongitude , bLatitude   ) {
    var x = ( bLongitude - aLongitude ) * Math.cos( ( aLatitude + bLatitude  ) / 2 );
    var y = bLatitude - aLatitude;
    return Math.sqrt( Math.pow(x,2) + Math.pow(y,2) ) * 6371;
}

function readDefibrilator () {
    var DefibrilatorArray = readline().split(";");
    return new Defibrilator ( DefibrilatorArray[1] , readFloat(DefibrilatorArray[4]) , readFloat(DefibrilatorArray[5]) );
}

const userLongitude = readFloat(readline());
const userLatitude =  readFloat(readline());

const n = parseInt(readline());

var closestDefibrilator = readDefibrilator();
var shortestDistance = computeDistance ( userLongitude , userLatitude , closestDefibrilator.longitude , closestDefibrilator.latitude );

for (var i = 1; i < n; i++) {
    var newDefibrilator = readDefibrilator ();
    var newDistance = computeDistance ( userLongitude , userLatitude , newDefibrilator.longitude , newDefibrilator.latitude );
    if( newDistance < shortestDistance ) {
        closestDefibrilator = newDefibrilator;
        shortestDistance = newDistance;
    }
}

print ( closestDefibrilator.name );
