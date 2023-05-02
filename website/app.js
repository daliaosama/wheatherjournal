/* Global Variables */
const button=document.getElementById('generate');

const apiKey = 'b9bb58f38cd2bcfb7d970278bee16d01&units=imperial';

let temp;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();




//get data from  openwheathermap
const collect=async(url)=>{
   const link=url+apiKey; 
   const res=await fetch(link);
   try{
      const data=await res.json();
      return data;
   }catch(error){}
   console.log('error')
}
//send data to local server
//we do not use default of fetch as we want to send data to server
const send=async(addRoute,finalData)=>{
const res=await fetch(addRoute,{
   method:'POST',
   credentials:'same-origin',
   headers:{
      'content-Type':'application/json'
   },
   body:JSON.stringify(finalData),
});
try{
   const data=await res.json();
   console.log(data);
}catch(error){
   console.log('error',error);
}
}
//event


  //addEventListher to run when button is clicked
  button.addEventListener('click',run =()=>{
   const zip=document.getElementById('zip').value;
   const feel=document.getElementById('feelings').value; 
   const url=`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=`;
   const fetchApi=collect(url);
   fetchApi.then((data)=>{
       
       const finalData={
         theTemp:data.main.temp,
         theFeel:feel,
         date:newDate,
       };
       send('/add',finalData)
   }).then(()=>retrieveData())
})
//function to get data fromserver
const retrieveData = async () =>{
   const request = await fetch('/all');
   try {
   // Transform into JSON
   const allData = await request.json()
   console.log(allData)
   // Write updated data to DOM elements
   document.getElementById("temp").innerHTML= Math.round(allData.theTemp)+ 'degrees';
   document.getElementById("content").innerHTML = allData.theFeel;
   document.getElementById("date").innerHTML =allData.date;
   }
   // appropriately handle the error
   catch(error) {
     console.log("error", error);
     
   }
  }