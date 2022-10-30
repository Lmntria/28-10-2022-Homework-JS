let submit=document.getElementById("submit")
let info=document.getElementById("correction")
let tableBody=document.getElementById("table-body")
const btn=document.getElementById("getElements");
const BaseLink="https://dummyjson.com"
// const getdata=()=>{
//   const fetchdata=fetch(`${BaseLink}/users`)
//   .then((x)=>x.json())
//   .then((data)=>{
//     data?.map((item)=>{
//       tableBody.innerHTML+=`
//       <tr>
//           <th scope="row" class="list-number"><input type="checkbox"></th>
//           <td>${item.name}</td>
//           <td>${item.email}</td>
//           <td>${item.address.suite},${item.address.street},${item.address.city}</td>
//           <td>${item.phone}</td>
//           <td class="text-center">
//             <i class="las la-edit btn btn-light btn-yellow fs-5" onclick="redacte(this)"></i>
//             <i class="las la-trash btn btn-danger" onclick="this.parentElement.parentElement.remove()"></i>
//           </td>
//       </tr>
//       `
//     })
//   })

//   return fetchdata
// }
let count=1


const getdata=()=>{

  const fetchdata=fetch(`${BaseLink}/users/${count}`)
  .then((x)=>x.json())
  .then((data)=>{
    tableBody.innerHTML+=`
      <tr>
          <th scope="row" class="list-number"><img width="50" src="${data.image}"></th>
          <td>${data.firstName} ${data.lastName}</td>
          <td>${data.email}</td>
          <td>${data.address.address},${data.address.city}</td>
          <td>${data.phone}</td>
          <td class="text-center">
            <i class="las la-edit btn btn-light btn-yellow fs-5" onclick="redacte(this)"></i>
            <i class="las la-trash btn btn-danger" onclick="this.parentElement.parentElement.remove()"></i>
          </td>
      </tr>
      `

  })
  count++
  return fetchdata
}
submit.addEventListener('click',getdata)