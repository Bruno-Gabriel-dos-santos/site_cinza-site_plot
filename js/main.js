document.getElementById('qntclass').addEventListener('change',function(){

valor=document.getElementById('qntclass').value;
//console.log(valor);

switch (valor){
    case "i1":
        // code block
        document.getElementById('elem2').style.display='none';
        document.getElementById('elem3').style.display='none';
        document.getElementById('elem4').style.display='none';
        document.getElementById('elem5').style.display='none';
        document.getElementById('elem6').style.display='none';
        document.getElementById('elem7').style.display='none';
        document.getElementById('elem8').style.display='none';
        document.getElementById('elem9').style.display='none';
        document.getElementById('elem10').style.display='none';
        break;
    case "i2":
        // code block
        document.getElementById('elem2').style.display='block';
        document.getElementById('elem3').style.display='none';
        document.getElementById('elem4').style.display='none';
        document.getElementById('elem5').style.display='none';
        document.getElementById('elem6').style.display='none';
        document.getElementById('elem7').style.display='none';
        document.getElementById('elem8').style.display='none';
        document.getElementById('elem9').style.display='none';
        document.getElementById('elem10').style.display='none';
        break;
    case "i3":
        document.getElementById('elem2').style.display='block';
        document.getElementById('elem3').style.display='block';
        document.getElementById('elem4').style.display='none';
        document.getElementById('elem5').style.display='none';
        document.getElementById('elem6').style.display='none';
        document.getElementById('elem7').style.display='none';
        document.getElementById('elem8').style.display='none';
        document.getElementById('elem9').style.display='none';
        document.getElementById('elem10').style.display='none';
        // code block
        break;
    case "i4":
        document.getElementById('elem2').style.display='block';
        document.getElementById('elem3').style.display='block';
        document.getElementById('elem4').style.display='block';
        document.getElementById('elem5').style.display='none';
        document.getElementById('elem6').style.display='none';
        document.getElementById('elem7').style.display='none';
        document.getElementById('elem8').style.display='none';
        document.getElementById('elem9').style.display='none';
        document.getElementById('elem10').style.display='none';
        // code block
        break;
    case "i5":
        document.getElementById('elem2').style.display='block';
        document.getElementById('elem3').style.display='block';
        document.getElementById('elem4').style.display='block';
        document.getElementById('elem5').style.display='block';
        document.getElementById('elem6').style.display='none';
        document.getElementById('elem7').style.display='none';
        document.getElementById('elem8').style.display='none';
        document.getElementById('elem9').style.display='none';
        document.getElementById('elem10').style.display='none';
        // code block
        break;
    case "i6":
        document.getElementById('elem2').style.display='block';
        document.getElementById('elem3').style.display='block';
        document.getElementById('elem4').style.display='block';
        document.getElementById('elem5').style.display='block';
        document.getElementById('elem6').style.display='block';
        document.getElementById('elem7').style.display='none';
        document.getElementById('elem8').style.display='none';
        document.getElementById('elem9').style.display='none';
        document.getElementById('elem10').style.display='none';
        // code block
        break;       
    case "i7":
        document.getElementById('elem2').style.display='block';
        document.getElementById('elem3').style.display='block';
        document.getElementById('elem4').style.display='block';
        document.getElementById('elem5').style.display='block';
        document.getElementById('elem6').style.display='block';
        document.getElementById('elem7').style.display='block';
        document.getElementById('elem8').style.display='none';
        document.getElementById('elem9').style.display='none';
        document.getElementById('elem10').style.display='none';
        // code block
        break;       
    case "i8":
        document.getElementById('elem2').style.display='block';
        document.getElementById('elem3').style.display='block';
        document.getElementById('elem4').style.display='block';
        document.getElementById('elem5').style.display='block';
        document.getElementById('elem6').style.display='block';
        document.getElementById('elem7').style.display='block';
        document.getElementById('elem8').style.display='block';
        document.getElementById('elem9').style.display='none';
        document.getElementById('elem10').style.display='none';
        // code block
        break;
    case "i9":
        document.getElementById('elem2').style.display='block';
        document.getElementById('elem3').style.display='block';
        document.getElementById('elem4').style.display='block';
        document.getElementById('elem5').style.display='block';
        document.getElementById('elem6').style.display='block';
        document.getElementById('elem7').style.display='block';
        document.getElementById('elem8').style.display='block';
        document.getElementById('elem9').style.display='block';
        document.getElementById('elem10').style.display='none';
        // code block
        break;   
    case "i10":
        document.getElementById('elem2').style.display='block';
        document.getElementById('elem3').style.display='block';
        document.getElementById('elem4').style.display='block';
        document.getElementById('elem5').style.display='block';
        document.getElementById('elem6').style.display='block';
        document.getElementById('elem7').style.display='block';
        document.getElementById('elem8').style.display='block';
        document.getElementById('elem9').style.display='block';
        document.getElementById('elem10').style.display='block';
        // code block
        break;    
    default:
        // code block
};

});

