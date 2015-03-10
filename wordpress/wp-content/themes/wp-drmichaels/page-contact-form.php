<?php /* Template Name: Contact Form Template */ get_header(); ?>
            <div id="spotlight">
                <div class="grid-box width100 grid-v">
                    <div class="module mod-box mod-overlay hidden-phone deepest">
                        <div class="custom-module" style="background-image: url('/images/dmdc/bg-mac.jpg')">
                            <div class="wrapper">
                                <div class="infotip-style">
                                    <div class="uk-alert-announce uk-alert"><span class="infotip bg-blue">We provide <i class="uk-icon-check-circle"></i></span> Invisalign, Incognito, Six Month Smiles, Damon System, Ceramic and Metal Braces <span class="infotip-link"><a href="#" target="_self">LEARN MORE</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-container uk-container-center grid-block">
                <div id="main" class="grid-block">
                    <div id="maininner" class="grid-box" style="min-height: 730px;">
                        <section id="content" class="grid-block">
                            <div id="system-message-container"></div>
                            <div class="bfClearfix">
                                <table style="display:none;width:100%;" border="" id="bfReCaptchaWrap">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div id="bfReCaptchaDiv"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div id="ff_formdiv1" class="bfFormDiv">
                                    <div class="bfPage-tl">
                                        <div class="bfPage-tr">
                                            <div class="bfPage-t"></div>
                                        </div>
                                    </div>
                                    <div class="bfPage-l">
                                        <div class="bfPage-r">
                                            <div class="bfPage-m bfClearfix">
                                                <form data-ajax="false" action="./Book An Appointment_files/Book An Appointment.html" method="post" name="ff_form1" id="ff_form1" enctype="multipart/form-data" accept-charset="utf-8" onsubmit="return false;" class="bfQuickMode">
                                                    <div id="bfPage1" class="bfPage"> <span class="bfErrorMessage" style="display:none"></span> 
                                                        <div class="bfFieldset-wrapper bfWrapperBlock bfClearfix">
                                                            <div class="bfFieldset-tl">
                                                                <div class="bfFieldset-tr">
                                                                    <div class="bfFieldset-t"></div>
                                                                </div>
                                                            </div>
                                                            <div class="bfFieldset-l">
                                                                <div class="bfFieldset-r">
                                                                    <div class="bfFieldset-m bfClearfix">
                                                                        <fieldset class="bfBlock" id="request">
                                                                            <legend><span class="bfLegend-l"><span class="bfLegend-r"><span class="bfLegend-m">Appointment Request</span></span>
                                                                                </span>
                                                                            </legend>
                                                                            <section class="bfElemWrap bfLabelLeft" id="bfElemWrap5">
                                                                                <label id="bfLabel5" for="ff_elem5">Full Name<span class="bfRequired">*</span> 
                                                                                </label>
                                                                                <input class="ff_elem" type="text" name="ff_nm_fullname[]" value="" id="ff_elem5">
                                                                            </section>
                                                                            <section class="bfElemWrap bfLabelLeft" id="bfElemWrap7">
                                                                                <label id="bfLabel7" for="ff_elem7">Tel / Mobile No.<span class="bfRequired">*</span> 
                                                                                </label>
                                                                                <input class="ff_elem" type="text" name="ff_nm_telno[]" value="" id="ff_elem7">
                                                                            </section>
                                                                            <section class="bfElemWrap bfLabelLeft" id="bfElemWrap8">
                                                                                <label id="bfLabel8" for="ff_elem8">Email<span class="bfRequired">*</span> 
                                                                                </label>
                                                                                <input class="ff_elem" type="text" name="ff_nm_email[]" value="" id="ff_elem8">
                                                                            </section>
                                                                            <section class="bfElemWrap bfLabelLeft" id="bfElemWrap808">
                                                                                <label id="bfLabel808" for="ff_elem808">Treatment</label>
                                                                                <select class="ff_elem chzn-done" name="ff_nm_treatment[]" id="ff_elem808">
                                                                                    <option value="">select treatment...</option>
                                                                                    <option value="Children Dentistry">Children Dentistry</option>
                                                                                    <option value="Cleaning">Cleaning</option>
                                                                                    <option value="Consultation">Consultation</option>
                                                                                    <option value="Crowns/Bridges">Crowns/Bridges</option>
                                                                                    <option value="Dental Checkup">Dental Checkup</option>
                                                                                    <option value="Dentures">Dentures</option>
                                                                                    <option value="Filling/Sealant">Filling/Sealant</option>
                                                                                    <option value="Gum Disease Treatment">Gum Disease Treatment</option>
                                                                                    <option value="Implants">Implants</option>
                                                                                    <option value="Oral Surgery">Oral Surgery</option>
                                                                                    <option value="Orthodontic Braces">Orthodontic Braces</option>
                                                                                    <option value="Prosthodontics">Prosthodontics</option>
                                                                                    <option value="Root Canal">Root Canal</option>
                                                                                    <option value="Sedation Dentistry">Sedation Dentistry</option>
                                                                                    <option value="Smile Makeover">Smile Makeover</option>
                                                                                    <option value="Teeth Whitening">Teeth Whitening</option>
                                                                                    <option value="Veneers">Veneers</option>
                                                                                    <option value="Other">Other</option>
                                                                                </select>
                                                                            </section>
                                                                            <section class="bfElemWrap bfLabelLeft" id="bfElemWrap799">
                                                                                <label id="bfLabel799" for="ff_elem799">Preferred Date &amp; Time</label>
                                                                                <input class="ff_elem" type="text" name="ff_nm_datetime[]" value="" id="ff_elem799">
                                                                            </section>
                                                                            <section class="bfElemWrap bfLabelLeft" id="bfElemWrap904">
                                                                                <label id="bfLabel904" for="ff_elem904">Note &amp; Other Queries</label>
                                                                                <textarea cols="20" rows="5" class="ff_elem" style="height:100px;" name="ff_nm_otherqueries[]" id="ff_elem904"></textarea>
                                                                            </section>
                                                                            <section class="bfElemWrap bfLabelLeft" id="bfElemWrap9">
                                                                                <label id="bfLabel9" for="ff_elem9">Send to<span class="bfRequired">*</span> 
                                                                                </label>
                                                                                <select class="ff_elem chzn-done" name="ff_nm_sendto[]" id="ff_elem9">
                                                                                    <option value="">select clinic branch...</option>
                                                                                    <option value="jumeirah@drmichaels.com">Jumeirah Clinic</option>
                                                                                    <option value="ummsuqeim@drmichaels.com">Umm Suqeim Branch</option>
                                                                                    <option value="childrensdental@drmichaels.com">Children's Dental Center</option>
                                                                                </select>
                                                                            </section>
                                                                            <section class="bfElemWrap bfLabelLeft" id="bfElemWrap10">
                                                                                <label id="bfLabel10" for="bfCaptchaEntry">Authentication</label> <span class="bfCaptcha"> <img alt="" width="230" id="ff_capimgValue" class="ff_capimg" src="img/securimage_show.php"> <br><input autocomplete="off" class="ff_elem" type="text" name="bfCaptchaEntry" id="bfCaptchaEntry"> <a href="#" class="ff_elem" onclick="document.getElementById('bfCaptchaEntry').value='';document.getElementById('bfCaptchaEntry').focus();document.getElementById('ff_capimgValue').src = '/components/com_breezingforms/images/captcha/securimage_show.php?bfMathRandom=' + Math.random(); return false"><img alt="captcha" src="img/refresh-captcha.png"></a> </span> 
                                                                            </section>
                                                                        </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="bfFieldset-bl">
                                                                <div class="bfFieldset-br">
                                                                    <div class="bfFieldset-b"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="button" id="bfSubmitButton" class="bfSubmitButton button" onclick="if(typeof bf_htmltextareainit != 'undefined'){ bf_htmltextareainit() }if(document.getElementById('bfPaymentMethod')){document.getElementById('bfPaymentMethod').value='';};ff_validate_submit(this, 'click');" value="Submit Appointment"><span>Submit Appointment</span>
                                                        </button>
                                                    </div>
                                                    <noscript>Please turn on javascript to submit your data. Thank you!</noscript>
                                                    <input type="hidden" name="ff_contentid" value="0">
                                                    <input type="hidden" name="ff_applic" value="">
                                                    <input type="hidden" name="ff_module_id" value="0">
                                                    <input type="hidden" name="ff_form" value="1">
                                                    <input type="hidden" name="ff_task" value="submit">
                                                    <input type="hidden" name="option" value="com_breezingforms">
                                                    <input type="hidden" name="Itemid" value="170">
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bfPage-bl">
                                        <div class="bfPage-br">
                                            <div class="bfPage-b"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <aside id="sidebar-b" class="grid-box" style="min-height: 730px;">
                        <div class="grid-box width100 grid-v">
                            <div class="module mod-box hidden-phone deepest">
                                <div>
                                    <div class="wrapper">
                                        <p class="underline" style="font-size: 20px;">Jumeirah Clinic</p>
                                        <p><i class="uk-icon-phone"></i><span style="font-size: 21px; margin-left: 7px;">04.3495900</span>
                                            <br> <i class="uk-icon-clock-o"></i><span style="margin-left: 7px;">Saturday-Thursday: 8am-8pm</span>
                                            <br> <i class="uk-icon-circle-o"></i><span style="margin-left: 7px;">Closed on Fridays</span>
                                        </p>
                                        <p class="underline" style="font-size: 20px; margin-top: 35px;">Umm Suqeim Clinic</p>
                                        <p><i class="uk-icon-phone"></i><span style="font-size: 21px; margin-left: 7px;">04.3949433</span>
                                            <br> <i class="uk-icon-clock-o"></i><span style="margin-left: 7px;">Saturday-Thursday: 8am-8pm</span>
                                            <br> <i class="uk-icon-circle-o"></i><span style="margin-left: 7px;">Closed on Fridays</span>
                                        </p>
                                        <p class="underline" style="font-size: 20px; margin-top: 35px;">Children's Dental Center</p>
                                        <p><i class="uk-icon-phone"></i><span style="font-size: 21px; margin-left: 7px;">04.3397700</span>
                                            <br> <i class="uk-icon-clock-o"></i><span style="margin-left: 7px;">Saturday-Thursday: 8am-8pm</span>
                                            <br> <i class="uk-icon-circle-o"></i><span style="margin-left: 7px;">Closed on Fridays</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
     <?php get_footer(); ?>