import './About.css';

export default function Company() {
    return (
        <div className="companyAbout">
            <img id="bina" src='bina.jpg' />
            <img id="binaBorder" src='border.png' />

            <span className='textArea'>
                <h1 id='text-area-h1'style={{color: '#393B3D', fontSize: '42px', fontWeight: '700'}}>Şirkət haqqında</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultricies <br></br>
                consectetur suscipit est. Amet sit mauris turpis tellus leo. Montes, nulla <br></br>
                rhoncus nisl hendrerit amet dolor. <br></br>

                Sollicitudin quam pellentesque diam pretium pretium, ultrices eu massa consectetur.<br></br>
                Velit accumsan, pharetra, eget maecenas aliquam magna sed aenean.
                </p>
            </span>

        </div>
    );
}