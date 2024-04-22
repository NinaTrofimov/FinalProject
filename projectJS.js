/* Nina Trofimov
4/17/2024
*/
$("#document").ready(function(){


    var days = ["<h2 id ='day'>Sunday</h2>","<h2 id ='day'>Monday</h2>", "<h2 id ='day'>Tuesday</h2>", "<h2 id ='day'>Wednesday</h2>","<h2 id ='day'>Thursday</h2>","<h2 id ='day'>Friday</h2>", "<h2 id ='day'>Saturday</h2>"];
    var names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   
    for(let i = 0; i < days.length; i++){
        day = days[i];
        ema = names[i]
        Meals = (` <label>Breakfast :</label><input id = 'breakfast-${ema}' type ="text"> <label>Snack :</label><input id = "snack-${ema}" type ="text"><label> Lunch :</label><input id = "lunch-${ema}" type ="text"><label> Dinner :</label><input id = "dinner-${ema}" type ="text">`);
        $('#mealInfo').append(`<div id="${ema}">${day}<div id = "boxes">${Meals}</div></div>`);

    }
    $('#subButton').click(function(){
       /* try repairing this?*/
        /*var meals = ["breakfast","snack","lunch","dinner"]
        for(var i =0; i < names.length; i++){
            var daySchedule = {};
            for (var j = 0; j < meals.length; j++){
                var mealId = '#' + meals[j] + '-' + names[i];
                daySchedule[meals[j]] = $(mealId).val();
            }
        }*/
        var Sbreakfast = $('#breakfast-Sunday').val();
        var Ssnack = $('#snack-Sunday').val();
        var Slunch = $('#lunch-Sunday').val();
        var Sdinner = $('#dinner-Sunday').val()

        var Mbreakfast = $('#breakfast-Monday').val();
        var Msnack = $('#snack-Monday').val();
        var Mlunch = $('#lunch-Monday').val();
        var Mdinner = $('#dinner-Monday').val()

        var Tbreakfast = $('#breakfast-Tuesday').val();
        var Tsnack = $('#snack-Tuesday').val();
        var Tlunch = $('#lunch-Tuesday').val();
        var Tdinner = $('#dinner-Tuesday').val()

        var Wbreakfast = $('#breakfast-Wednesday').val();
        var Wsnack = $('#snack-Wednesday').val();
        var Wlunch = $('#lunch-Wednesday').val();
        var Wdinner = $('#dinner-Wednesday').val()

        var Wbreakfast = $('#breakfast-Wednesday').val();
        var Wsnack = $('#snack-Wednesday').val();
        var Wlunch = $('#lunch-Wednesday').val();
        var Wdinner = $('#dinner-Wednesday').val()

        var THbreakfast = $('#breakfast-Thursday').val();
        var THsnack = $('#snack-Thursday').val();
        var THlunch = $('#lunch-Thursday').val();
        var THdinner = $('#dinner-Thursday').val()

        var Fbreakfast = $('#breakfast-Friday').val();
        var Fsnack = $('#snack-Friday').val();
        var Flunch = $('#lunch-Friday').val();
        var Fdinner = $('#dinner-Friday').val()

        var SAbreakfast = $('#breakfast-Friday').val();
        var SAsnack = $('#snack-Friday').val();
        var SAlunch = $('#lunch-Friday').val();
        var SAdinner = $('#dinner-Friday').val()

        let info = {
            "Days":{
            "Sunday":{ "breakfast": Sbreakfast,
                        "snack": Ssnack,
                        "lunch": Slunch,
                        "dinner": Sdinner
            },
            "Monday":{ "breakfast": Mbreakfast,
                        "snack": Msnack,
                        "lunch": Mlunch,
                        "dinner": Mdinner
            },
            "Tuesday":{ "breakfast": Tbreakfast,
                        "snack": Tsnack,
                        "lunch": Tlunch,
                        "dinner": Tdinner
            },
            "Wednesday":{ "breakfast": Wbreakfast,
                        "snack": Wsnack,
                        "lunch": Wlunch,
                        "dinner": Wdinner
            },
            "Thursday":{ "breakfast": THbreakfast,
                        "snack": THsnack,
                        "lunch": THlunch,
                        "dinner": THdinner
            },
            "Friday":{ "breakfast": Fbreakfast,
                        "snack": Fsnack,
                        "lunch": Flunch,
                        "dinner": Fdinner
            },
            "Saturday":{ "breakfast": SAbreakfast,
                        "snack": SAsnack,
                        "lunch": SAlunch,
                        "dinner": SAdinner
            },
            }
    }
        console.log(info);
    })
    
})