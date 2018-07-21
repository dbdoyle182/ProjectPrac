$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    // $.get("/api/user_data").then(function(data) {
    //   $(".member-name").text(data.email);
    // });


    var events = [
      
          {'Date': new Date(2018, 6, 21), 'Title': 'Go to the Gym', 'Link': '/test'},
      
          {'Date': new Date(2018, 6, 25), 'Title': 'Drink 8 cups of water', 'Link': '/test'},
      
          {'Date': new Date(2018, 6, 22), 'Title': 'Only watch 1 hour of TV', 'Link': '/test'},
      
      ];

      var settings = {
        
            Color: '',
        
            LinkColor: '',
        
            NavShow: true,
        
            NavVertical: false,
        
            NavLocation: '',
        
            DateTimeShow: true,
        
            DateTimeFormat: 'mmm, yyyy',
        
            DatetimeLocation: '',
        
            EventClick: '',
      
            EventTargetWholeDay: false,
        
            DisabledDays: [],
        
            ModelChange: ""
        
        };

        var element = document.getElementById('caleandar');

caleandar(element, events, settings);

        
      
    
  });
  