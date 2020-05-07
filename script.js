$(()=>{
    let item=$('#item')
    let list=$('#list')
    $('#prepend').click(()=>{
        let text=item.val()
        list.prepend($(`<li>${text}</li>`))
    })
    $('#append').click(()=>{
        let text=$('#item').val()
        // $('#list').append($(`<li>${text}</li>`))   working
        // $('#list').append($(`<li>`).text(text))      working
        $('#list').append($(`<li>`).html(`<h1>${text}</h1>`))
    })

}
)