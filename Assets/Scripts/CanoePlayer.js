var facing: Vector3;
var vector: Vector3;
var for_pad: boolean;
var turn_pad: boolean;
var speed: float;
var count: int;
var angle: float;
var turned: boolean;
var gamecon: GameObject;
function Start() {
	for_pad = true;
	turn_pad = true;
	speed = 1.0;
	turned = false;
	gamecon = GameObject.FindGameObjectWithTag("GameController");
}
function Update(){
	facing = transform.forward.normalized;
	position = transform.position;
	if(position.x <-4&& position.x >-6&&position.z>100)turned = true;

if(gamecon.GetComponent(Pointer).gamestart){
	if(Input.GetKey(KeyCode.LeftArrow)&&
	((Input.GetKeyUp(KeyCode.UpArrow)&&turn_pad)||(Input.GetKeyUp(KeyCode.DownArrow)&&!turn_pad))){
		angle -= 5.0;
		turn_pad = !turn_pad;
	}
	else if(Input.GetKey(KeyCode.RightArrow)&&
	((Input.GetKeyUp(KeyCode.UpArrow)&&turn_pad)||(Input.GetKeyUp(KeyCode.DownArrow)&&!turn_pad))){
		angle += 5.0;
		turn_pad = !turn_pad;
	}
	else if((Input.GetKeyUp(KeyCode.LeftArrow)&&for_pad)||(Input.GetKeyUp(KeyCode.RightArrow)&&!for_pad)){
	    vector-=0.80*facing;
	    if(for_pad) ++count;
	    for_pad = !for_pad;
	}
}
}
function FixedUpdate(){
	transform.Translate(vector*speed*Time.deltaTime);
	transform.Rotate(Vector3.forward*angle* Time.deltaTime);
	angle*= 0.995;
	vector*= 0.995;
}