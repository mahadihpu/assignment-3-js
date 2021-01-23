//Convert Kilometer to meter . 1000 meter = 1Kilometer
function kilometerToMeter(kilo){
    if(kilo < 0){
        return "Wrong input";
    }else{
      return kilo * 1000;
    }
}

//Budget your gadget shopping, 1 watch = 50 Taka, 1 Phone = 100 Taka, 1 Laptop = 500 Taka
function budgetCalculator(watch,phone,laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        return "wrong input";
    }
    else{
    const total = watch * 50 + phone * 100 + laptop * 500;
    return total;
    }
}

//Get the cost of total days you stay at the hotel. day 1-10 = 100 taka, day 11- 20 = 80 taka, day 20 onwards 50 Taka
function hotelCost(day){
    let budget = 0;
    if(day > 0 &&  day < 11){
        budget = day * 100;
    }
    else if(day > 10 && day < 21){
        budget = ((day - 10) * 80) + (10*100);
    }
    else if(day > 20 ){
        budget = ((day - 20) * 50)+ (10*80)  + (10*100);
    }
    else{
        return "wrong input";
    }
  return budget;
}

//Mega Friend : Find the shortest string/name in an array
function megaFriend (array){
    return array.reduce((acc, val) => {
       const { length: len } = val;
       if(len < acc['shortest']['length']){
          acc['shortest'] = val;
       };
       return acc;
    }, {
       shortest: array[0]
    });
 }