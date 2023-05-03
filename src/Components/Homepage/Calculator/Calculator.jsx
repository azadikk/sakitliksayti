import './Calculator.css';
import CalculatorTwo from './Calculator2';
import Notes from './CalculatorNotes';




export default function () {
    return (
        <div className='Calculator'>
            
            <img className='SizeLogo' src='size.png' />
            <h1 className='calc'>
                Kalkulator
            </h1>
            <h2 className='calcText'>
            Hesablama pulsuzdur. 1 iş günü ərzində nəticə.  Hesablama <br></br>
            təxminidir. Dəqiq hesablama üçün sayğacın ayrılması <br></br> 
            lazımdır.
            </h2>

            <h3 className='doorSizeEnter'>
                Otaq ölçülərini daxil edin
            </h3>
            <input id="length" type='text' placeholder='Uzunluğu (L1),  m' />
            <input id="width" type='text' placeholder='Eni (L2),  m' />
            <input id="height" type='text' placeholder='Hündürlüyü (H1),  m' />
            <CalculatorTwo />
            <Notes />
        </div>
    );
}