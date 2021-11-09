import React from "react";

function Footer() {
    return(
        <div className="">
                        <h3>let's connect</h3>
              <div class="row" id="social-media">
                  <!-- this is the left side of the page-->
                  <div class="col-sm-12 col-md-6 col-lg-6">
                      <h4 id="email-header">Contact me below</h4>
                       <p>407-504-7746</p>
                      <a href="mailto:shannon.posey@protonmail.com">shannon.posey [@] protonmail.com</a>
                  </div>
                <!-- this is the right side of the page-->
                  <div class="col-sm-12 col-md-6 col-lg-6">
                      <h4 id="social-header">Or, find me on the interwebs</h4>
                      <div class="row">
                      <div class="col-sm-12 col-md-6 col-lg-6">
                          <a href="https://www.linkedin.com/in/shannonposey"><img class="social" src="./assets/img/LinkedIn.png" alt="LinkedIn Logo"></a>
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-6">
                          <a href="https://github.com/shannonposey"><img class="social git" src="./assets/img/GitHub.png" alt="GitHub Logo"></a>
                        </div>
                      </div>
                  </div>
              </div>
            <div class="container-fluid copyright-container"></div>
            <div class="row d-flex justify-content-center align-item-center text-align-center">
                <div class="col-12 copyright">
                    <h5 class="text-white">&copy; 2021 &verbar; Shannon Posey</h5>
                </div>
            </div>
           </footer>
        </div>
    )
};

export default Footer;