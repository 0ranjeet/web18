document
    .querySelector("#inv")
    .addEventListener("submit",invfunction);

    var invarr=JSON.parse(localStorage.getItem("invdata"))||[]

    function invfunction(){
        event.preventDefault();
        var invobj={
            invimg: inv.IMGurl.value,
            invname: inv.name.value,
            invrole: inv.role.value,
            invcolo: inv.invcl.value,
        };
        invarr.push(invobj);
        localStorage.setItem("invdata",JSON.stringify(invarr))

      }

    

