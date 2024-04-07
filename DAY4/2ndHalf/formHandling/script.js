// const Firstnamechange =(e)=>{
//     console.log(e.target.value);
//     if (val.lenght>1) {
//         console.log('correct');
//     }
// }

// function submitform(e) {
//     e.parentDefault();
//     const t  = e.target
//     // console.log(e)
//     for(let i=0; i<t.lenght; i++)
//     {
//         // console.dir(t[i]);
//         // console.log(t[i].value);
//         // console.log(t[i].type);
//         const ty =t[i].type;
//         const vl =t[i].value;
//         const nm = t[i].name;


//         if(ty!='submit'){
//         console.log(ty, vl);
//         if (ty=='checkbox') {
//             console.log(t[i].checked)
            
//         }
//         if(ty!='submit') 
//         {
//             res[nm]= vl;
//         }
// 3
        
//     }}
//    console.log(res);
// }
// const res =
// document.querySelector('div');
// const c=
// document.querySelector('p:nth-of-type');


// // console.log(div);
// // console.log(res);
// res.removeChild(c);

// function getInfo(e){
//     console.log(e);
//     e.target.class='abc';
//     e.target.style.backgroundcolor='red';
//     e.target.style.color='blue';

    // const d=document.querySelector("div");
    // // const el=document.createElement("p");
    // el.innerText="My Name is singh ";


const firstNameChange = (e) =>{
    console.log(e.target.value);
    // if(val.length>1){
    //     console.log('correct');
    // }
}

function submitform(e){
    e.preventDefault();
    const t=e.target;
    const res ={
        hobbies:[],
    };
    for(let i=0;i<t.length;i++){
        const ty=t[i].type;
        // const ty=t[i].type;
        // const vl=t[i].value;
        // const nm=t[i].name;
        // console.log(nm,ty,vl);

        if(ty!='submit'){
            const vl=t[i].value;
            const nm=t[i].name;

            if(ty=='checkbox'&&t[i].checked){
                res.hobbies.push(vl);
            }
            if(ty!='checkbox'){
                res[nm]=vl;
            }
        }
    }
    console.log(res);
}   