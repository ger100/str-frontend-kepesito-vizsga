const movieList = [
    { title: 'Vissza a jövőbe', year: 1990, timeInMinute: 95 },
    { title: 'Titanic', year: 1997, timeInMinute: 182 },
    { title: 'Charlie angyalai', year: 2003, timeInMinute: 99 },
    { title: 'Robotzsaru', year: 1997, timeInMinute: 101 },
    { title: 'Hangtalanul', year: 2015, timeInMinute: 120 },
    { title: 'Csillagok között', year: 2020, timeInMinute: 180 },
    { title: 'Top Gun', year: 1990, timeInMinute: 100 }
]



function movieFilter (list, year, maxTimeMinutes) {
   
    
        if(2020 >= year && year >= 1990 ) {  
            return list
                .filter(list => list.year = year && list.maxTimeMinutes >= maxTimeMinutes)
                .map(item => item.name);
        
          }
      


      try {
        if(2020 >= year && year >= 1990 || year === NaN) throw "1";
      }
      catch(err) {
        message.innerHTML = "Input is " + err;
      }
};



export { movieFilter };