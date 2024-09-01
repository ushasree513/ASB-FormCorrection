function getCookieID() {
    let name = "demoCSANamepersisted" + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let d = c.substring(name.length, c.length);
            if (d.charAt(0) == '_') {
                d = d.substring(1);
            }
            let da = d.split('_');
            for (let j = 0; j < da.length; j++) {
                let e = da[j];
                if (j > 0) {
                    return e;
                    break;
                }
            }
        }
    }
    return "";
}
console.log("This is cookie id", getCookieID())
		
        var nbamServiceCtrl = getNBAMServiceControl();
		console.log(nbamServiceCtrl);
		nbamServiceCtrl.getOffers(getCookieID(), "SMELoansRHB", "Web", "Login", "Main", "Inbound",handleResponse);	
		
		function handleResponse(data)
		{
		$('.offer_card').remove();
				
			for (i = 0; i < data.ContainerList[0].RankedResults.length ; ++i ) {
                      var img = data.ContainerList[0].RankedResults[i].ImageURL; 
				      var clickthrough = data.ContainerList[0].RankedResults[i].ClickThroughURL; 
					  var title = data.ContainerList[0].RankedResults[i].Label;
					  var desc = data.ContainerList[0].RankedResults[i].ShortDescription;
					  var variant = data.ContainerList[0].RankedResults[i].Variant;
					  var cusName = data.ContainerList[0].RankedResults[i].CustomerName;
                      var WebMesg = data.ContainerList[0].RankedResults[i].WebMessage;
		              
					  document.getElementById("cus").innerHTML=cusName;
                      
					  if(  data.ContainerList[0].RankedResults[i].Variant == 'home_loan_approval2') {
						  var offer_card = ` <div class="offer_card item bg-white" style="background: #f8f8f8!important" >
												<div class=" d-flex position-relative">
													<div class="slide-content w-75 position-absolute slide1 text-center">
														<h3 class="Darkblue-font font-Montserrat_bold p-0 m-0 text-white">${title}</h3>
														<br>
														 <h6 class="font-Montserrat_SemiBold p-0 m-0 text-white" style="color:#4a4a4a; text-align: right; ">${desc}</h6>
														 <br>
														<a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-blue font-Raleway-Medium font-weight-bold border text-white">Know more</a>
													</div>
													<img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
												</div>
											</div>`;
					  } else if(data.ContainerList[0].RankedResults[i].Variant == 'master_credit_card'){
					  	var offer_card = ` <div class="offer_card item " style="background: #f8f8f8!important">
                                            <div class=" d-flex position-relative">
                                             <div class="slide-content w-75 position-absolute slide2">
                                            <h3 class="text-white font-oswald-Medium p-0 m-0">${title}</h3> 
                                            <br>
                                            <div class="d-flex">
                                                <div class="text-white">
                                                    <h6 class="font-Raleway-SemiBold mb-0 mt-5 pb-0 pt-4">${desc}</h6>
                                                </div>
                                                <img src="">
                                            </div>
                                            <br>
                                            <a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-OrangeFirst font-Raleway-Medium font-weight-bold border text-white">Know more</a>
                                          </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                      </div>
                                  </div>`;
                      }else if (data.ContainerList[0].RankedResults[i].Variant == 'easy_home_loan') {
	                     var offer_card = ` <div class="offer_card item " style="background: #f8f8f8!important">
                                             <div class=" d-flex position-relative" style=" opacity: 0.85; ">
                                              <div class="slide-content w-75 position-absolute slide3">
                                            <h3 class="text-white font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <h6 class="font-Raleway-SemiBold text-white">${desc}</h6>
                                            <a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-white font-Raleway-Medium font-weight-bold border orangesecondary-font">Know more</a>
                                              </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                            </div>
                                           </div>`;
                      }else if (data.ContainerList[0].RankedResults[i].Variant == 'car_loan'){
                      	var offer_card = `<div class="offer_card item " style="background: #f8f8f8!important">
                                            <div class=" d-flex position-relative">
                                              <div class="slide-content w-75 position-absolute slide4 text-center">
                                            <h3 class="text-white font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <h5 class="font-Raleway-Medium text-white">${desc}</h5>
                                            <br>
                                            <a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-blue font-Raleway-Medium font-weight-bold border text-white">Know more</a>
                                              </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                            </div>
                                          </div>`;
                      }else if (data.ContainerList[0].RankedResults[i].Variant == 'personal_loan'){
                      	var offer_card = `<div class="offer_card item " style="background: #f8f8f8!important">
                                    <div class=" d-flex position-relative">
                                        <div class="slide-content w-75 position-absolute slide5">
                                            <h3 class="text-white font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <h5 class="font-Raleway-SemiBold text-white">${desc}</h5>
                                            <br>
                                            <a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-white font-Raleway-Medium font-weight-bold border lightyellow-font">Know more</a>
                                        </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                    </div>
                                </div>`;
                      }else if (data.ContainerList[0].RankedResults[i].Variant == 'deposits'){
                      	var offer_card = `<div class="offer_card item " style="background: #f8f8f8!important">
                                            <div class=" d-flex position-relative" style=" opacity: 0.85; ">
                                              <div class="slide-content w-75 position-absolute text-center slide6">
                                            <h3 class="text-white font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <div class="d-flex">
                                               <div class="text-white" style=" margin: -23px 60px; ">
                                                    <h6 class="font-Raleway-SemiBold mt-5 pb-0 pt-4 ">${desc}</h6>
                                               </div>
                                            </div>
                                            <a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-blue font-Raleway-Medium font-weight-bold border text-white">Know more</a>
                                        </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                    </div>
                                </div>`;
                      }else if (data.ContainerList[0].RankedResults[i].Variant == 'mobile_banking'){
                        var offer_card = `<div class="offer_card item " style="background: #f8f8f8!important">
                                    <div class=" d-flex position-relative">
                                        <div class="slide-content w-75 position-absolute text-center slide7">
                                            <h3 class="blue-font font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <div class="d-flex flex-column">
                                                <div class="text-white" style=" margin: -23px 0 7px">
                                                    <h6 class="font-Raleway-SemiBold pb-0 pt-5 text-dark-black">${desc}</h6>
                                                </div>
                                                <br>
                                                <div class="d-flex" style=" margin: 0px 248px; ">
                                                    <img class="slide-sub-img" src="assets/images/google-play.png" alt="Overview" style="max-width: 135px; max-height: 50px;">
                                                    <img class="slide-sub-img ml-3" src="assets/images/app-store.png" alt="Overview" style="max-width: 135px; max-height: 50px;">
                                                </div>
                                            </div>
                                            <br>
                                            <a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-blue font-Raleway-Medium font-weight-bold border text-white ml-5">Know more</a>
                                        </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                    </div>
                                </div>`;
                       }else if (data.ContainerList[0].RankedResults[i].Variant == 'fraud_protection'){
                       	var offer_card = `<div class="offer_card item " style="background: #f8f8f8!important">
                                    <div class=" d-flex position-relative">
                                        <div class="slide-content w-75 position-absolute slide8">
                                            <h3 class="text-dark-black font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <h5 class="font-Raleway-SemiBold text-dark-black" style=" line-height: 1.3; ">${desc}</h5>
                                            <br>
                                            <a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-Skyblue2 border-white font-Raleway-Medium font-weight-bold border text-white">Know more</a>
                                        </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                    </div>
                                </div>`;
                       }else if (data.ContainerList[0].RankedResults[i].Variant == 'priority_pass_membership'){
                       	var offer_card = `<div class="offer_card item " style="background: #f8f8f8!important">
                                    <div class=" d-flex position-relative">
                                        <div class="slide-content w-75 position-absolute slide8">
                                            <h3 class="text-dark-black font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <h6 class="font-Raleway-SemiBold text-dark-black" style=" line-height: 1.3; ">${desc}</h6>
                                            <a href="${clickthrough} title="${WebMesg}" "class="btn-round-custom bg-Skyblue2 border-white font-Raleway-Medium font-weight-bold border text-white">Know more</a>
                                        </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                    </div>
                                </div>`;
                       }else if (data.ContainerList[0].RankedResults[i].Variant == 'discount_smart_kitchen'){
                       	var offer_card = `<div class="item discount_smart_kitchen" style="background: #f8f8f8!important">
                                    <div class=" d-flex position-relative"  style=" opacity: 0.93; ">
                                        <div class="slide-content w-75 position-absolute slide9">
                                            <h3 class="text-white font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <h6 class="font-Raleway-SemiBold text-white" style=" line-height: 1.3; ">${desc}</h6>
                                            <br>
                                            <a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-white border-white font-Raleway-Medium font-weight-bold border text-dark-black">Know more</button>
                                        </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                    </div>
                                </div>`;
                       }else if (data.ContainerList[0].RankedResults[i].Variant == 'happy_birthday'){
                       	var offer_card = `<div class="offer_card item " style="background: #f8f8f8!important">
                                    <div class=" d-flex position-relative"  style=" opacity: 0.93; ">
                                        <div class="slide-content w-75 position-absolute slide10">
                                            <h3 class="text-white font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <h6 class="font-Raleway-SemiBold text-dark-black" style=" line-height: 1.3; ">${desc}</h6>
                                            <br>
                                            <a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-white border-white font-Raleway-Medium font-weight-bold border lightyellow-font mt-5">Know more</a>
                                        </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                    </div>
                                </div>`;
                       }else if (data.ContainerList[0].RankedResults[i].Variant == 'movie_ticket'){
                       	var offer_card = `<div class="offer_card item " style="background: #f8f8f8!important">
                                    <div class=" d-flex position-relative"  style=" opacity: 0.93; ">
                                        <div class="slide-content w-75 position-absolute slide11">
                                            <h3 class="text-white font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <h6 class="font-Raleway-SemiBold text-white" style=" line-height: 1.3; ">${desc}</h6>
                                            <br>
                                            <a href="${clickthrough}" title="${WebMesg}" class="btn-round-custom bg-white border-white font-Raleway-Medium font-weight-bold border Darkblue-font mt-5">Know more</a>
                                        </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                    </div>
                                </div>`;
                       }else if (data.ContainerList[0].RankedResults[i].Variant == 'business_loan_approval' || 'bizpower_property_loan' || 'bizpower_relief_financing' || 'rhb_visa_infinite' || 'home_loan_approval'){
                        var contentRight = "";
                        if (data.ContainerList[0].RankedResults[i].Variant == 'home_loan_approval') {
                            contentRight = 'contentRight'
                        }
                        var offer_card = `<div class="offer_card item ${contentRight}" style="background: 6ac7db !important">
                                    <div class=" d-flex position-relative alignItems"  style=" opacity: 0.93; ">
                                        <div alt="${WebMesg}" class="slide-content w-75 position-absolute slide11">
                                            <h3 alt="${WebMesg}" class="text-white font-oswald-Medium p-0 m-0">${title}</h3>
                                            <br>
                                            <h6 alt="${WebMesg}" class="font-Raleway-SemiBold text-white" style=" line-height: 1.3; ">${desc}</h6>
                                            <br>
                                            <a href="${clickthrough}" alt="${WebMesg}" class="btn-round-custom bg-white border-white font-Raleway-Medium font-weight-bold border Darkblue-font mt-5">${WebMesg}</a>
                                        </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                    </div>
                                </div>`;
                       }/**else{
						  var offer_card = '<div class="offer_card item bg-white '+active+'" >'+
												'<div class=" d-flex">'+
											'<img class="ml-5 mr-5 slide-img" src="'+img+'" alt="Los Angeles" style="width:40%;">'+
											'<div class="slide-content w-50">'+
											'<h1>'+desc+'</h1>'+
												'<br />'+
												 '<a href="'+clickthrough+'" target="_blank" class="btn btn-warning" style="margin-left:10px;">View Details</a>'+
											'</div>'+
												'</div>'+
											'</div>';
                      } **/
				     
						$('.carousel-inner').append(offer_card);
				}

				$('.carousel-inner').children('.item').eq(0).addClass('active');
                $('#myCarousel').carousel();
		};
		  