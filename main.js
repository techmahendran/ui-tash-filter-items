// Select DOM items
const textBox = document.querySelector('#textbox')
textBox.addEventListener('input', filterItem)

function filterItem(event) {
        const value = event.target.value
        let filterItems = [...document.querySelectorAll('#filterItem')]

    // Loop in filterItems 
    for (let i = 0; i < filterItems.length; i++) {
        let search = filterItems[i].getElementsByTagName('h3')[0]

        if (search.innerHTML.toLowerCase().includes(value)) {
            filterItems[i].style.display = 'block'
        } else {
            filterItems[i].style.display = 'none'            
        }
    }
}





