var dt = new Date();
function renderDate() {
    dt.setDate(1);
    var day = dt.getDay();
    var today = new Date();
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]



    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById("month").innerHTML = months[dt.getMonth()] + ' ' + dt.getFullYear();
    document.getElementById("date_str").innerHTML = dt.toDateString();
    var cells = "";
    var newdt = dt;
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
    for (i = 1; i <= endDate; i++) {
        newdt.setDate(newdt.getDate() + 1);
        // console.log(dt);
        // Check if sunday
        // console.log(dt,'||||',dt.toDateString().slice(0,3));
        // Output Sunday
        // if(dt.toDateString().slice(0,3) === 'Mon'){
        //     console.log(`${dt.getFullYear()}-${months[dt.getMonth()]}-${i} is Sunday`); 
        // }


            if (i == today.getDate() && dt.getMonth() == today.getMonth() && today.getFullYear() == dt.getFullYear()){
                if(newdt.toDateString().slice(0,3) === 'Mon'){
                    //console.log(`${dt.getFullYear()}-${dt.getMonth()}-${i} is Sunday`); 
                    cells += "<div class='dd today bor sunday'><b>" + i + "</b><br> <b class='chip'>8Hrs</b> </div>";
                    // "<div class='today'>" + i + "</div>"
                }else{
                    cells += "<div class='dd today bor'><b>" + i + "</b><br> <b class='chip'>8Hrs</b> </div>";
                    // "<div class='today'>" + i + "</div>"
                }
               
        }else{
            if(newdt.toDateString().slice(0,3) === 'Mon'){
                cells += "<div class='dd bor sunday'><b>" + i + "</b><br> <b class='chip'>8Hrs</b> </div>";
            }else{
                cells += "<div class='dd bor'><b>" + i + "</b><br> <b class='chip'>8Hrs</b> </div>";
            }

        }






        }
    document.getElementsByClassName("days")[0].innerHTML = cells;

}

function moveDate(para) {
    if(para == "prev") {
        console.log('Clicked',dt.setMonth(dt.getMonth() - 1));
        dt.setMonth(dt.getMonth() - 1);
    } else if(para == 'next') {
        console.log('Clicked',dt.setMonth(dt.getMonth() + 1));
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}
