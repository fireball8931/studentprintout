import { jsPDF } from "jspdf";
// import Barcode from "./barcode.png";

const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await document.querySelector("#pdf");
        pdf.html(data).then(() => {
          pdf.save("Prinout.pdf");
        });
};


export default createPDF;