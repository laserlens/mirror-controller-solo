angular.module('mirrorApp')
.controller('EditorController', EditorController);

function EditorController($timeout, $http, $location, $compile, NavService,
                          UserService, WeatherService, NewsService ) {
  var ctrl = this;
  //store forecast data
  ctrl.forecasts = [];
  //store news data
  ctrl.topNews=[];
  ctrl.sources=[];
  //starts ng-show as false
  //ng-show for whats displayed on the fullscreen
  ctrl.activeW = false;
  ctrl.activeT = false;
  ctrl.activeN = false;
  ctrl.activeM = false;
  //ng-show for tools
  ctrl.weatherShow = false;
  ctrl.newsShow = false;
  ctrl.messageShow = false;
  ctrl.timeShow = false;
  ctrl.messageAdded = false;
  ctrl.newsAdded=false;
  ctrl.timeAdded=false;
  ctrl.weatherAdded=false;

  //show preview, save, and logout buttons
  NavService.status.save = true;
  NavService.status.preview = true;
  NavService.status.logout = true;

  //show weather tools
  ctrl.weatherTools = function () {
    if (ctrl.weatherShow == false) {
      ctrl.weatherShow = true;
      ctrl.newsShow = false;
      ctrl.messageShow = false;
      ctrl.timeShow = false;
    }else {
      ctrl.weatherShow = false;
    }
  };
  //show message tools
  ctrl.messageOn = function () {
    if (ctrl.messageShow == false) {
      ctrl.messageShow = true;
      ctrl.weatherShow = false;
      ctrl.newsShow = false;
      ctrl.timeShow = false;
    }else {
      ctrl.messageShow = false;
    }
  };
  //show time tools
  ctrl.timeTools = function () {
    if (ctrl.timeShow == false) {
      ctrl.timeShow = true;
      ctrl.weatherShow = false;
      ctrl.newsShow = false;
      ctrl.messageShow = false;
    }else {
      ctrl.timeShow = false;
    }
  };
  // When the user clicks the button, show the news tools
  ctrl.newsOn = function() {
      ctrl.activeN = true;
      if (ctrl.newsShow == false) {
        ctrl.newsShow = true;
        ctrl.weatherShow = false;
        ctrl.messageShow = false;
        ctrl.timeShow = false;
      }else {
        ctrl.newsShow = false;
      }
  };
  //hide the element and reset the data
  //news reset
  ctrl.removeNews = function() {
    ctrl.topNews=[];
    ctrl.activeN = false;
  };
  //weather reset
  ctrl.removeWeather = function() {
    ctrl.forecasts = [];
    ctrl.activeW = false;
  };
  //hide the time
  ctrl.removeTime = function() {
    ctrl.activeT = false;
  };
  //message reset
  ctrl.removeMessage = function() {
    ctrl.activeM = false;
    ctrl.message = null;
  };

  //funtion for ng-submit event on add weather
  ctrl.weatherZip = function () {
    ctrl.loadingOn = true;
    //send zip code entered by user to get location for nearest weather tower
    WeatherService.citySearch(ctrl.zip).then(function(location) {
      console.log('whats the response in the controller', location);
      //send the location information to api to get back forecast data
      WeatherService.forecastSearch(location).then(function(response){
        //show weather div
        ctrl.activeW = true;
        //array of data needed from weather api
        ctrl.forecasts = response.data.forecast.simpleforecast.forecastday;
        console.log('whats the forecastSearch response',ctrl.forecasts);

      });
      ctrl.loadingOn = false;
    });
    ctrl.zip = null;
  };//end of weather get

  //time widget
  ctrl.clock = '';
  ctrl.tickInterval = 1000 //ms

  var tick = function () {
    ctrl.clock = Date.now() // get the current time
    $timeout(tick, ctrl.tickInterval); // reset the timer
  }

  // Start the timer
  $timeout(tick, ctrl.tickInterval);

  //function to add the time
  ctrl.timeOn = function () {
    ctrl.activeT = true;
  }
  //function to add the message
  ctrl.showMessage = function () {
    ctrl.activeM = true;
  }

  //news api function
  ctrl.choice = function() {
    //ativate add button after user makes a selection
    ctrl.disable = false;
    //for loop to go through and find id that corisponds with the source the user selected
    for (var i = 0; i < ctrl.sources.length; i++) {
      if (ctrl.name == ctrl.sources[i].name) {
        ctrl.userSource = ctrl.sources[i].id;
      }};
    console.log('what is the users source',ctrl.userSource);
    //get the news of the disired source
    NewsService.newsSearch(ctrl.userSource).then(function(response){
      // make a copy of object instead of storing object itself
      ctrl.topNews.push(angular.copy(response.data.articles));
      console.log('whats the array of topNews',ctrl.topNews);

      //restart the marque when adding another news source
      var marquee = document.getElementsByClassName('marquee');
      for(var i = 0; i < marquee.length; i++) {
          marquee[i].start();
        };
        function resetSelectElement(selectElement) {
          selecElement.selectedIndex = 0;  // first option is selected
        };
      });
    }

    //get the sources to add to the selector
    NewsService.sourceSearch().then(function(response){
      //console.log('what are the sources to choose from', response.data.sources);
      ctrl.sources = response.data.sources
      //console.log('whats ctrl.sources', ctrl.sources);
    });

//font controlls
//array of fonts user can choose from
ctrl.fonts = [
  {
     value: 'Andale Mono',
     label: 'Andale Mono'
   },
   {
      value: 'Arial',
      label: 'Arial'
    },
    {
       value: 'Comic Sans MS',
       label: 'Comic Sans MS'
    },
    {
      value: 'Courier New',
      label: 'Courier New'
    },
    {
       value: 'Georgia',
       label: 'Georgia'
     },
     {
        value: 'Gothic',
        label: 'Gothic'
    },
     {
        value: 'Impact',
        label: 'Impact'
    },
    {
       value: 'Sans Serif,',
       label: 'Sans Serif,'
   },
    {
       value: 'Times New Roman',
       label: 'Times New Roman'
    },
    {
       value: 'Tahoma',
       label: 'Tahoma'
     },
    {
      value: 'Verdana',
      label: 'Verdana'
    }
];
//array of colors user cahn choose from
ctrl.colors = [
  {
    color:'white'
  },
  {
    color:'gray'
  },
  {
    color:'yellow'
  },
  {
    color:'red'
  },
  {
    color:'blue'
  },
  {
    color:'green'
  },
  {
    color:'orange'
  },
  {
    color:'purple'
  }
];
//weather widget font selected
ctrl.weatherSelectedFont = 'Pick a Font';
ctrl.weatherFontChange = function (option) {
   ctrl.weatherSelectedFont = option.value;
}
//weather widget font color day selected
ctrl.weatherSelectedDayColor = '';
ctrl.weatherDayColorChange = function (option) {
  if (option.color !== undefined) {
    ctrl.wColor = option.color;
  }
  if (option.size !== undefined) {
    ctrl.wSize = option.size;
  }
   ctrl.weatherSelectedDayColor = {'color':ctrl.wColor, 'font-size': ctrl.wSize + 'px'};
}
//weather widget font color temp selected
ctrl.weatherSelectedTempColor = '';
ctrl.weatherTempColorChange = function (option) {
  if (option.color !== undefined) {
    ctrl.tempColor = option.color;
  }
  if (option.size !== undefined) {
    ctrl.tempSize = option.size;
  }
   ctrl.weatherSelectedTempColor = {'color':ctrl.tempColor, 'font-size': ctrl.tempSize + 'px'};
}
//time widget font selected
ctrl.timeSelectedFont = 'Pick a Font';
ctrl.timeFontChange = function (option) {
   ctrl.timeSelectedFont = option.value;
}
//time widget font color clock selected
ctrl.timeSelectedClockColor = '';
ctrl.timeClockColorChange = function (option) {
  if (option.color !== undefined) {
    ctrl.timeColor = option.color;
  }
  if (option.size !== undefined) {
    ctrl.timeSize = option.size;
  }
   ctrl.timeSelectedClockColor = {'color':ctrl.timeColor, 'font-size': ctrl.timeSize + 'px'};
}
//news widget font selected
ctrl.newsSelectedFont = 'Pick a Font';
ctrl.newsFontChange = function (option) {
   ctrl.newsSelectedFont = option.value;
}
//news widget font color title selected
ctrl.newsSelectedTitleColor = '';
ctrl.newsTitleColorChange = function (option) {
  if (option.color !== undefined) {
    ctrl.titleColor = option.color;
  }
  if (option.size !== undefined) {
    ctrl.titleSize = option.size;
  }
   ctrl.newsSelectedTitleColor = {'color':ctrl.titleColor, 'font-size': ctrl.titleSize + 'px'};
}
//news widget font color discription selected
ctrl.newsSelectedDiscriptionColor = '';
ctrl.newsDescriptionColorChange = function (option) {
  if (option.color !== undefined) {
    ctrl.dColor = option.color;
  }
  if (option.size !== undefined) {
    ctrl.dSize = option.size;
  }
   ctrl.newsSelectedDiscriptionColor = {'color':ctrl.dColor, 'font-size': ctrl.dSize + 'px'};
}
//message widget font selected
ctrl.messageSelectedFont = 'Pick a Font';
ctrl.messageFontChange = function (option) {
   ctrl.messageSelectedFont = option.value;
}
//time widget font color clock selected
ctrl.messageSelectedColor = '';
ctrl.messageColorChange = function (option) {
  if (option.color !== undefined) {
    ctrl.mColor = option.color;
  }
  if (option.size !== undefined) {
    ctrl.mSize = option.size;
  }
   ctrl.messageSelectedColor = {'color': ctrl.mColor, 'font-size': ctrl.mSize + 'px'};
   //console.log('whats the color', option.color) ;
   //console.log('whats the size', option.size);
}

//use jquery-ui draggable feature
  $('.move').draggable({
    start: function (event, ui) {
             var left = parseInt($(this).css('left'),10);
             left = isNaN(left) ? 0 : left;
             var top = parseInt($(this).css('top'),10);
             top = isNaN(top) ? 0 : top;
             recoupLeft = left - ui.position.left;
             recoupTop = top - ui.position.top;
         },
         drag: function (event, ui) {
             ui.position.left += recoupLeft;
             ui.position.top += recoupTop;
         }
       });

}//end of EditorController function
