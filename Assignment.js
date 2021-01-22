


                        // kilometerToMeter 

function kilometerToMeter(kilometer) {
    // check kilomiter value is navgative or not if navative than return with error message.
    if (kilometer < 0) {
        return "Kilometer can't calculate nagative value. Please input positive value.";
    }
    var meter = kilometer * 1000; // calculate kilometer to meter and store result
    return meter; // return result
}
//call kilometerToMeter function and store return value
var resultMeter = kilometerToMeter(-10);
console.log(resultMeter); // print value in console log
                           // budgetCalculator 

function budgetCalculator(watchs, phones, laptops) {
    //chech watchs, phones and laptop value nagative or not if navative than return with error message. 
    if (watchs < 0 || phones < 0 || laptops < 0) {
        return "Budget can't calculate nagative value. Please input positive value.";
    }

    //  price for per watch, phone ,laptop
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    // find cost for watch, phone , laptop
    var watchCost = watchs * watchPrice;
    var phoneCost = phones * phonePrice;
    var laptopCost = laptops * laptopPrice;

    //total cost 
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}
//call budgetCalculator function and store return value 
var resultTotatBudget = budgetCalculator(6, 4, 8);
console.log(resultTotatBudget);




                                            //hotelCost

function hotelCost(days) {
    // check days value is nagative or not 
    if (days < 0) {
        return "Days can't contain nagative value.";
    }

    // set default cost
    var totalCost = 0;

    // calculate the total cost in different condition
    if (days <= 10) {
        // find cost if days less than or equal 10 days
        totalCost = days * 100;
    }
    else if (days <= 20) {
        // find cost if days less than or equal 20 days and greater than 10 days
        var remainingDays = days - 10;// find remaining days
        var costFirstTenDays = 10 * 100;// first 10 days cost
        var costSecondTenDays = remainingDays * 80;// second 10 days cost
        totalCost = costFirstTenDays + costSecondTenDays; 
    }
    else {
        // find if days greater than 20 days
        var remainingDays = days - 20;// find remaining days
        var costFirstTenDays = 10 * 100;// first 10 days cost
        var costSecondTenDays = 10 * 80;// second 10 days cost
        var costNextAllDays = remainingDays * 50; // next all days cost
        totalCost = costFirstTenDays + costSecondTenDays + costNextAllDays; 
    }
    return totalCost;
}
//call hotelCost function and store return value 
const totalHotelCost = hotelCost(21);
console.log( totalHotelCost);



                                    //megaFriend   

function megaFriend(arr) {
    // check it's array or not, if not array than return with message.
    if (typeof(arr) != "object") {
        return "It is not an array, please input an array.";
    }
    // check this array is empty or not, if empty than return with message.
    if (arr.length == 0) {
        return "This array is empty, please input a value."
    }
    //default large name 
    var largeName = arr[0];

    // count name lenght 
    var largeNameLength = largeName.length;

    // loop for search new elemet is larger or not 
    for (var i = 0; i < arr.length; i++) {
        //store new element
        var element = arr[i];

        // count new element length
        var elementLength = element.length;

        // check new elemet lenght is greater or not
        if (largeNameLength < elementLength) {
            // store new bigger element
            largeName = element;

            // replace previous element length with new element length
            largeNameLength = elementLength;
        }
    }
    return largeName;
}
// friend list 
var friends = ['Nahiyan', 'Mahfuja', 'marwan', 'jubayer', 'Mahbuba', 'Jannat', 'Ema', 'jannatul  mawa', 'Sumaiya'];

// call megaFriend 
var bigestName = megaFriend(friends);
console.log(bigestName);
