var position: Vector3;
var rotation: Vector3;
var facing: Vector3;
var body: Rigidbody;
var velocity: Vector3;
var angle: float;
var turned: boolean;
var gamecon: GameObject;
function Start() {
    angle = 0;
    turned = false;
    velocity = Vector3(0,0,0);
    gamecon = GameObject.FindGameObjectWithTag("GameController");
}

function FixedUpdate () {
    position = transform.position;
    facing = transform.forward.normalized;
    rotation = transform.eulerAngles;
if (gamecon.GetComponent(Pointer).gamestart){
    if(position.x <-5&&position.z>100)turned = true;

    if(transform.position.z < 100&&!turned) {
        acc(0.5);
    }
    if(transform.position.z > 100){
        if(rotation.y!=180) angle=-20;
        acc(0.5);
    }
    if(turned&&position.z <100){
    	if(rotation.y > 180) angle= -5;
    	if(rotation.y <180) angle= 5;
        acc(0.5);
    }
    transform.Translate(-velocity*Time.deltaTime);
    transform.Rotate(Vector3.forward*angle* Time.deltaTime);
    velocity *= 0.995;
    angle *= 0.995;
}
}

function acc(n) {
    velocity += facing/5*n;
}