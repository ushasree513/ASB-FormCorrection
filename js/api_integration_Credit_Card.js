        var nbamServiceCtrl = getNBAMServiceControl();
		console.log(nbamServiceCtrl);
		nbamServiceCtrl.getOffers("7777777771", "ShellCardFromWeb", "Web", "Login", "Home", "Inbound",handleResponse);	
		
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
		              var compareVariant = "business_loan_approval, bizpower_property_loan, bizpower_relief_financing, rhb_visa_infinite, home_loan_approval, shell_card_approval, shell_nudge";
					  document.getElementById("cus").innerHTML=cusName;
                      
					   if (compareVariant.indexOf(data.ContainerList[0].RankedResults[i].Variant) > -1){
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
                                            <a href="${clickthrough}" alt="${WebMesg}" class="btn-round-custom bg-white border-white font-Raleway-Medium font-weight-bold border Darkblue-font mt-5">Know More</a>
                                        </div>
                                        <img class="slide-img" src="assets/images/${variant}.png" alt="Overview" style="width:100%; min-height: 340px;">
                                    </div>
                                </div>`;
                       
                    }
						$('.carousel-inner').append(offer_card);
				}

				$('.carousel-inner').children('.item').eq(0).addClass('active');
                $('#myCarousel').carousel();
		};
		  