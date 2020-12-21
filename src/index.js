let numberOfElem = [];
numberOfElem[0] = 0;

let numberOfObjects = 0;
let objects = [];

var keys = new Array(new Array());
keys[0][0] = document.getElementById("key0-0");

function newElement(objectNumber) {

    console.debug("New Element");

    document.getElementById("object" + objectNumber).append(document.createElement("br"));
    document.getElementById("object" + objectNumber).append(document.createElement("br"));
    numberOfElem[objectNumber] = numberOfElem[objectNumber] + 1;

    console.debug("Number of elem after incrementation " +  numberOfElem[objectNumber]);

    var inp1 = document.createElement("input");
    inp1.className = "element";
    inp1.id = "key"+numberOfElem[objectNumber] + "-" + objectNumber;
    inp1.setAttribute("placeholder", "Clé");

    console.debug("inp1 created : " + inp1);

    keys[objectNumber][numberOfElem[objectNumber]] = inp1;

    console.debug("Has to output inp1 : ");
    console.debug(keys[objectNumber][numberOfElem[objectNumber]]);

    var v_type = document.createElement("select");
    v_type.className = "element-s";
    v_type.id = "valtype" + numberOfElem[objectNumber] + "-" + objectNumber;

    console.debug("Created Select : " + v_type);

    var opt = [];
    //
    opt[0] = document.createElement("option");
    opt[0].className = "opt";
    opt[0].innerHTML = "Valeur brute";
    //
    opt[1] = document.createElement("option");
    opt[1].className = "opt";
    opt[1].innerHTML = "Tableau de valeur";
    //
    opt[2] = document.createElement("option");
    opt[2].className = "opt";
    opt[2].innerHTML = "Objet JSON";
    //
    opt.forEach((i)=> {
        v_type.append(i);
    });
    //

    console.debug("Append");

    document.getElementById("object" + objectNumber).append(inp1);
    document.getElementById("object" + objectNumber).append(" ");
    document.getElementById("object" + objectNumber).append(v_type);
}

function newObject() {

}

window.onload = ()=> {
    const buttons = [];
    buttons[2] = document.getElementById("compile");
    buttons[4] = document.getElementById("copy");

    var newElements = [];
    newElements[0] = document.getElementById("new-element-0");
    document.getElementById("new-element-0").onclick = ()=>{newElement(0)};
    var deletes = [];
    deletes[0] = document.getElementById("delete-0");
    var finalJson = {};
    

    var val = new Array(new Array());
    val[0][0] = document.getElementById("val0");

    var types = new Array(new Array());
    types = [0][0] = document.getElementById("valtype0-0");

    

    buttons[2].onclick = ()=>{
        finalJson = {};
        let j = 0;
        keys.forEach((i)=>{
            finalJson[i.value] = val[j].value;
            j = j+1;
        });

        document.getElementById("container-result").innerHTML = JSON.stringify(finalJson);
        document.getElementById("copy").removeAttribute("hidden");
    }

    /*buttons[3].onclick = ()=> {
        if (numberOfElem > 0) {
            document.getElementById("key" + numberOfElem).remove();
            document.getElementById("val" + numberOfElem).remove();
            numberOfElem = numberOfElem - 1
        }
    }
    buttons[4].onclick = ()=>{
        navigator.clipboard.writeText(JSON.stringify(finalJson));
        buttons[4].innerHTML = "Copié !";
        setTimeout(()=>{
            buttons[4].innerHTML = "Copier dans le presse papier";
        }, 3000);
    }*/
}