document.getElementById('seletores').addEventListener('change',function(){
    seletor=document.getElementById('seletoresv').value;
    //console.log(seletor);
    
    switch (seletor){
        case "v1":
            // code block
            document.getElementById('seletor1').style.display='block';
            document.getElementById('seletor2').style.display='none';
            document.getElementById('seletor3').style.display='none';
            document.getElementById('seletor4').style.display='none';
            document.getElementById('seletor5').style.display='none';
            document.getElementById('seletor6').style.display='none';
            document.getElementById('seletor7').style.display='none';
            document.getElementById('seletor8').style.display='none';
            document.getElementById('seletor9').style.display='none';
            document.getElementById('seletor10').style.display='none';
            break;
        case "v2":
            // code block
            document.getElementById('seletor1').style.display='none';
            document.getElementById('seletor2').style.display='block';
            document.getElementById('seletor3').style.display='none';
            document.getElementById('seletor4').style.display='none';
            document.getElementById('seletor5').style.display='none';
            document.getElementById('seletor6').style.display='none';
            document.getElementById('seletor7').style.display='none';
            document.getElementById('seletor8').style.display='none';
            document.getElementById('seletor9').style.display='none';
            document.getElementById('seletor10').style.display='none';
            break;
        case "v3":
            document.getElementById('seletor1').style.display='none';
            document.getElementById('seletor2').style.display='none';
            document.getElementById('seletor3').style.display='block';
            document.getElementById('seletor4').style.display='none';
            document.getElementById('seletor5').style.display='none';
            document.getElementById('seletor6').style.display='none';
            document.getElementById('seletor7').style.display='none';
            document.getElementById('seletor8').style.display='none';
            document.getElementById('seletor9').style.display='none';
            document.getElementById('seletor10').style.display='none';
            // code block
            break;
        case "v4":
            document.getElementById('seletor1').style.display='none';
            document.getElementById('seletor2').style.display='none';
            document.getElementById('seletor3').style.display='none';
            document.getElementById('seletor4').style.display='block';
            document.getElementById('seletor5').style.display='none';
            document.getElementById('seletor6').style.display='none';
            document.getElementById('seletor7').style.display='none';
            document.getElementById('seletor8').style.display='none';
            document.getElementById('seletor9').style.display='none';
            document.getElementById('seletor10').style.display='none';
            // code block
            break;
        case "v5":
            document.getElementById('seletor1').style.display='none';
            document.getElementById('seletor2').style.display='none';
            document.getElementById('seletor3').style.display='none';
            document.getElementById('seletor4').style.display='none';
            document.getElementById('seletor5').style.display='block';
            document.getElementById('seletor6').style.display='none';
            document.getElementById('seletor7').style.display='none';
            document.getElementById('seletor8').style.display='none';
            document.getElementById('seletor9').style.display='none';
            document.getElementById('seletor10').style.display='none';
            // code block
            break;
        case "v6":
            document.getElementById('seletor1').style.display='none';
            document.getElementById('seletor2').style.display='none';
            document.getElementById('seletor3').style.display='none';
            document.getElementById('seletor4').style.display='none';
            document.getElementById('seletor5').style.display='none';
            document.getElementById('seletor6').style.display='block';
            document.getElementById('seletor7').style.display='none';
            document.getElementById('seletor8').style.display='none';
            document.getElementById('seletor9').style.display='none';
            document.getElementById('seletor10').style.display='none';
            // code block
            break;       
        case "v7":
            document.getElementById('seletor1').style.display='none';
            document.getElementById('seletor2').style.display='none';
            document.getElementById('seletor3').style.display='none';
            document.getElementById('seletor4').style.display='none';
            document.getElementById('seletor5').style.display='none';
            document.getElementById('seletor6').style.display='none';
            document.getElementById('seletor7').style.display='block';
            document.getElementById('seletor8').style.display='none';
            document.getElementById('seletor9').style.display='none';
            document.getElementById('seletor10').style.display='none';
            // code block
            break;       
        case "v8":
            document.getElementById('seletor1').style.display='none';
            document.getElementById('seletor2').style.display='none';
            document.getElementById('seletor3').style.display='none';
            document.getElementById('seletor4').style.display='none';
            document.getElementById('seletor5').style.display='none';
            document.getElementById('seletor6').style.display='none';
            document.getElementById('seletor7').style.display='none';
            document.getElementById('seletor8').style.display='block';
            document.getElementById('seletor9').style.display='none';
            document.getElementById('seletor10').style.display='none';
            // code block
            break;
        case "v9":
            document.getElementById('seletor1').style.display='none';
            document.getElementById('seletor2').style.display='none';
            document.getElementById('seletor3').style.display='none';
            document.getElementById('seletor4').style.display='none';
            document.getElementById('seletor5').style.display='none';
            document.getElementById('seletor6').style.display='none';
            document.getElementById('seletor7').style.display='none';
            document.getElementById('seletor8').style.display='none';
            document.getElementById('seletor9').style.display='block';
            document.getElementById('seletor10').style.display='none';
            // code block
            break;   
        case "v10":
            document.getElementById('seletor1').style.display='none';
            document.getElementById('seletor2').style.display='none';
            document.getElementById('seletor3').style.display='none';
            document.getElementById('seletor4').style.display='none';
            document.getElementById('seletor5').style.display='none';
            document.getElementById('seletor6').style.display='none';
            document.getElementById('seletor7').style.display='none';
            document.getElementById('seletor8').style.display='none';
            document.getElementById('seletor9').style.display='none';
            document.getElementById('seletor10').style.display='block';
            // code block
            break;    
        default:
            // code block
    };
});


