$( function() {
    //use jquery-ui draggable feature with resizable
    $("#draggable").draggable({
      cursor: "move",
      delay: 100,
      scroll: false,
      containment: "parent"
    })
    .resizable({
      containment: "parent",
      minHeight: 375,
      minWidth: 92,
      maxWidth: 289,
      resize: function( event, ui ) {
        // handle fontsize here
        //console.log(ui.size); // gives you the current size of the div
        var size = ui.size;
        // something like this change the values according to your requirements
        $(this).css("font-size", (size.width * size.height)/7000 + "px");
      }
    });//end of the draggable weather element

    //clock draggable element
    $("#clock").draggable({
      cursor: "move",
      delay: 100,
      scroll: false,
      containment: "parent"
    })
    .resizable({
      containment: "parent",
      maxWidth: 289,
      resize: function( event, ui ) {
        // handle fontsize here
        //console.log(ui.size); // gives you the current size of the div
        var size = ui.size;
        // something like this change the values according to your requirements
        $(this).css("font-size", (size.width * size.height)/1000 + "px");
      }
    });
  });
