var is = false;
insert = function (data){
    if(is){
        reload();
        var c;
        var temp;
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
                    temp += data.charAt[j];
                }
            }
        for(var i = 0; i < index0; i++) {
            var key="";
            for(var k = 0; k < c[i].length; k++){
                key+=(k+1)+")"+c[i][k]+" ";
            }
            if(i<10){
                tmp = "<a href= "+ c[i][9]+ "&quot>";
                $('#myTable tbody').append('<tr><td><b>'+(i+1)+'</b></td><td>'+tmp+c[i][9]+'</a></td><td>'+key+'</td></tr>');
                tmp="";
            }
        }
    }else{
        document.getElementById('controllo').style.display = 'block';
        document.getElementById('input').classList.add('error');
    }
};
reload = function () {
    $('#myTable tbody tr').remove();
};
search = function(){
    //upload();
    $.ajax('http://jsonplaceholder.typicode.com/photos', {
        method: 'GET'
    }).then(function(data) {
        insert(data);
    });
};
send = function (){
    var temp1=document.getElementById('input').value;
    $.ajax({
      //imposto il tipo di invio dati (GET O POST)
      type: "POST",
      //Dove devo inviare i dati recuperati dal form?
      url: "risultato_aggiunta.php",
      //Quali dati devo inviare?
      data: temp1,
      dataType: "html",
      //Inizio visualizzazione errori
      success: function(msg)
      {
        $("#risultato").html(msg); // messaggio di avvenuta aggiunta valori al db (preso dal file risultato_aggiunta.php) potete impostare anche un alert("Aggiunto, grazie!");
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare..."); //sempre meglio impostare una callback in caso di fallimento
      }
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
