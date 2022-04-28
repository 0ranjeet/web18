var investobj = JSON.parse(localStorage.getItem("invdata"));
console.log(investobj)
investobj.map(function(ele,ind,arr){
  var idt=document.createElement("div")
  idt.setAttribute("class","idtm")
  var img=document.createElement("img");
  img.setAttribute("tag","invimg");
  img.src=ele.invimg

   
   var N= document.createElement("h3")
   N.setAttribute("class","name")
   N.textContent=ele.invname
   var p=document.createElement("h4")
   p.setAttribute("class","pos")
   p.textContent=ele.invrole

   var cl=document.createElement("img")
   cl.setAttribute("class","cl")
   cl.src=ele.invcolo
   
   idt.append(img,N,p,cl)
  document.querySelector("#cnt").append(idt)

})