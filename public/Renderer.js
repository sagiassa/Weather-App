class Renderer {
    renderData(allCityData) {
        // console.log(allCityData)
        $('#results').empty()
        const source = $("#weather-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({data : allCityData})
        $("#results").append(newHTML)
}
}