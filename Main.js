let MyFrom = document.getElementsByTagName("form")[0];
let ListUl = document.getElementById("ListUl");

let AllUsers = [];

MyFrom.addEventListener("submit", (e)=> 
{
    e.preventDefault();
    let P = {
        Id: e.target[0].value,
        Name: e.target[1].value,
        Age: e.target[2].value,
    }
   
    let Flag = false;
    for(let i of AllUsers)
    {
        if(i.Id == P.Id)
        {
          alert("Soory User Already Exists");
          Flag = true;
        }
    }

    if(Flag == false)
    {
        AllUsers.push(P);
        console.log(AllUsers)
    
        let L = document.createElement('li');
        L.innerText = P.Name;
        L.addEventListener('click',() =>{
            let Index = AllUsers.indexOf(P);
            
            console.log(AllUsers[Index]);
        });
        ListUl.appendChild(L);
    }

});

