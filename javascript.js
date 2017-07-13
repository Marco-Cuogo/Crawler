var is = false;
insert = function (data){
    if(is){
        reload();
        /*var c = [];
        for(var z=0; z<10; z++) {
            c[z] = new Array(11);
        }
        var temp="";
        var index = 0;
        var index0 = 0;
            for(var j = 0; j < data.length; j++){
                if(data.charAt(j) == " "){
                    c[index0][index] = temp;
                    temp = "";
                    index++;
                } else if(data.charAt(j) == "\n"){
                    c[index0][index] = temp;
                    temp = "";
                    index = 0;
                    index0++;
                }else{
                    temp += data.charAt(j);
                }
            }*/
        for(var i = 0; i < data.length; i++) {
            var key="";
            for(var k = 0; k <data[i].worlds.length; k++){
                    key+=(k+1)+")"+data[i].worlds[k]+"; ";
            }
            if(i<10){
                tmp = "<a href= "+data[i].url+ "&quot>";
                $('#myTable tbody').append('<tr><td><b>'+(i+1)+'</b></td><td>'+tmp+data[i].url+'</a></td><td>'+key+'</td></tr>');
                tmp="";
            }
        }
    }else{
        document.getElementById('controllo').style.display = 'block';
        document.getElementById('input').classList.add('error');
    }
    console.log(c);
};
reload = function () {
    $('#myTable tbody tr').remove();
};
search = function(){    
    //send();
    $.ajax('http://jsonplaceholder.typicode.com/photos', {
        method: 'GET'
    }).then(function(data) {
        insert(data);
    });
};
send = function (){
    var temp1=document.getElementById('input').value;
    $.ajax({
        type: "POST",
        url: "risultato_aggiunta.php",
        data: temp1,
        dataType: "html",
    });
};
$(function() {
    $('#input').on('input', function() { 
        console.log($(this).val());
        var temp=document.getElementById('input').value;
        if(!temp){
            is = false;
        }else {
            document.getElementById('controllo').style.display = 'none';
            document.getElementById('input').classList.remove('error');
            is = true;
        }
    });
});

