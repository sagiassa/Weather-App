class TempManager {

    constructor(){
    this.cityData = []
    }
   async getDataFromDB() {
        this.cityData = await $.get('/cities')
        
    }

   async getCityData(cityName) {
        let city = await $.get( `/city/${cityName}`)
        // console.log(this.cityData)
        this.cityData.push(city)

    }


    saveCity(cityName){
        let info = this.cityData.find(n => n.name === cityName)
        // info.saveDB = 'true' // 
        $.post('/city', info, function(err, res) {} )
    }
    
    removeCity(cityName){
        $.ajax({
            url: `/city/${cityName}` ,
            type: 'DELETE',
            success: function(result) {
                console.log(result)
                console.log("Delete is Success")
            }
        })
        
    }
}