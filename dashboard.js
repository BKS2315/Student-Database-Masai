let studentSData = JSON.parse(localStorage.getItem("studentData"))
console.log('studentSData:', studentSData)
function append1(){
    let div1 = document.getElementById('batch1');
    let div2 = document.getElementById('batch2');
    let div3 = document.getElementById('batch3');
    let div4 = document.getElementById('batch4');
    let nav = document.getElementById("navbar")
    let obj = {};
    studentSData.map(function(ele){
        // console.log(ele.batch)
        if(obj[ele.batch]==undefined){
            obj[ele.batch]=1;
        }
        else{
            obj[ele.batch]++;
        }
        
        for(i in obj){
            if(i=="web-16"){
                div1.innerText=`${i}: ${obj[i]}`
                nav.append(div1)

            }
            if(i=="web-17"){
                div2.innerText=`${i}: ${obj[i]}`
                nav.append(div2)

            }
            if(i=="web-18"){
                div3.innerText=`${i}: ${obj[i]}`
                nav.append(div3)

            }
            if(i=="web-19"){
                div4.innerText=`${i}: ${obj[i]}`
                nav.append(div4)

            }
            console.log(`${i}:${obj[i]}`)
        }
    })
    // console.log('obj:', obj)
   

}
append1();
function append(){
    studentSData.map(function(ele,index){
        
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText = ele.name;
        let col2 = document.createElement("td");
        col2.innerText = ele.course;
        let col3 = document.createElement("td");
        col3.innerText = ele.unit;
        let col4 = document.createElement("td");
        col4.innerText = ele.batch;
        let col5 = document.createElement("td");
        let imgs = document.createElement("img");
        imgs.setAttribute("id","studentImg")
        imgs.src = ele.image
        // col5.src = ele.image
        col5.append(imgs)

        let col6 = document.createElement("td");
        let rmv = document.createElement("button");
        rmv.innerText = "Remove";
        rmv.addEventListener("click",function(){
        removeStudent(ele,index);
        })
        col6.append(rmv)
        
        row.append(col1,col2,col3,col4,col5,col6)
        let tbody = document.getElementById("body");
        tbody.append(row)
        
    })
}
append()
function removeStudent(ele,index){
console.log(ele)
let trash = JSON.parse(localStorage.getItem("trash")) || [];
trash.push(ele);
localStorage.setItem("trash",JSON.stringify(trash));
studentSData.splice(index,1)
console.log('studentSDataRMV:', studentSData)
localStorage.setItem("studentData",JSON.stringify(studentSData));
window.location.reload();
}