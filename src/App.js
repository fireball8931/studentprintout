import { generate } from "@pdfme/generator";
// import { First } from "react-bootstrap/esm/PageItem";
// import { Viewer } from "@pdfme/ui";
import template from "./template"

var link = document.createElement("a");
const queryParameters = new URLSearchParams(window.location.search)
const FirstName = queryParameters.get("FirstName")
const LastName = queryParameters.get("LastName")
const studentpassword = queryParameters.get("studentpassword")
const personalemail = queryParameters.get("personalemail")
// const Typing = queryParameters.get("Typing")
const FirstLast = FirstName + '.' + LastName
const compassemail = FirstLast + '@my-aolcc.com'
const UPN = FirstLast + '@aolccbc.com'

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
    let pdf = await generate({ template, inputs })
    let blob = new Blob([pdf.buffer], { type: 'application/pdf' })
  // let hi = GeneratePDFFile()

    let blobUrl = URL.createObjectURL(blob);

    
    link.href = blobUrl;
    link.download = FirstLast + "_Printout.pdf";
    link.innerHTML = "Click here to download";
    document.body.appendChild(link);
    
    
    link.click();
    window.close ()
    }



};

export default App;