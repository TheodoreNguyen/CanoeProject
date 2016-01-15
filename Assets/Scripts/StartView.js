var ray: Ray;
var hit: RaycastHit;
function Start() {

}

function Update() {
    if (Input.GetKey(KeyCode.Mouse0)) {
        ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        if(Physics.Raycast(ray,hit)){
            if(hit.rigidbody.name=="Easy") Application.LoadLevel ("Easy");
            if(hit.rigidbody.name=="Medium") Application.LoadLevel ("Medium");
            if(hit.rigidbody.name=="Hard") Application.LoadLevel ("Hard");
        }
    }
}