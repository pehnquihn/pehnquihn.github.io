

function unhide(divID) {
    var item = document.getElementById(divID);
    if (item) {
        item.className=(item.className=='hidden')?'unhidden':'hidden';
    }
}

function hideAll() {     
    var divs = document.getElementsByTagName('div');     
    for(var i = divs.length; i-- ;) {         
        var div = divs[i];         
        if(div.className == 'unhidden') {             
            div.className ='hidden';   
        }     
    }
}

function showjs() {
	$('#bikeFinder').html('<header> Need Help Picking a Bike? </header> <FORM NAME="bikeChoice" ACTION="" METHOD="GET"> Use for Bike: <select NAME="list" SIZE="1"> <OPTION value="0">Mainly Road Races</option> <OPTION value="1">Mainly off Road/trail riding</option> <OPTION value="2">Leisurely riding in trail and road</option> </select> <br> <br> Price Range: <SELECT NAME="list2" SIZE="1"> <OPTION>Under $1000</option> <OPTION>Between $1000 and $2000</option> <OPTION>More than $2000</option> </SELECT> <br> <INPUT style="float:right;" TYPE="button" NAME="button" Value="Find My Perfect Bike" onClick="testSelect(this.form)"> </FORM> </br> <div id="pic" Style="display:none;"> <p>Your Perfect Bike</p> </div>');
}
                

