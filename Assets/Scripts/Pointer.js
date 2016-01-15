#pragma strict
var direction: Vector3; // for the direction of compass
var position: Vector3; // for the position of compass
var player: GameObject;
var ai: GameObject;
var gamestart: boolean; // each ai and player script gets this var from this script to see if game has started
var playerturned: boolean; // to check if the player turned at the end of game
function Awake () {
    player = GameObject.FindGameObjectWithTag("Player");//player canoe is linked to this var now
    ai = GameObject.FindGameObjectWithTag("AI");//ai cano is linked to this var now
    gamestart = false; // game is not started at the beginning
}

function Update () {//updates every frame
    playerturned = player.GetComponent(CanoePlayer).turned; 
    // turned var from CanoePlayer script of player canoe is now linked to this var
	direction = ai.transform.position-player.transform.position;//for compass
	position = player.transform.position;//forcompass
	if (Input.GetKey(KeyCode.Return)) gamestart = true;//Return is Enter!
    if (Input.GetKey(KeyCode.Space)) {//switching compass position
    direction = player.transform.position-ai.transform.position;
    position = ai.transform.position;
    }
    transform.position = position;
    transform.rotation = Quaternion.LookRotation(direction); 
    if (ai.transform.position.z<0) Application.LoadLevel("Start");//if ai comes back first it "Start" scene is loaded
    if (player.transform.position.z<0&&playerturned) Application.LoadLevel("Start"); // same as above but player!
    //things required:
    //1. 3,2,1,GO Display before gamestart
    //2. "Player won!" or "AI won!" text display before going back to "Start" scene
}