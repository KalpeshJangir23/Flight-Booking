const { AirplaneRepositories } = require('../repositories');


const airplaneRepositories = new AirplaneRepositories();

async function createAirplane (data) {
         try{
                  const airplane = await airplaneRepositories.create(data);
                  return airplane;
         } catch(err) {
                  throw err;
         }
}

module.exports = {
         createAirplane
}

