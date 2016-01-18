var queue : int = 2000; //3000 is default in Unity
var applyToChildren : boolean = false;
var renderer1;
function Awake(){
	renderer1 = GetComponent(Renderer);
	SetRenderQueue();
}
 
function SetRenderQueue(){
	if (!renderer1 || !renderer1.sharedMaterial || applyToChildren){
		if(applyToChildren){
			for(var child : Transform in transform){
				child.renderer1.sharedMaterial.renderQueue = queue;
			}
		} else { 
			print("No renderer found on this GameObject. Check the applyToChildren box to apply settings to children"); 
		} 	 
	} else {renderer1.sharedMaterial.renderQueue = queue;}
}