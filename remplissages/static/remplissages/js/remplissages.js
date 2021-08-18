$(document).ready(function(){
    $("#add_evang").click(function(){
        $(".rempl_descrip").hide();
        $("#id_evang_form").removeClass("evang_form");
    })

    $("#id_evang_form_annul").click(function(){
        $("#id_evang_form").addClass("evang_form");
        $(".rempl_descrip").show();
    })
    
    var loadPersonneDetailImage = function(){
        var btn = $(this); 
        $.ajax({
            url: btn.attr("data-url"),
            type: 'get',
            dataType: 'json',
            beforeSend:function() {
                $('#modal-personne-detail .modal-content').html("");
                $('#modal-personne-detail').modal("show");
            },
            success:function(resp) {
                $('#modal-personne-detail .modal-content').html(resp.detail_personne);
            }
        })
    }

    $('.personne-btn-detail').click(loadPersonneDetailImage);



    $(".evang_detail").click(function(){
        var btn = $(this);
        $.ajax({
            url: btn.attr("data-url"),
            type: 'get',
            dataType: 'json',
            beforeSend:function() {
                $('#modal-evang-detail .modal-content').html("");
                $('#modal-evang-detail').modal("show");
            },
            success:function(resp) {
                $('#modal-evang-detail .modal-content').html(resp.evang_detail);
            }
        })
    })

    $('#rempl-date-input').on('change', function(){
        var date = new Date($('#rempl-date-input').val());
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var link = $('#link')
        link.attr("href", window.location.hostname+`${'/evangelisation/remplissages/'+day+'/'+month+'/'+year}`)
        link.addClass('btn-success')
        console.log(day)
        console.log(window.location.hostname)
        $("#add-link").html(link);
    });
    
    $('#link').click(function(){
        if (window.location.hostname+`${'/evangelisation/remplissages/'+day+'/'+month+'/'+year}`)
            window.location.hostname = ''
            window.location.hostname = $(this).attr("href")
    })
      
      
});