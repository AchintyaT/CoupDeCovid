        var sout = () => {
            auth.signOut().then(function() {
                // Sign-out successful.
                location.reload() ; 
                console.log('User Logged Out!');
            }).catch(function(error) {
                // An error happened.
                console.log(error);
            });
        }
        const getDetails = () => {
            let w = document.getElementById("w").checked ? "work" : "hire";

            let range = gval("drp");
            let area = gval("area");

            if (range === '1') {
                document.getElementById("tsh").innerHTML = "<span style =\"color:skyblue;\">According to your selection, these are the suggested choices</span><br>" +
                    text.l1;

                document.querySelector('a').innerHTML = "Click here";
            }
            if (range === '2') {
                document.getElementById("tsh").innerHTML = "<span style =\"color:skyblue;\">According to your selection, these are the suggested choices</span><br>" + text.l2;

                document.querySelector('a').innerHTML = "Click here";
            }
            if (range === '3') {
                document.getElementById("tsh").innerHTML = "<span style =\"color:skyblue;\">According to your selection, these are the suggested choices</span><br>" + text.l3;

                document.querySelector('a').innerHTML = "Click here";
            }
            if (range === '4') {
                document.getElementById("tsh").innerHTML = "<span style =\"color:skyblue;\">According to your selection, these are the suggested choices</span><br>" + text.l4;

                document.querySelector('a').innerHTML = "Click here";
            }
        }
        var gval = (id) => {
            return document.getElementById(id).value;
        }

        let text = {
            l1: '<h1>Poultry farming </h1> Poultry farming isthe form <br>of animal husbandry which raises domesticated<br> birds such as chickens, <br>ducks, turkeys and geese to produce meat or eggs for food<br> you can start this by<br> investing Rs 50,000-Rs 1,50,000 and this requires a very small area<br>For more info :<a href =\"https:\/\/www.indiafilings.com\/learn\/poultry-venture-capital-fund-scheme\/"\>Click here</a>',
            l2: '<h1>Mushroom Cultivation</h1>on an average, we can take 9 crops in a year as the cultivation<br> of mushrooms is not<br> possible during summer months. So, the total cost of oyster mushroom <br>production is Rs. 1,07,800 while the net profit is Rs. 4,32,000.<br> Hence, it can be concluded that it is a highly profitable and <br>suitable even for farmers with small holdings.Objectives 	:<br>To create infrastructure facilities for production of quality <br>spawn pasteurized compost and training in mushroom cultivation.<br>Assistance to farmers<br>Training of farmers @ Rs.500/- per participant.<br>For more info :<a href =\"https:\/\/www.agrifarming.in\/mushroom-cultivation-income-cost-yield-profits"\>Click here</a><h1> Development of medicinal<br>and aromatic plants:</h1>Initial cost of some medicinal and aromatic plants: <br>aloe vera	140057.88 per hectare,<br>stevia	478941.51 per hectare<br>lemongrass	78909.47 per hectare<br>safed musli	286217.99 per hectare<br>The economics of cultivation of the selected plants,<br>revealed that the net return per hectare<br>was maximum from Stevia (` 173627.29), <br>followed by Safed Musli (`85462.01),<br> Aloe vera (` 63832.29) and Lemon grass (` 43325.69). <br>Itwas profitable and farmers in these areas should be encouraged to diversify th<br>eir existing cropping pattern towards these crops to enhance their farm income.FOR MORE INFO:<a href =\"https:\/\/www.nmpb.nic.in\/content\/medicinal-plants-cultivations"\>Click here</a> .',
            l3: '<h1>Fish Farming</h1><br>Fish farming or pisciculture involves raising<br> fish commercially in tanks or enclosures <br>such as fish ponds, usually for food.<br>It requires a minimum of 4.85 hecatares<br> or <br>12 acres and requires a minimum investment<br> of 12-15 lakh.<br>For more info:<a href =\"http:\/\/upagripardarshi.gov.in\/staticpages\/FarmPondScheme.aspx"\>Click here</a> <h1>Spice cultivation</h1>Objectives	:	To increase the production of various spices grown<br> in the country to meet the domestic and export <br>demand keeping up the quality to the international standards.<br>Assistance to farmers	:	Black pepper<br>Planting material @ Rs.0.75 per cutting or 50% assistance<br>Rehabilitation of old pepper gardens:<br>1st year- 50% or Rs. 3,500/- per ha.<br> 2nd year- 25% or Rs. 1,300/- per ha.<br><br>3rd year- 25% or Rs. 1,600/-per ha.    <br>Distribution of input kits costing Rs. 125/- each<br>is supplied at 20% cost i.e. Rs. 25/- each.<br>Turmeric     <br>•Establishment of demonstration-cum-seed multiplication pmlots @ 50% or Rs. 825/-per plots of 0.1 ha.    <br>•Area expansion @ 25% or Rs. 4,000/- per ha.    <br>•Assistance for polishing drums @ 0% or Rs. 1,500/-per drum.    Chillies    <br>•Establishment of demonstration-cum-seed multiplication ploots of 0.1 ha. @ 50% or Rs. 700/- plots.    <br>•Demonstration of plant protection measures @ 50% or Rs. 200/- per ha.    <br>•Distribution of minikits @ 50% or Rs. 50/-each.Eligibility:All farmers are eligible.Procedure<br>:Director Horticulture/Director Agriculture of the States.Person to Contact:<br>Application can be given to local Horticulture/Agriculture <br>Inspector.',
            l4: '<h1>Biogas Plant></h1>Biogas plant as per ministry approved design and drawing<br> installation of 3 to 250 KV capacity plants at the sites like dairy etc. is being conducted by<br> gas produced from bio gas plant by generator. <br>After construction plant undertaken by the beneficiary<br>, the grant of Rs. 40,000/- to Rs. 30,000/- per KV in <br>descending order is admissible on reimbursement basis by the Ministry for this<br> purpose. Biogas plant of 85 cu. m. capacity can<br> be established from 150 animals approximately, from which <br>100 units per day electric power and 267 tonnes high-quality organic<br> fertilizer is being received from 100 percent<br> Biogas-powered generator of 10 KV capacity that costs around Rs. 16 Lacks.<br> For more info :<a href =\"https:\/\/mnre.gov.in\/img\/documents\/uploads\/file_s-1584425847955.pdf"\>Click here</a> '
        }
        const openkk = () => {
            window.open("http:\/\/upagripardarshi.gov.in\/staticpages\/KisanCreditCard.aspx")
        }