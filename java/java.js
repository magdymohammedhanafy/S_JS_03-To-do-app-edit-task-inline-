
let taskData=[];
let minI=0;
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
        html+="<td>"+ `<button class="remove" onclick='deleteRow(${taskData[i].id})'>Delete</button>`
        +`<button class="edit" onclick='editRow(${taskData[i].id})'>Edit</button>` +
        "</td>";
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

if(task && per)
{
 let id=taskData.length+1;
 taskData.push({task:task,per:per,id:id});
 Display();
 takehightPeriority(per); 
}
}


function clearFields()
{
document.getElementById("taskName").value="";
document.getElementById("Periority").value="";
}



function deleteRow(rec)
{
     
 let filt=taskData.map((a,i)=>{
        console.log(rec);
        console.log(a.id);
        console.log(i);
   
        if(rec==a.id)
        {
          
            taskData.splice(i,1);
            Display();
        }
        
      
    })
   
    
}

function editRow(rec)
{
   
    let check=0;
   let filt=taskData.map((a,i)=>{
        let x=true;
    if(rec==a.id)
    {
        if(x){
           document.getElementById("save").addEventListener("click", function(){
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
    
               if(task && per)
               {
               taskData[i]={task:task,per:per,id:i+1};
               console.log(taskData[i]);
               } 
            console.log("l");
            Display();
            x=false;

          });
        } 
    } 
   })
  }


function takehightPeriority(per){
    min=taskData[0].per;
     minI=0;
    for(let k=0;k<taskData.length;k++)
    if(min>=taskData[k].per)
    {
     min=taskData[k].per;
     minI=k;
    }
    return minI; 
};

function hightPeriority()
{
  console.log(taskData[minI]);
}


















