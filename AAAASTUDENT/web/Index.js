/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function messageBox(htmls,titles)
{
 
    $.Dialog({
       shadow: true,
                  overlay: true,
                  flat: true,
                
                  icon: '<i class="icon-cancel fg-red"></i>',
         padding: 10,
         width:500,
        title:titles,
        content:htmls
        
    });
}

function messageBoxs(htmls,titles)
{
 
    $.Dialog({
       shadow: true,
                  overlay: true,
                  flat: true,
                
                  icon: '<i class="icon-cancel fg-red"></i>',
         padding: 10,
         width:200,
        title:titles,
        content:htmls
        
    });
}


function calculators(){
/*   
var string = '<html> <head> <script type="text/javascript"> var str="";  function clear(){  } function clicked(e){ str+=e;  displayScreen(); }  function displayScreen(){ document.getElementById("screen").value = str; } </script> </head> <body> <div > </div><div> <input type="text" id="screen" readonly /> </div>  <div > '
 +'<div class="keypads"  onclick="clicked(();" >(</div> <div class="keypads" onclick="clicked());" >)</div><div class="keypads" onclick="clicked(mc);" >mc</div><div class="keypads" onclick="clicked(m+);" >m+</div> </div> <div class="keypads" '
+' <div class="keypads"  onclick="clicked(AC);" >AC</div> <div class="keypads"  id="close" >close</div> <div class="keypads" onclick="clicked(+/-);" >+/-</div><div class="keypads" onclick="clicked(%);" >%</div><div class="keypads" onclick="clicked(2<sup>nd</sup>);" >2<sup>nd</sup></div> '
+'<div class="keypads"  onclick="clicked(x<sup>2</sup>);" >x<sup>2</sup></div> <div class="keypads" onclick="clicked(x<sup>3</sup>);" >x<sup>3</sup></div><div class="keypads" onclick="clicked(x<sup>y</sup>);" >x<sup>y</sup></div><div class="keypads" onclick="clicked(e<sup>x</sup>);" >e<sup>x</sup></div> '
+'<div class="keypads"  onclick="clicked(10<sup>x</sup>);" >10<sup>x</sup></div> <div class="keypads" onclick="clicked(<sup>1</sup>&frasl;<sub>x</sub>);" ><sup>1</sup>&frasl;<sub>x</sub></div><div class="keypads" onclick="clicked(sqaure root 2);" ><span style="white-space: nowrap; font-size:small"><sup>2</sup>'
+'&radic;<span style="text-decoration:overline;">X</span>'
+'</span></div><div class="keypads" onclick="clicked(square root 3);" ><span style="white-space: nowrap; font-size:small"><sup>3</sup>'
+'&radic;<span style="text-decoration:overline;">X</span>'
+'</span></div><div class="keypads" onclick="clicked(square root x);" ><span style="white-space: nowrap; font-size:small"><sup>x</sup>'
+'&radic;<span style="text-decoration:overline;">Y</span>'
+'</span></div> <div class="keypads"  onclick="clicked(log<sub>y</sub>);" >log<sub>y</sub></div>  <div class="keypads"  onclick="clicked(log<sub>2</sub>);" >log<sub>2</sub></div>  <div class="keypads"  onclick="clicked(x!);" >x!</div> <div class="keypads"  onclick="clicked(sin<sup>-1</sup>);" >sin<sup>-1</sup></div> '
    +'<div class="keypads"  onclick="clicked(cos<sup>-1</sup>);" >cos<sup>-1</sup></div>  <div class="keypads"  onclick="clicked(tan<sup>-1</sup>);" >tan<sup>-1</sup></div>  <div class="keypads" onclick="clicked(e);" >e</div> <div class="keypads" onclick="clicked(EE);" >E</div> '    
        +'<div class="keypads" onclick="clicked(Rad);"  >Rad</div> <div class="keypads" onclick="clicked(sinh<sup>-1</sup>);"  >sinh<sup>-1</sup></div> <div class="keypads" onclick="clicked(cosh<sup>-1</sup>);"  >cosh<sup>-1</sup></div> <div class="keypads" onclick="clicked(tanh<sup>-1</sup>);"  >tanh<sup>-1</sup></div> <div class="keypads" onclick="clicked(&pi;);"  >&pi;</div> <div class="keypads" onclick="clicked(Rand);"  >Rand</div>  '
            +  ' <div class="keypads" onclick="clicked(1);" >1</div> <div class="keypads" onclick="clicked(2);" >2</div><div class="keypads" onclick="clicked(3);" >3</div><div class="keypads" onclick="clicked(4);" >4</div> '
          +'<div class="keypads" onclick="clicked(5);"  >5</div> <div class="keypads" onclick="clicked(6);" >6</div><div class="keypads" onclick="clicked(7);" >7</div><div class="keypads" onclick="clicked(8);" >8</div> <div class="keypads" onclick="clicked(9);" >9</div>  <div class="keypads" onclick="clicked(0);" >0</div> '
   +'<div class="divs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div> <div class="keypads" onclick="clicked(+)">+</div>  </div>  <div> <div>  </body></html>';
    messageBox(string,"you"); */
    
 var string = '  <FORM NAME="Calc">'
+'<TABLE BORDER=4>'
+'<TR>'
+'<TD>'
+'<INPUT TYPE="text"   NAME="Input" Size="16">'
+'<br>'
+'</TD>'
+'</TR>'
+'<TR>'
+'<TD>'
+'<INPUT TYPE="button" NAME="one"   VALUE="  1  " OnClick="Calc.Input.value += \'1\' ">'
+'<INPUT TYPE="button" NAME="two"   VALUE="  2  " OnCLick="Calc.Input.value += \'2\'">'
+'<INPUT TYPE="button" NAME="three" VALUE="  3  " OnClick="Calc.Input.value += \'3\'">'
+'<INPUT TYPE="button" NAME="plus"  VALUE="  +  " OnClick="Calc.Input.value += \' + \'">'
+'<br>'
+'<INPUT TYPE="button" NAME="four"  VALUE="  4  " OnClick="Calc.Input.value += \'4\'">'
+'<INPUT TYPE="button" NAME="five"  VALUE="  5  " OnCLick="Calc.Input.value += \'5\'">'
+'<INPUT TYPE="button" NAME="six"   VALUE="  6  " OnClick="Calc.Input.value += \'6\'">'
+'<INPUT TYPE="button" NAME="minus" VALUE="  -  " OnClick="Calc.Input.value += \' - \'">'
+'<br>'
+'<INPUT TYPE="button" NAME="seven" VALUE="  7  " OnClick="Calc.Input.value += \'7\'">'
+'<INPUT TYPE="button" NAME="eight" VALUE="  8  " OnCLick="Calc.Input.value += \'8\'">'
+'<INPUT TYPE="button" NAME="nine"  VALUE="  9  " OnClick="Calc.Input.value += \'9\'">'
+'<INPUT TYPE="button" NAME="times" VALUE="  x  " OnClick="Calc.Input.value += \' * \'">'
+'<br>'
+'<INPUT TYPE="button" NAME="clear" VALUE="  c  " OnClick="Calc.Input.value = \'\' "> '
+'<INPUT TYPE="button" NAME="zero"  VALUE="  0  " OnClick="Calc.Input.value += \'0\'">'
+'<INPUT TYPE="button" NAME="DoIt"  VALUE="  =  " OnClick="Calc.Input.value = eval(Calc.Input.value)">'
+'<INPUT TYPE="button" NAME="div"   VALUE="  /  " OnClick="Calc.Input.value += \' / \'">'
+'<br>'
+'</TD>'
+'</TR>'
+'</TABLE>'
+'</FORM>'

messageBox(string,"calculator");

    
    
}


function messageDisplay( message){
    
    var string = '<html<head></head><body> <div id="message">'+message+' </div></body> </html>'
      messageBox(string,"ALERT");  
}




