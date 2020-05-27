$(document).ready(function(){

    $.getJSON('/todos',printPosts);
    $('form').submit(function(e){
       // e.preventDefault();
        $.post('/todos',{todo: $('#todo').val()}, printPosts);
        $.ajax({
            type: 'Post',
            success:function(){
                location.reload();
            }
        });

    });
});
function printPosts(todos){
    $('body>div>ul').empty();
    $.each(todos,function(){
        $('<li>').text(this.todo).appendTo('body>div>ul');
    });
    $('li').click(function(){
        $.ajax({
            url: '/todos/' + $(this).text(),
            type: 'DELETE',
            success: function(){
                location.reload();
            }
        });
    });
}