var position;
var player;
var ai;
function Start () {
    player = GameObject.FindGameObjectWithTag("Player");
    ai = GameObject.FindGameObjectWithTag("AI");
}

function Update () {
    position = player.transform.position;
    if (Input.GetKey(KeyCode.Space)) position = ai.transform.position;
    transform.position = Vector3(position.x, position.y + 5, position.z - 10);
}