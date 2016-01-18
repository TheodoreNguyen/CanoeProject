#pragma strict
import UnityEngine.UI;
var direction: Vector3; // for the direction of compass
var position: Vector3; // for the position of compass
var player: GameObject;
var ai: GameObject;
var gamestart: boolean; // each ai and player script gets this var from this script to see if game has started
var playerturned: boolean; // to check if the player turned at the end of game

var enter: GameObject;

var ready: GameObject;/*
var three: GameObject;
var two: GameObject;
var one: GameObject;
var start: GameObject;
*/
var winner: GameObject;
var loser: GameObject;
var gameToMenu: GameObject;


function TextOff () {
	ready.SetActive(false);
	//three.SetActive(false);
	//two.SetActive(false);
	//one.SetActive(false);
	//start.SetActive(false);
	winner.SetActive(false);
	loser.SetActive(false);
	gameToMenu.SetActive(false);
}

function Awake () {
    player = GameObject.FindGameObjectWithTag("Player");//player canoe is linked to this var now
    ai = GameObject.FindGameObjectWithTag("AI");//ai cano is linked to this var now
	
	enter = GameObject.FindGameObjectWithTag("EnterToStart");
	ready = GameObject.FindGameObjectWithTag("CountReady");
	//three = GameObject.FindGameObjectWithTag("Three");
	//two = GameObject.FindGameObjectWithTag("Two");
	//one = GameObject.FindGameObjectWithTag("One");
	//start = GameObject.FindGameObjectWithTag("Start");
	winner = GameObject.FindGameObjectWithTag("Winner");
	loser = GameObject.FindGameObjectWithTag("Loser");
	gameToMenu = GameObject.FindGameObjectWithTag("GameToMenu");
	TextOff();
    
	gamestart = false; // game is not started at the beginning
}


function Update () {//updates every frame
    playerturned = player.GetComponent(CanoePlayer).turned; 
    // turned var from CanoePlayer script of player canoe is now linked to this var
	direction = ai.transform.position-player.transform.position;//for compass
	position = player.transform.position;//forcompass
	
	if (Input.GetKey(KeyCode.Return)) {
		
		enter.SetActive(false);
		
		ready.SetActive(true);
		//yield WaitForSeconds(2);
		//ready.SetActive(false);
		/*
		three.SetActive(true);
		//yield WaitForSeconds(1);
		three.SetActive(false);
		
		two.SetActive(true);
		//yield WaitForSeconds(1);
		two.SetActive(false);
		
		one.SetActive(true);
		//yield WaitForSeconds(1);
		one.SetActive(false);
		
		start.SetActive(true);*/
		gamestart = true;//Return is Enter!
		//yield WaitForSeconds(1);
		//start.SetActive(false);
	
		
	}
	
	
    if (Input.GetKey(KeyCode.Space)) {//switching compass position
    direction = player.transform.position-ai.transform.position;
    position = ai.transform.position;
    }
    transform.position = position;
    transform.rotation = Quaternion.LookRotation(direction); 
	
    if (ai.transform.position.z<0) 
	{
		if(winner.activeSelf == false)
		{
			loser.SetActive(true);
			gameToMenu.SetActive(true);
		}
	}
    if (player.transform.position.z<0&&playerturned)
	{
		if(loser.activeSelf == false)
		{
			winner.SetActive(true);
			gameToMenu.SetActive(true);
		}
	}	
	
	if(loser.activeSelf == true || winner.activeSelf == true)
		if(Input.GetKey(KeyCode.Escape))
			Application.LoadLevel("Start");
    
}

	//things required:
    //1. 3,2,1,GO Display before gamestart
    //2. "Player won!" or "AI won!" text display before going back to "Start" scene