  async function getInput(){
    try{
        document.getElementById("state").innerHTML=" "
        document.getElementById("input").innerHTML=" "
        document.getElementById("district").innerHTML=" "

        let pincode = document.getElementById("input").value
        if(pincode.length<6){
            alert("entered wrong pincode")
        }
        // console.log(pincode)
        
        
        let url="https://api.postalpincode.in/pincode/"+pincode
        
        let reponse=await  fetch(url)
        let data= await reponse.json()
            console.log(data[0].PostOffice[0].State)
            console.log(data[0].PostOffice[0].District)
            let State =document.getElementById("state")
            State.value= data[0].PostOffice[0].State
            let District =document.getElementById("district")
            District.value= data[0].PostOffice[0].District
    
    }
                   
                
    catch(err){
        console.log(err)
        alert("wrong pincode")
    }

}

