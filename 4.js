const clickme =()=>{
    const mydata = new Date();
     const data = mydata.toLocaleDateString();
      const time = mydata.toLocaleTimeString();
    document.getElementById("data").innerHTML=data;
    document.getElementById("time").innerHTML=time;

}