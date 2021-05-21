import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
               <Heading title = {heading} /> 
            </div>
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-left">
                    <p className="lead text-white mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit rem optio dolorum hic consequuntur, odio adipisci nostrum quod ullam quidem, possimus accusamus asperiores qui nesciunt quia error cum earum saepe aut aliquid. Repudiandae perspiciatis nostrum eos aliquam dicta, maxime quasi. Adipisci natus voluptatum doloremque placeat mollitia! Rerum commodi, tempore deserunt, omnis molestiae sint eveniet nobis architecto error mollitia non a.      
                    </p> 
                    <Link to="/about">
                        <button className="btn btn-warning btn-lg">
                            {heading}
                        </button>
                    </Link>
                </div> 
            </div>
        </section>
    )
}
