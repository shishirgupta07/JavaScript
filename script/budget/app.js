var budgetController = (function() {
    
})();


var UIController = (function(){
                  
    var DOMstring = {
        inputType : ".add__type",
        inputDescription : ".add__description",
        inputValue: ".add__value",
        inputBtn : ".add__btn"
    };
    
    return{
        getInput : function(){
             
          return{
              type: document.querySelector(DOMstring.inputType).value,
             description : document.querySelector(DOMstring.inputDescription
            ).value,
             value : document.querySelector(DOMstring.inputValue).value
        };
        },
        getDOMstring: function(){
            return DOMstring;
        }
    };
   
                    })();

var controller = (function(budgetCtrl,UICtrl){
   
    var setupEventListener=function(){
         var DOM =UICtrl.getInput();
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItom); document.addEventListener('keypress',function(event){
        if(event.keyCode === 13 || event.which === 13)
            {
                ctrlAddItom();
            }
       });
    };
    
     var ctrlAddItom = function(){
        var input = UICtrl.getInput();
         console.log(input);
    };
    return {
        init : function(){
            console.log("applicaion");
            setupEventListener();
        }
    }
    
})(budgetController,UIController);

controller.init();

