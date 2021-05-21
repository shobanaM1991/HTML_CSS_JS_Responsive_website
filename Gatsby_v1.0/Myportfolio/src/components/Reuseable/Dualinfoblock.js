import React from 'react'
import Heading from '../Reuseable/Heading'
import {Link} from 'gatsby'


export default function Dualinfoblock({heading}) {
    return (
        <section className="bg-theme my-4 py-4">
            <div className="container">
                <Heading  title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto text-left">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloremque alias reiciendis exercitationem expedita sint animi harum atque. Enim accusantium similique laboriosam obcaecati id omnis quas optio hic, fugit repellendus! Tenetur possimus voluptatem sint totam. Animi quae impedit reiciendis eum soluta nemo consequuntur dicta unde iusto ipsum illo quis vero harum ut, expedita dolorem fuga maiores tempore magni doloribus. Voluptatum quasi recusandae atque animi quis eaque sequi illo fugiat cum!
                        </p>
                    </div>
                    <div className="col-4">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUKtEgJyJ0IkDKCENak3TMFYsE8uZqsdSrA&usqp=CAU" class="card-img-top" alt="image goes here" />
                            <div class="card-body">
                                <h5 class="card-title text-success">Just click photos</h5>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas ipsum enim perspiciatis nobis autem odit, necessitatibus voluptatem ipsam provident.
                                </p>
                                <Link to="/ourteam" class="btn btn-primary">{heading}</Link>
                               {/*  <a href="#" class="btn btn-primary">
                                    {heading}
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
