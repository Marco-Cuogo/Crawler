var is = false;
insert = function (data){
    if(is){
        reload();
        for(var i = 0; i < data.length; i++) {
            if(i<10){
                tmp = "<a href= "+ data[i].url+ "&quot>";
                $('#myTable tbody').append('<tr><td><b>'+(i+1)+'</b></td><td>'+tmp+data[i].url+'</a></td><td>'+data[i].title+'</td></tr>');
                tmp="";
            }else{}
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
    $.ajax('http://jsonplaceholder.typicode.com/photos', {
        method: 'GET'
    }).then(function(data) {
        insert(data);
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
