const tempCalculate= ()=>{

    const number = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah =(cel)=>{
        let fah = Math.round((cel*9/5)+32);
        return fah;
    }
    const fahToCel=(feh)=>{
        let cel = Math.round((feh-32)*5/9);
        return cel;

    }
    let results;


    if(valueTemp=='cel'){

        results =celToFah(number)
        document.getElementById('resultTemp').innerHTML =`= ${results} Fahrenheit`;

    }
    else{

        results =fahToCel(number)
        document.getElementById('resultTemp').innerHTML =`= ${results} Celsius`;

    }
}
