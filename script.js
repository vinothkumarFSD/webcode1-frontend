var h1 = document.createElement("h1");
h1.innerHTML = "LIST OF BREWERIES";
h1.style.textAlign = "center";
h1.style.marginTop = "50px";
h1.style.color="red"
document.body.append(h1);

var div1 = document.createElement("div");
div1.style.textAlign = "center";
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "myText");
input.setAttribute("value", "");
input.style.width = "30%";
input.setAttribute("placeholder", "Enter the statename");


var linebreak = document.createElement("br");
var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.style.margin = "10px";
button.innerHTML = "Click view";
button.addEventListener("click", bar);


div1.append(input, linebreak, button);

document.body.append(div1);

async function bar() {
    try {
        let fun1 = document.getElementById("myText").value;
        let statename = fun1;
        let url1 = 'https://api.openbrewerydb.org/v1/breweries?by_state=' + statename + '';
        let fun2 = await fetch(url1);
        let fun3 = await fun2.json();
        console.log(fun3);

        element = document.getElementById('myrow');
        if (element != null) {

            element.remove();
        }

        var container = document.createElement("div");
        container.className = "container";
        container.setAttribute("id", "myrow");
        var row = document.createElement("div");
        row.className = "row";

        container.append(row);


        var res = fetch("https://api.openbrewerydb.org/v1/breweries?by_state=" + statename + "");

        res.then((data) => data.json()).then((data1) => foo(data1));

        function foo(data1) {

            for (var i = 0; i < data1.length; i++) {
                row.innerHTML += `<div class="col-md-4">
                                    <div class="card border-primary mb-3" style="max-width: 18rem;">
                                        <div class="card-header text-center">
                                        <h5 class="card-title">${data1[i].name}</h5>
                                        </div>
                                        <div class="card-body text-center">Type:${data1[i].brewery_type}</div>
                                        <div class="card-body text-center">Address:${data1[i].address_1}</div>
                                        <div class="card-body text-center">Website:${data1[i].website_url}</div>
                                        <div class="card-body text-center">Phone no:${data1[i].phone}</div>
                                        <div class="card-body text-center">State:${data1[i].state}</div>
                        
                                    </div>
                        
                                </div>`;

            }

        }
        document.body.append(container);


    } catch (error) {
        console.log(error);
    }
}


