

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
let check=parseInt(per);
if(check<0)
{
    per=1;
}
if(check>3)
{
    per=3;
}

console.log(typeof(1));
console.log(typeof(check));



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



