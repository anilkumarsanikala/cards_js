let card = document.querySelector("div")
card.innerHTML=`<img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"  width="250"/>
<b style="display:block">Virat Kohli</b>
<p>RCB Captian</p>
<button style="padding:4px 10px; border:2px solid white;border-radius:20px;background-color:black; color: white">Hire Now</button>`
card.style.border="3px solid black";
card.style.display="inline-block";
card.style.padding="10px"
card.style.borderRadius="20px"
card.style.backgroundColor="red"


let card2 = document.getElementById("div2")
card2.innerHTML=`<img src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-111741230/111741230.jpg"  width="250" height="165"/>
<b style="display:block">Rohit Sharma</b>
<p>Mumbai Captian</p>
<button style="padding:4px 10px; border:2px solid white;border-radius:20px;background-color:black; color: white">Hire Now</button>`
card2.style.border="3px solid black";
card2.style.display="inline-block";
card2.style.padding="10px"
card2.style.borderRadius="20px"
card2.style.backgroundColor="blue"




let newCard=document.createElement("div")
newCard.innerHTML=`<img src="https://images.indianexpress.com/2024/07/hardik-pandya_1600_PTI.jpg"  width="250" height="165"/>
<b style="display:block">Hardik Pandya</b>
<p>Mumbai Captian</p>
<button style="padding:4px 10px; border:2px solid white;border-radius:20px;background-color:black; color: white">Hire Now</button>`
newCard.style.border="3px solid red";
newCard.style.display="inline-block";
newCard.style.padding="10px"
newCard.style.borderRadius="20px"
newCard.style.backgroundColor="lightgreen"

document.body.appendChild(newCard)

let newCard2=document.createElement("div")
newCard2.innerHTML=`<img src="https://static.toiimg.com/thumb/msid-109138306,width-400,resizemode-4/109138306.jpg"  width="250" height="165"/>
<b style="display:block">MS Dhoni</b>
<p>CSK Captian</p>
<button style="padding:4px 10px; border:2px solid white;border-radius:20px;background-color:black; color: white">Hire Now</button>`
newCard2.style.border="3px solid black";
newCard2.style.display="inline-block";
newCard2.style.padding="10px"
newCard2.style.marginLeft="5px"
newCard2.style.borderRadius="20px"
newCard2.style.backgroundColor="yellow"
document.body.appendChild(newCard2)