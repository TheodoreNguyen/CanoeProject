var ray: Ray;
var hit: RaycastHit;

var m1: GameObject;
var m2: GameObject;
var m3: GameObject;
var m4: GameObject;
var m5: GameObject;
var m6: GameObject;
var m7: GameObject;
var m8: GameObject;

function Start() {
	
	m1 = GameObject.FindGameObjectWithTag("Instructions");
	m2 = GameObject.FindGameObjectWithTag("Easy");
	m3 = GameObject.FindGameObjectWithTag("Medium");
	m4 = GameObject.FindGameObjectWithTag("Hard");
	m5 = GameObject.FindGameObjectWithTag("MenToCred");
	m6 = GameObject.FindGameObjectWithTag("Credits");
	m7 = GameObject.FindGameObjectWithTag("CredToMenu");
	m8 = GameObject.FindGameObjectWithTag("TimeTrial");
	m6.SetActive(false);
	m7.SetActive(false);
	
}


function Update() {
	if (Input.GetKey(KeyCode.C)){
		m1.SetActive(false);
		m2.SetActive(false);
		m3.SetActive(false);
		m4.SetActive(false);
		m5.SetActive(false);
		m6.SetActive(true);
		m7.SetActive(true);
		
		m8.SetActive(false);
	}
	if (Input.GetKey(KeyCode.M)){
		m1.SetActive(true);
		m2.SetActive(true);
		m3.SetActive(true);
		m4.SetActive(true);
		m5.SetActive(true);
		m6.SetActive(false);
		m7.SetActive(false);
		
		m8.SetActive(true);
	}
    if (Input.GetKey(KeyCode.Mouse0)) {
        ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        if(Physics.Raycast(ray,hit)){
            if(hit.rigidbody.name=="Easy") Application.LoadLevel ("Easy");
            if(hit.rigidbody.name=="Medium") Application.LoadLevel ("Medium");
            if(hit.rigidbody.name=="Hard") Application.LoadLevel ("Hard");
			if(hit.rigidbody.name=="TimeTrial") Application.LoadLevel("TimeTrial");
        }
    }
}