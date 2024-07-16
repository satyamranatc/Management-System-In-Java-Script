let Form = document.getElementById('Form');
let ListUl = document.getElementById('ListUl');
let IdErr = document.getElementById('IdErr');

let PersonDisplayId = document.getElementById('PersonDisplayId');
let PersonDisplayName = document.getElementById('PersonDisplayName');
let PersonDisplayAge = document.getElementById('PersonDisplayAge');

let allUsers = [];

function Delete()
{
    let arr = allUsers.filter((e)=>e.Id != U.Id);
    allUsers = arr;
    Display();
}


function Display()
{
    ListUl.innerHTML = '';

    allUsers.map((U)=>{
        let Li = document.createElement("li");
        Li.innerText = U.Name;

        let LBtn = document.createElement("Button");
        LBtn.innerHTML = 'Delete';
        LBtn.addEventListener("Click",()=>{
         Delete();
        })
        Li.appendChild(LBtn);

        Li.addEventListener('click',()=>{
            PersonDisplayId.innerHTML = U.Id;
            PersonDisplayName.innerHTML = U.Name;
            PersonDisplayAge.innerHTML = U.Age;
        });
        ListUl.append(Li);
    })

}


Form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let Obj = {
        Id: e.target[0].value,
        Name: e.target[1].value,
        Age: e.target[2].value,
    }
   

   let Flag = false
   for (i of allUsers)
   {
    if (Obj.Id == i.Id)
    {
        Flag = true;
        break;
    }
   }


   if (Flag == false)
   {
    
    IdErr.style.display = 'none'
    allUsers.push(Obj);
    Display();

   }
   else
   {
    IdErr.innerHTML = 'Id already exists!';
    IdErr.style.display = 'block'
   }
    
});

