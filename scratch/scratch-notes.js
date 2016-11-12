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

db.update ({'seraching criteria goes here ' },
{
 $set : {
          trk : [ {
                     "lat": 50.3293714,
                     "lng": 6.9389939
                  },
                  {
                     "lat": 50.3293284,
                     "lng": 6.9389634
                  }
               ]//'inserted Array containing the list of object'
      }
});

var currentUser = UserService.name.currentUser;

ocasional error
TypeError: Cannot read property 'mirror' of undefined
    at /Users/adrian/Desktop/Code/mirror-controller-solo/routes/mirrors.js:11:24

weather underground('0f6ff76f537e4c48')

for (var i = 0; i < ctrl.topNews.length; i++) {}

//news draggable element
$("#news").draggable({
  cursor: "move",
  delay: 100,
  scroll: false,
  containment: "parent"
})
.resizable({
  containment: "parent",
  maxWidth: 1000,
  resize: function( event, ui ) {
    // handle fontsize
    //console.log(ui.size); // gives you the current size of the div
    var size = ui.size;
    // change the values of the font-size
    $(this).css("font-size", (size.width * size.height)/1000 + "px");
  }
});//end of the draggable news element
//use jquery.marquee since marquee tag is not supported anymore and might go away
$('.marquee').marquee({
  duration: 5000,
  startVisible: true,
  duplicated: true
});

<!--time modal-->
<div id="timeModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <button class="close" ng-click="editor.timeOff()">×</button>
      <h2>Current Time</h2>
    </div>
    <form>
      <div class="modal-body">
        <input type="text" placeholder="PlaceHolder">
      </div>
    <div class="modal-footer">
      <button type="submit" name="button" class="btn btn-success">Add</button>
    </div>
    </form>
  </div>

</div>

// var e = document.getElementById("screen");
var x = document.querySelectorAll("#screen");
var elements = Array.from(x[0].children)
console.log('the elements',elements);

for (var i = 0; i < elements.length; i++) {
    e.appendChild(elements[i]);
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
    height: 60px;
    line-height: 60px; /* Vertically center the text there */
    background-color: #100047;
  }
