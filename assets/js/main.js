let submit=document.getElementById("submit")
let info=document.getElementById("correction")
let tableBody=document.getElementById("table-body")
let add=document.getElementById("add")
const btn=document.getElementById("getElements");
const baseLink="https://jsonplaceholder.typicode.com"
const getdata=()=>{
  const fetchdata=fetch(`${baseLink}/users`)
  .then((data)=>data.json())
  .then((converted)=>{
    converted?.map((person)=>{
      tableBody.innerHTML+=`
      <tr>
          <td>${person.name}</td>
          <td>${person.username}</td>
          <td>${person.email}</td>
          <td>${person.address.suite},${person.address.street},${person.address.city}</td>
          <td>${person.phone}</td>
          <td class="text-center">
            <i class="las la-edit btn btn-light btn-yellow fs-5" id="edit"></i>
            <i class="las la-trash btn btn-danger" onclick="this.parentElement.parentElement.remove()"></i>
          </td>
      </tr>
      `
    })
  })

  return fetchdata
}
// let count=1


// const getdata=()=>{

//   const fetchdata=fetch(`${BaseLink}/users/${count}`)
//   .then((x)=>x.json())
//   .then((data)=>{
//     tableBody.innerHTML+=`
//       <tr>
//           <th scope="row" class="list-number"><img width="50" src="${data.image}"></th>
//           <td>${data.firstName} ${data.lastName}</td>
//           <td>${data.email}</td>
//           <td>${data.address.address},${data.address.city}</td>
//           <td>${data.phone}</td>
//           <td class="text-center">
//             <i class="las la-edit btn btn-light btn-yellow fs-5" onclick="redacte(this)"></i>
//             <i class="las la-trash btn btn-danger" onclick="this.parentElement.parentElement.remove()"></i>
//           </td>
//       </tr>
//       `

//   })
//   count++
//   return fetchdata
// }
// submit.addEventListener('click',getdata)
getdata()

const inputName=document.getElementById("inputName")
const inputSurname=document.getElementById("inputSurname")
const inputEmail=document.getElementById("email")
const inputAdress=document.getElementById("inputAdress")
const inputPhoneNum=document.getElementById("inputPhoneNum")
const inputUsername=document.getElementById("inputUsername")
const invisableDiv=document.getElementsByClassName("d-none")
const edit=document.getElementById("edit")

tableBody.addEventListener('click',e=>{
  e.target.id=="edit"
  if (!CheckEmpty()) {
    alert("Edit etmek ucun ilk once inputlari doldurun!!!")
  }
  else{
    e.target.parentElement.parentElement.innerHTML=`
    <tr>
      <td>${inputName.value} ${inputSurname.value}</td>
      <td>${inputUsername.value}</td>
      <td>${inputEmail.value}</td>
      <td>${inputAdress.value}</td>
      <td>${inputPhoneNum.value}</td>
      <td class="text-center">
        <i class="las la-edit btn btn-light btn-yellow fs-5" id="edit"></i>
        <i class="las la-trash btn btn-danger" onclick="this.parentElement.parentElement.remove()"></i>
      </td>
    </tr>`
    ZeroOut()
  }
})


function CheckEmpty() {
  if (inputName.value.trim().length==0 && inputSurname.value.trim().length==0 &&
  inputUsername.value.trim().length==0 && inputEmail.value.trim().length==0 &&
  inputAdress.value.trim().length==0 && inputPhoneNum.value.trim().length==0) {
    return false
  }
  return true
}


add.addEventListener('click',()=>{
  if (!CheckEmpty()) {
    alert("Edit etmek ucun ilk once inputlari doldurun!!!")
  }
  else{
    tableBody.innerHTML+=`
    <tr>
      <td>${inputName.value} ${inputSurname.value}</td>
      <td>${inputUsername.value}</td>
      <td>${inputEmail.value}</td>
      <td>${inputAdress.value}</td>
      <td>${inputPhoneNum.value}</td>
      <td class="text-center">
        <i class="las la-edit btn btn-light btn-yellow fs-5" id="edit"></i>
        <i class="las la-trash btn btn-danger" onclick="this.parentElement.parentElement.remove()"></i>
      </td>
    </tr>`
    ZeroOut()
  }
})

function ZeroOut() {
  inputName.value=""
  inputSurname.value=""
  inputUsername.value=""
  inputEmail.value=""
  inputAdress.value=""
  inputPhoneNum.value=""
}