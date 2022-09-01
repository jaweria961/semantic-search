
function search()

{
    
    let search = document.querySelector('.text-to-search').value;
    console.log('search', search)
    const paragraph = document.querySelector('.paragraph');
    console.log('paragraph', paragraph)
   
    if(search != "")
    {
        let pattern = new RegExp( search ,'gi');
        paragraph.innerHTML=(paragraph.textContent).
        replace(pattern, "<mark> $& </mark>")
    }
    
}
