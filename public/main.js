const tempManager = new TempManager()

const r = new Renderer()

$('.top').hide()

 async function loadPage(){
    await tempManager.getDataFromDB()
    r.renderData(tempManager.cityData)
}
async function handleSearch(){
    let cityInfo = $("#name").val()
    await tempManager.getCityData(cityInfo)
    r.renderData(tempManager.cityData)
}
$('#search').on('click', function(){
    handleSearch()
})
$('body').on('click','.save', async function(){
    let city = $(this).closest('.city').find('.name').text()
    tempManager.saveCity(city)
    // await tempManager.getDataFromDB()
    r.renderData(tempManager.cityData)
    
})

$('body').on('click','.delete', async function(){
    let city = $(this).siblings('.name').text()
    tempManager.removeCity(city)
    await tempManager.getDataFromDB()
    $(this).parent().remove()
})

$('p').on('click', function(){
    $('.top').show()
    
    
})

loadPage()
