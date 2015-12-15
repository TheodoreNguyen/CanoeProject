#pragma strict

function Start () {

}
var speed = 20;
var resistance =.05;
var massinput = 100;
var turning_force = 0.01;

function Update () {
var canoe = GetComponent.<Rigidbody>();
canoe.mass = massinput/100;
var facing = transform.forward.normalized;
var forward_paddle:int = 1;
var turning_paddle:int = 1;
canoe.drag = resistance;
canoe.angularDrag = resistance*5;

if(Input.GetKeyDown(KeyCode.LeftArrow)&& forward_paddle==1){
	canoe.AddForce(facing*speed*Time.deltaTime);
	--forward_paddle;
}
if(Input.GetKeyDown(KeyCode.RightArrow)&& forward_paddle==0){
	canoe.AddForce(facing*speed*Time.deltaTime);
	++forward_paddle;
}

if(Input.GetKey(KeyCode.RightArrow)&&Input.GetKey(KeyCode.UpArrow)&& turning_paddle==1){
	canoe.AddRelativeTorque(0,turning_force,0);
	--turning_paddle;
}
if(Input.GetKey(KeyCode.RightArrow)&&Input.GetKey(KeyCode.DownArrow)&&turning_paddle==0){
	canoe.AddRelativeTorque(0,turning_force,0);
	++turning_paddle;
}

if(Input.GetKey(KeyCode.LeftArrow)&&Input.GetKey(KeyCode.UpArrow)&&turning_paddle==1){
	canoe.AddRelativeTorque(0,-turning_force,0);
	--turning_paddle;
}
if(Input.GetKey(KeyCode.LeftArrow)&&Input.GetKey(KeyCode.DownArrow)&&turning_paddle==0){
	canoe.AddRelativeTorque(0,-turning_force,0);
	++turning_paddle;
}

if(Input.GetKey(KeyCode.Space)&&canoe.velocity.magnitude>0){
	resistance = 0.5;
}
else{
	resistance = 0.05;
}
}