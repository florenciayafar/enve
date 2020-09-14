import React from "react"
import feactures2 from "/home/florencia/Escritorio/enve/src/assets/feactures-2.jpg";
import feactures3 from "/home/florencia/Escritorio/enve/src/assets/feactures-3.jpg";




export const Features = () => ( 
<section className="section bg-light" id="features"  >
  
   <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <p class="sec_small_title text-custom mb-0">Features</p>
                            <h4 class="text-capitalize font-weight-bold mb-0">Key features of the product</h4>
                            <div class="main-title-border">
                                <i class="mdi mdi-cannabis"></i>
                            </div>      
                            <p class="sec_subtitle mx-auto text-muted mb-0">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>     
                        </div>
                    </div>
                </div>

    <div className="row mt-5 vertical-content">
        <div className="col-lg-6">
            <div className="features_col mt-3">
                <div className="features_heading">
                    <h2>Create Something Totally & Amazing Professional Features.</h2>
                    <p className="text-muted mb-0 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <div className="features_list mt-3">
                            <div className="features_list_num">
                                <p>1</p>
                            </div>
                            <div className="features_list_desc mt-3">
                                <h5 className="font-weight-bold">Creative Execution</h5>
                                <p className="text-muted mb-0">Nulla sociis odio pharetra aptent senectus volutpat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="features_list mt-3">
                            <div className="features_list_num">
                                <p>2</p>
                            </div>
                            <div className="features_list_desc mt-3">
                                <h5 className="font-weight-bold">Sky's the limit</h5>
                                <p className="text-muted mb-0">sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
             <div
                img src={feactures2} alt="foto2" className="img-fluid mx-auto d-block">
            </div>
        </div>

    <div className="row mt-5 vertical-content">
        <div className="col-lg-6">
            < div img src={feactures3} alt="foto3" className="img-fluid mx-auto d-block">
            </div>
        </div>
    </div>
        <div className="col-lg-6">
            <div className="features_list mt-3">
                <div className="features_icon">
                    <i className="mdi mdi-all-inclusive text-center"></i>
                </div>
                <div className="features_content mt-4">
                    <div className="features_heading">
                        <h2 className="mb-0">Small Business For Professional Features.</h2>
                        <p className="text-muted text-muted mb-0 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="features_list mt-4">
                        <p className="mb-0 text-muted"><i className="mdi mdi-radiobox-marked text-custom"></i> Softie Landing Page.</p>
                        <p className="mb-0 text-muted"><i className="mdi mdi-radiobox-marked text-custom"></i> Bootstrap Html Css Design.</p>
                        <p className="mb-0 text-muted"><i className="mdi mdi-radiobox-marked text-custom"></i> Clean & Creative.</p>
                    </div>
                    <div className="mt-4">
                        <a href="image_1.html#" className="btn btn-custom btn-rounded">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row mt-5 vertical-content">
        <div className="col-lg-6">
            <div className="features_desc mt-3">
                <div className="features_heading">
                    <h2>Perfact For Small & Corporate Businesses Template.</h2>
                    <div className="features_divider mt-3"></div>
                    <p className="text-muted mb-0 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="features">
                    <div classN="features-icon features-left">
                        <i className="mdi mdi-check"></i>
                    </div>
                    <div className="features-desc">
                        <h3 className="features-title font-weight-bold mb-0">Clean & Minimal Design</h3>
                        <p className="features-sub-title pt-2 text-muted">You want customer to your store. Easily publish your coupans and when a user has catch one of your coupens.</p>
                    </div>
                </div> 
                <div className="features">
                    <div className="features-icon features-left">
                        <i className="mdi mdi-check"></i>
                    </div>
                    <div className="features-desc">
                        <h3 className="features-title font-weight-bold mb-0">Elegant & Modern Design</h3>
                        <p className="features-sub-title pt-2 text-muted">You want customer to your store. Easily publish your coupans and when a user has catch one of your coupens.</p>
                    </div>
                </div> 
            </div>
        </div>
        

    </div>
</div>

</section>

)