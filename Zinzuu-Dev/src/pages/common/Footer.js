import React from 'react';


function Footer(props) {

    return (
        <div className=" bg-dark d-flex justify-content-center">
            <div className="text-white d-flex justify-content-between p-2 col-md-4">
                <a href={'/customer/privacy-policy'}>Privacy Policy</a>
                <p>Powered by Zinzuu</p>
            </div>
        </div>
    )
}

export default Footer;