function testSelect(form) {

	$('#pic').show();
	
	if(form.list.selectedIndex == 0) {
		if(form.list2.selectedIndex == 0){
			$('#pic').html("<table><tr><td><a href='product_catagory/products/road/raleigh_revenio_1.html#top'><IMG SRC='img/product/road/3.jpg' width='150px' height='150px'><br />Raleigh 2014 Revenio 1 Road Race Bike<center style='color:#E41F29;'>$679.99</center></a></td><td><a href='product_catagory/products/road/specialized_allez_base.html#top'><IMG SRC='img/product/road/4.jpg' width='150px' height='150px'><br />Specialized 2014 Allez Base Road Race Bike<center style='color:#E41F29;'>$769.99</center></a></td><td> <a href='product_catagory/products/road/raleigh_revenio_3.html#top'><IMG SRC='img/product/road/5.jpg' width='150px' height='150px'><br />Raleigh 2014 Revenio 3.0 Road Race Bike<center style='color:#E41F29;'>$999.99</center></a></td></tr></table>")
		}
		if(form.list2.selectedIndex == 1){
			$('#pic').html("<table><tr><td> <a href='product_catagory/products/road/raleigh_revenio_carbon_1.html#top'><IMG SRC='img/product/road/1.jpg' width='150px' height='150px'><br />Raleigh 2014 Revenio Carbon 1 Road Race Bike<center style='color:#E41F29;'>$1,699.99</center></a></td><td> <a href='product_catagory/products/cyclocross/specialized_diverge_elite.html#top'><IMG SRC='img/product/cyc/3.jpg' width='150px' height='150px'><br />Specialized 2015 Diverge Elite Cyclocross Race Bike<center style='color:#E41F29;'>$1,399.99</center></a></td><td> <a href='product_catagory/products/cyclocross/raleigh_tamland_1.html#top'><IMG SRC='img/product/cyc/6.jpg' width='150px' height='150px'><br />Raleigh 2015 Tamland 1 Cyclocross Bike<center style='color:#E41F29;'>$1,774.99</center></a></td></tr></table>")
		}
		if(form.list2.selectedIndex == 2){
			$('#pic').html("<table><tr><td> <a href='product_catagory/products/road/specialized_roubaix_comp.html#top'><IMG SRC='img/product/road/2.jpg' width='150px' height='150px'><br />Specialized 2014 Roubaix Comp Road Race Bike<center style='color:#E41F29;'>$2,599.99</center></a></td><td> <a href='product_catagory/products/road/specialized_roubaix_expert.html#top'><IMG SRC='img/product/road/6.jpg' width='150px' height='150px'><br />Specialized 2014 Roubaix Expert Road Race Bike<center style='color:#E41F29;'>$3,199.99</center></a></td><td> <a href='product_catagory/products/cyclocross/specialized_crux_elite.html#top'><IMG SRC='img/product/cyc/1.jpg' width='150px height='150px'><br />Specialized 2014 Crux Elite Rival Disc Cyclocross Bike<center style='color:#E41F29;'>$2,999.99</center></a></td></tr></table>")
		}
	}
	if(form.list.selectedIndex == 1) {
		if(form.list2.selectedIndex == 0){
			$('#pic').html("<table><tr><td> <a href='product_catagory/products/cyclocross/specialized_tricross_sport.html#top'><IMG SRC='img/product/cyc/2.jpg' width='150px' height='150px'> <br /> Specialized 2012 TriCross Sport Cyclocross Bike<center style='color:#E41F29;'>$899.99</center></a></td><td> <a href='product_catagory/products/cyclocross/raleigh_furly.html#top'> <IMG SRC='img/product/cyc/4.jpg' width='150px' height='150px'> <br /> Raleigh 2014 Furley Cyclocross Bike<center style='color:#E41F29'>$799.99</center></a> </td><td><a href='product_catagory/products/road/raleigh_revenio_1.html#top'><IMG SRC='img/product/road/3.jpg' width='150px' height='150px'><br />Raleigh 2014 Revenio 1 Road Race Bike<center style='color:#E41F29;'>$679.99</center></a></td></tr></table>") 
		}
		if(form.list2.selectedIndex == 1){
			$('#pic').html("<table><tr><td> <a href='product_catagory/products/cyclocross/specialized_diverge_elite.html#top'><IMG SRC='img/product/cyc/3.jpg'width='150px' height='150px' > <br /> Specialized 2015 Diverge Elite Cyclocross Race Bike<center style='color:#E41F29'>$1,399.99</center></a> </td> <td> <a href='product_catagory/products/cyclocross/raleigh_rx_1.html#top'><IMG SRC='img/product/cyc/5.jpg'width='150px' height='150px'> <br /> Raleigh 2012 RX 1.0 Cyclocross Bike<center style='color:#E41F29'>$1,199.99</center></a> </td><td> <a href='product_catagory/products/cyclocross/raleigh_tamland_1.html#top'><IMG SRC='img/product/cyc/6.jpg'width='150px' height='150px'> <br /> Raleigh 2015 Tamland 1 Cyclocross Bike<center style='color:#E41F29'>$1,774.99</center></a> </td></tr></table>")
		}
		if(form.list2.selectedIndex == 2){
			$('#pic').html("<table><tr><td> <a href='product_catagory/products/cyclocross/specialized_crux_elite.html#top'><IMG SRC='img/product/cyc/1.jpg'width='150px' height='150px'> <br /> Specialized 2014 Crux Elite Rival Disc Cyclocross Bike<center style='color:#E41F29;'>$2,999.99</center></a> </td><td> <a href='product_catagory/products/road/specialized_roubaix_comp.html#top'><IMG SRC='img/product/road/2.jpg' width='150px' height='150px'><br />Specialized 2014 Roubaix Comp Road Race Bike<center style='color:#E41F29;'>$2,599.99</center></a></td><td> <a href='product_catagory/products/road/specialized_roubaix_expert.html#top'><IMG SRC='img/product/road/6.jpg' width='150px' height='150px'><br />Specialized 2014 Roubaix Expert Road Race Bike<center style='color:#E41F29;'>$3,199.99</center></a></td></tr></table>")
		}
	}
	if(form.list.selectedIndex == 2) {
		if(form.list2.selectedIndex == 0){
			$('#pic').html("<table><tr><td> <a href='product_catagory/products/road/raleigh_revenio_1.html#top'><IMG SRC='img/product/road/3.jpg'width='150px' height='150px'> <br /> Raleigh 2014 Revenio 1 Road Race Bike<center style='color:#E41F29'>$679.99</center></a> </td><td> <a href='product_catagory/products/road/specialized_allez_base.html#top'><IMG SRC='img/product/road/4.jpg' width='150px' height='150px'> <br /> Specialized 2014 Allez Base Road Race Bike <center style='color:#E41F29'>$769.99</center></a> </td><td> <a href='product_catagory/products/womens/raleigh_capri_1.html#top'><IMG SRC='img/product/woman/1.jpg' width='150px' height='150px'> <br /> Raleigh 2014 Women's Capri 1 Road Bike<center style='color:#E41F29'>$679.99</center></a> </td></tr></table>")
		}
		if(form.list2.selectedIndex == 1){
			$('#pic').html("<table><tr><td> <a href='product_catagory/products/womens/specialized_ruby_base.html#top'><IMG SRC='img/product/woman/3.jpg'width='150px' height='150px'> <br /> Specialized 2014 Women's Ruby Base Road Bike<center style='color:#E41F29'>$1,724.99</center></a> </td><td> <a href='product_catagory/products/cyclocross/specialized_diverge_elite.html#top'><IMG SRC='img/product/cyc/3.jpg' width='150px' height='150px'> <br /> Specialized 2015 Diverge Elite Cyclocross Race Bike<center style='color:#E41F29'>$1,399.99</center></a> </td><td> <a href='product_catagory/products/road/raleigh_revenio_carbon_1.html#top'><IMG SRC='img/product/road/1.jpg' width='150px' height='150px'> <br /> Raleigh 2014 Revenio Carbon 1 Road Race Bike <center style='color:#E41F29'>$1,699.99</center></a> </td></tr></table>")
		}
		if(form.list2.selectedIndex == 2){
			$('#pic').html("<table><tr><td> <a href='product_catagory/products/womens/specialized_ruby_sport.html#top'><IMG SRC='img/product/woman/2.jpg' width='150px' height='150px'> <br /> Specialized 2014 Women's Ruby Sport Road Bike<center style='color:#E41F29'>$2,024.99</center></a> </td><td> <a href='product_catagory/products/womens/specialized_alias_pro.html#top'><IMG SRC='img/product/woman/4.jpg' width='150px' height='150px'> <br /> Specialized 2015 Women's Alias Pro Tri Road Bike<center style='color:#E41F29'>$5,729.99</center></a> </td><td> <a href='product_catagory/products/road/specialized_roubaix_comp.html#top'><IMG SRC='img/product/road/2.jpg' width='150px' height='150px'> <br /> Specialized 2014 Roubaix Comp Road Race Bike <center style='color:#E41F29'>$2,599.99</center></a> </td></tr></table>")
		}
	}
}
