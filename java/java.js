

let taskData=[];


function Display()
{

setTimeout(()=>{
    var html="<table border='1|1' class='table'>";
    html+="<thead>"
    html+="<tr >"
    html+="<td>No</td>"
    html+="<td>Task Name</td>"
    html+="<td>Periority</td>"
    html+="<td>Action</td>"
    html+="</tr>"
    html+="</thead>"

    for(let i=0;i<taskData.length;i++)
    {
        let Sno=i+1;
        html+="<tbody>";
        html+="<tr>";
        html+="<td>"+ Sno +"</td>";
        html+="<td>"+ taskData[i].task +"</td>";
        html+="<td>"+ taskData[i].per +"</td>";
        html+="<td>"+ `<button class="remove" onclick='deleteRow(${taskData[i].id})'>Delete</button>` +"</td>";
        html+="</tr>"
        html+="<tbody>";
    }

    html+="<table>"
    document.getElementById("dataTable").innerHTML=html;
},200)

}

function addOnclick()
{

let task=document.getElementById("taskName").value;
let per=document.getElementById("Periority").value;
console.log(typeof(per));
if(per>3)
{
    per=3;   
}
else if(per<=0)
{
    per=1;
}

else if(per!=typeof(Number))
{
    alert("not valid periority");
    return;
}

if(task && per)
{
 let id=taskData.length+1;
 taskData.push({task:task,per:per,id:id});
 Display();
}

}

function clearFields()
{
document.getElementById("taskName").value="";
document.getElementById("Periority").value="";

}

function deleteRow(rec)
{
  
   let filt=taskData.filter((a,i)=>{
        if(rec==a.id)
        {
            taskData.splice(i,1);
            Display();
        }
    })
    
}

console.log(taskData);



