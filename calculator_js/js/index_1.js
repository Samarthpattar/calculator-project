
var calc_data;
var numbers;
var symbols;
var display_num=0;
var start=false;
var count=0;
 function getData(){
    
    fetch("./json/data.json")
    .then(function(response){

        if(!response.ok){
            throw new Error ("error in file name")
        }
        return response.json();
    })
    .then(function(data){
     
     calc_data=data.calc_items;
     numbers=calc_data.numbers;
     symbols=calc_data.symbols;
   
    })
    .catch(function(error){
        console.log(error)
    })


}


function initial_setup(){
    var main=document.getElementsByClassName("main")[0];
    var calculator=document.createElement("div");
    calculator.id="calcdiv";
    calculator.setAttribute("class","calc");
  
    main.appendChild(calculator);

   var display=document.createElement("div");
   display.id="displaydiv";
   display.setAttribute("class","disp");
   calculator.appendChild(display);

   var display_1=document.createElement("div");
   display_1.id="d1";
   display.appendChild(display_1);

   var display_2=document.createElement("div");
   display_2.id="d2";
   display.appendChild(display_2);
   display_2.innerHTML=display_num;


   var buttons=document.createElement("div");
   buttons.id="buttondiv";
   buttons.setAttribute("class","buttons");

   calculator.appendChild(buttons);


   var number_div=document.createElement("div");
   number_div.id="num_div"
   buttons.appendChild(number_div)

   var symbol_div=document.createElement("div");
   symbol_div.id="symb_div";
   buttons.appendChild(symbol_div);


    var numb=numbers.map(function(i,key){
    var num_boxes=document.createElement("div");
    num_boxes.id="box_"+key;
    num_boxes.setAttribute("class","boxdiv");
    number_div.appendChild(num_boxes);
    num_boxes.innerHTML=i;
     })

     var bottomDiv=document.createElement("div");
     bottomDiv.id="bottom_id";
     
     buttons.appendChild(bottomDiv);

     var sumbol=symbols.map(function(i,key){
        var sym_boxes=document.createElement("div");
        sym_boxes.id="box_"+(key+9);
        sym_boxes.setAttribute("class","boxdiv");
        if(key <3){
            symbol_div.appendChild(sym_boxes);
            sym_boxes.innerHTML=i;
        }else{
            bottomDiv.appendChild(sym_boxes);
            sym_boxes.innerHTML=i;
        }
       
     })
    }


    function numfun(){
      
        var display_2=document.getElementById("d2");
       
          if(count<14){
             if(start==false){
            display_num=this.innerHTML;
            
            start=true;
            
            }else{
            display_num=display_num+this.innerHTML;

             }
              display_2.innerHTML=display_num;
              count++;
            }
             // console.log("button clicked",count);
             
       }


       function symbol(){
        console.log("symbol" , this.innerHTML);
        var smalldiv=document.getElementById("d1");
        var display_2=document.getElementById("d2");
        var d1_value=display_num;
        var selectedSymbol;
        if(this.innerHTML!="="){
            selectedSymbol=this.innerHTML;
            smalldiv.innerHTML=d1_value+" "+this.innerHTML;
            start=false;
        }else if(this.innerHTML=="="){
            smalldiv.innerHTML="";
            display_2.innerHTML= d1_value + display_num;
        }
        


       }


        function addEvents(){
      
        var boxes=document.getElementsByClassName("boxdiv");
       // console.log(boxes.length);
         
        for (var i=0;i<boxes.length;i++){
            console.log(boxes[i].id,i)
            if(i<9 || i==12){
                boxes[i].addEventListener("click",numfun)
               

            }else{
                boxes[i].addEventListener("click",symbol)
            }
        }

    }

    



function main(){
   
    getData();
    setTimeout(function(){
        initial_setup();
        addEvents();
    },500)
    
    
    
}


main()