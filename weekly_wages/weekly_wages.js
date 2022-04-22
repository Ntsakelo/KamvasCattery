function weeklyWage(band, weeklyHours) {
  let hrsArr = weeklyHours.split(',');
  let hrsTot = 0;
  for(let i = 0; i < hrsArr.length;i++){
      let hrsStr = hrsArr[i].trim();
      let hrsNum = parseInt(hrsStr);
          hrsTot += hrsNum;
     }
        if(band === 'A' && hrsArr.length === 7){
           let wage = hrsTot * 23;
            return wage;
        }else if(band === 'B' && hrsArr.length === 7){
            let wage = hrsTot * 37;
            return wage
        }else if(band === 'C' && hrsArr.length === 7){
            let wage = hrsTot * 51;
            return wage;
        }else if(hrsArr.length !== 7){

            return 'missing day';
        }
        return 0;

};
