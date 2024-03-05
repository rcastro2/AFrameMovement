class Block{
  constructor(x,y,z,type="static-body"){
    this.obj = document.createElement("a-box");
    this.obj.setAttribute(type,"");
    this.obj.setAttribute("color","gold");
    //this.obj.setAttribute("src","#texture");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.removable = false;
    scene.append(this.obj);
    this.obj.addEventListener("click",()=>{
      if(this.removable) this.obj.remove();
    })
  }
}