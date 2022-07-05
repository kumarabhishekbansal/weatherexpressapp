const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const submitbtn=document.getElementById("submitbtn");
const temp=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector('.middle_layer')
const getinfo = async(event) =>{
    event.preventDefault();
    let cityval=cityname.value;

   if(cityval==="")
   {
        city_name.innerText=`Plz write the name before search .`;
        datahide.classList.add("data_hide");
   }else{
    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=94d18c67610aa538fd62529258ef724d&units=metric`;
        const response=await fetch(url);
        const data=await response.json();
        const arrdata=[data];
        city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`; 
       temp.innerText=arrdata[0].main.temp;
       temp_status.innerText=arrdata[0].weather[0].main;

        // condition to check sunny or clear

        if(temp_status==='Clear')
        {
            temp_status.innerHTML='<i class="fas fa-sun" style="color:#eccc68;"></i>'
        }
        else if(temp_status==='Clouds')
        {
            temp_status.innerHTML='<i class="fas fa-cloud" style="color:#f1f2f6;"></i>'
        }
        else if(temp_status==='Rain')
        {
            temp_status.innerHTML='<i class="fas fa-cloud-rain" style="color:#a4b0be;"></i>'
        }
        else
        {
            temp_status.innerHTML='<i class="fas fa-cloud" style="color:#f1f2f6;"></i>'
        }
        datahide.classList.remove("data_hide");

    }
        catch{
        city_name.innerText=`Plz enter the city name properly.`;
        datahide.classList.add("data_hide");
    }

   }

}
submitbtn.addEventListener("click",getinfo)