import React from "react";




const Index= Index.div`

.footer {
    color: rgba(255, 255, 255, 0.5);
}

.footer .footer-list li a {
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.5s;
    line-height: 30px;
}

.footer .footer-list li a:hover {
    color: rgba(255, 255, 255, 0.8);
}

.footer .footer-list li {
    margin-bottom: 5px;
}

.footer-social li a i {
    font-size: 20px;
    color: #fff;
    border-radius: 50%;
    border: 2px solid;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 36px;
    margin-right: 3px;
    display: inline-block;
}

.footer-social li a i.facebook {
    background-color: #5472d2;
    border-color: #5472d2;
}


.footer-social li a i.linkedin {
    background-color: #0173B2;
    border-color: #0173B2;
}

.footer-desc {
    line-height: 26px;
}

.footer-border {
    height: 1px;
    background-color: #4a4a4a;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
}

.subcribe-form {
    height: 48px;
    border: none;
    border-radius: 0px;
}

.subcribe-btn {
    background-color: #ffd800;
    border-radius: 2px;
    font-size: 16px;
    font-weight: normal;
    line-height: 16px;
    border: 0px solid #ffd800;
    color: #2ddd4c;
    padding: 15px 24px 15px 24px;
    text-transform: normal;
    white-space: normal;
    outline: none !important;
}

.footer-terms a {
    color: rgba(255, 255, 255, 0.5);
}

`;


function Footer() {
    return(
        <Index> 
            <section class="bg-dark footer pt-2" id="contact">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-lg-4">
                        <h5 class="text-white footer-title "> Acerca de nosotros</h5>
                        <div class="mt-4">
                            <p class="footer-desc">Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="mt-4">
                            <ul class="list-unstyled text-white footer-social list-inline">
                                <li class="list-inline-item"><a href="index.html#"><i class="mdi mdi-facebook facebook"></i></a></li>
                                <li class="list-inline-item"><a href="index.html#"><i class="mdi mdi-instagram instagram"></i></a></li>
                                <li class="list-inline-item"><a href="index.html#"><i class="mdi mdi-twitter twitter"></i></a></li>
                                <li class="list-inline-item"><a href="index.html#"><i class="mdi mdi-linkedin linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <h5 class="text-white footer-title">Soporte</h5>
                        <div class="mt-4">
                            <ul class="list-unstyled text-white footer-list">
                                <li><a href="index.html#">Ayuda y soporte</a></li>
                                <li><a href="index.html#">Politicas de privacidad</a></li>
                                <li><a href="index.html#">Noticias</a></li>
                                <li><a href="index.html#">Terminos y condiciones</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <h5 class="text-white footer-title">Visita nuestras redes</h5>
                        <div class="mt-4">
                            <ul class="list-unstyled footer-list">
                                <li><a href="https://www.facebook.com/">Facebook</a></li>
                          
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <h5 class="text-white footer-title">Encuentranos </h5>
                        <div class="mt-4">
                            <p>Chile Nº 270 Ciudad de Buenos Aires </p>
            
                            <p>E-mail: info@enve.com</p>
                        </div>
                    </div>
                </div>
                <div class="footer-border"></div>
                <div class="row pb-4">
                    <div class="col-lg-12">
                        <div class="float-right pull-none">
                            <p class="mb-0"> Web creado por <span>Enve</span></p>
                        </div>
                        <div class="float-left pull-none">
                            <p class="footer-terms">Enve</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         </Index>
)
}
export default Footer;