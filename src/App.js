import { generate } from "@pdfme/generator";
import { Template, Form } from '@pdfme/ui';
import { render } from "@testing-library/react";
// import { First } from "react-bootstrap/esm/PageItem";
// import { Viewer } from "@pdfme/ui";
import template from "./template"

// var link = document.createElement("a");
const queryParameters = new URLSearchParams(window.location.search)
const FirstName = queryParameters.get("FirstName")
const LastName = queryParameters.get("LastName")
const studentpassword = queryParameters.get("studentpassword")
const personalemail = queryParameters.get("personalemail")
// const Typing = queryParameters.get("Typing")
const FirstLast = FirstName + '.' + LastName
const compassemail = FirstLast + '@my-aolcc.com'
const UPN = FirstLast + '@aolccbc.com'
// var domContainer = document.createElement("div")
// domContainer = domContainer.className("container")

const domContainer = document.getElementById('container');

// const template = {
//   basePdf: basePdf,
//   schemas: schemas,
//   columns, columns
// }
let runs = 0
const inputs = [
  {
    "FirstName": FirstName,
    "personalemail": personalemail,
    "password": studentpassword,
    "campusemail": UPN,
    "password copy": studentpassword,
    "first.last": FirstLast,
    "password copy 2": studentpassword,
    "first.last copy": compassemail,
    "password copy 3": studentpassword,
    "first.last copy 2": FirstLast,
    "password copy 4": studentpassword
  }
];

  async function App() {
    runs++
    if (runs === 1){
      // const form = new Form({ domContainer, template, inputs });
    let pdf = await generate({ template, inputs })
    let blob = new Blob([pdf.buffer], { type: 'application/pdf' })
    let blobUrl = URL.createObjectURL(blob);
    // link.href = blobUrl;
    let Embed = document.getElementById("pdfData")

    // let Embed = document.createElement("object")
    Embed.data = blobUrl
    Embed.type = "application/pdf"
    Embed.width = "100%"
    Embed.height = "800px"
    // let Link = document.createElement("a")
    let Link = document.getElementById("pdfLink")
    Link.href = blobUrl
    Link.innerText = "Click here to download the printout"
    
       
    
    // link.download = FirstLast + "_Printout.pdf";
    // link.innerHTML = "Click here to download";
    // document.body.appendChild(link);
    // link.click();
    // window.close ()
    // <form />
    
    
    }



};

export default App;