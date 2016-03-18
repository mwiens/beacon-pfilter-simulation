
var beacons = [
    {label: "b1", x: 0, y: 500, color: "#2069ac", active: true},
    {label: "b2", x: 866, y: 0, color: "#358913", active: true},
    {label: "b3", x: 866, y: 1000, color: "#b10292", active: true},
    {label: "b4", x: 866, y: 1000, color: "#b1a602", active: false},
    {label: "b5", x: 900, y: 300, color: "#b15402", active: false}
]

var particles = []; // format {x:43,y:32,p:0.5}

var esitmatedPosition = {x: 0, y: 0, color: "rgba(0,0,255,0.5)"};

var simulationParams = {
    noOfParticles: 10000,
    movementStdDev: 200, // simulate movement of the target in y direction with gaussian distribution of this st. dev.
    signalRelativeStdDev: 0.10, // signal/error standard deviation relative to distance
    showParticles: true
};

function get_distance(rssi) {
    txPower = -63;

  if (rssi == 0) {
    return -1.0; // if we cannot determine accuracy, return -1.
  }

  ratio = rssi*1.0/txPower;
  if (ratio < 1.0) {
    return Math.pow(ratio,10);
  }
  else {
    distance =  (0.89976)*Math.pow(ratio,7.7095) + 0.111;    
    
    //reduce to 2D using Pythagoras and vertical difference of the beaconss of 3m 
    
    twod_distance = Math.sqrt(Math.pow(distance, 2)-Math.pow(3, 2))
  }
}
