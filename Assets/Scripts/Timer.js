#pragma strict
var timer:float;
var gamecon: GameObject;
function Awake () {
   gamecon = GameObject.FindGameObjectWithTag("GameController");
   timer=0;
}

function Update () {
if(gamecon.GetComponent(Pointer).gamestart){
	timer+=Time.deltaTime;
	GetComponent(TextMesh).text=timer.ToString();
	}
}