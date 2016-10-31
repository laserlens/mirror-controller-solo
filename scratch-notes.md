var nodeList = document.getElementsByTagName("div");
var nodeArray = [];
for (var i = 0; i < nodeList.length; ++i) {
    nodeArray[i] = nodeList[i];
}

function myFunction() {
var x = document.querySelectorAll(".example");
var elements = Array.from(x)
console.log(x);
console.log(elements);
}

function myFunction() {
    var x = document.getElementById("myDIV").querySelectorAll(".example");
    console.log(x);
var cln = x[0].cloneNode(true);    
document.body.appendChild(cln);
}

<label>Click me: <input type="checkbox" ng-model="checked" ng-init="checked=true" /></label><br/>
Show when checked:
<span ng-if="checked" class="animate-if">
  This is removed when the checkbox is unchecked.
</span>

var divs = Array.prototype.slice.call(document.querySelectorAll('div'));
