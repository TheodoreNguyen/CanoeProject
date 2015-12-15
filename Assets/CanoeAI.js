#pragma strict

function Start () {

}

var speed = 10;
//force in newton(meter/secondSquare)
var resistance =.05;
//percentage velocity
var massinput = 100;
//kilograms

function getdirection(destination:Vector3, position:Vector3): Vector3
{
var output = destination - position;
output.Normalize();
return output;
}

function Update () {
var facing = transform.forward.normalized;
var canoe = GetComponent.<Rigidbody>();
canoe.mass = massinput/100;
canoe.drag = resistance;
canoe.angularDrag = resistance *5;

var waypoint= Vector3(0,0,100);
var turned = false;
if (canoe.position.z > 100 && turned == false){
waypoint= Vector3(10,0,100);
turned = true;
}
var direction = getdirection(waypoint, canoe.position);

canoe.velocity = facing*speed;

if(canoe.position.z > 100 && turned){
canoe.AddTorque(0,.1,0);
}
}