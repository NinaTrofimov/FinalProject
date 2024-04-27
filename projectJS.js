/* Nina Trofimov
4/17/2024
*/
$("#document").ready(function(){

    var days = ["<h2 id ='day'>Sunday</h2>","<h2 id ='day'>Monday</h2>", "<h2 id ='day'>Tuesday</h2>", "<h2 id ='day'>Wednesday</h2>","<h2 id ='day'>Thursday</h2>","<h2 id ='day'>Friday</h2>", "<h2 id ='day'>Saturday</h2>"];
    var names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let meals = ["breakfast", "snack", "lunch", "dinner"];

    for(let i = 0; i < days.length; i++){
        day = days[i];
        ema = names[i]
        var Meals = (`<label for = 'breakfast-${ema}'>Breakfast :</label><input id = 'breakfast-${ema}'><br><br/> <label for = "snack-${ema}">Snack :</label><input id = "snack-${ema}" type ="text"><label for = "lunch-${ema}"><br><br/> Lunch :</label><input id = "lunch-${ema}" type ="text"><br><br/><label for = "dinner-${ema}"> Dinner :</label><input id = "dinner-${ema}" type ="text">`);
        $('#mealInfo').append(`<div id="${ema}">${day}<div id = "boxes">${Meals}</div></div>`);

    }
   
    $('#subButton').click(function(){
        /* Foods */
        let infoArray = [];
    
        for (let day of names) {
            let dayInfo = {};
            for (let meal of meals) {
                let mealValue = $(`#${meal}-${day}`).val();
                dayInfo[meal] = mealValue;
            }
            infoArray.push({ [day]: dayInfo });
        }
    
        let info = {
            "Days": infoArray
        };
        let paragraph = ''
        info.Days.forEach(function(day) {
            for (let meal in day[Object.keys(day)[0]]) {
                paragraph += `<h3>${Object.keys(day)[0]} ${meal}: ${day[Object.keys(day)[0]][meal]}<h3>`;
            }
            
        })
            /*Email check*/
        var emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        var userName = $('#name').val();
        var email = $('#email').val();
        var goals = $('#goals').val();
        let userInfo = {
            "email" : email,
            "name" : userName,
            "goals" : goals
        }
        if(emailcheck.test(email)){
            const flyWindow = window.open('about:blank','myPop','width=700,height=500,left=200,top=200');
            let text = `<h3>Hello ${userInfo.name}, here is your meal plan!</h3>
            <h3>Email : ${userInfo.email}</h3>
            <h3> Goals : ${userInfo.goals}</h3>
            `;
            
            flyWindow.document.write(text);
            flyWindow.document.write(paragraph);
            

        }
        else{
            window.alert("Email format is not correct.")
        }
     });
     $('#resetMeals').click(function(){
        $('#mealInfo').find("input").each(function(){
            $(this).val("");
        });
     })

     $('#resetInfo').click(function(){
        $('#infoInputs').find("input").each(function(){
            $(this).val("");
        });
     })

     $('#print').click(function(){
        window.print();
     })
    });

