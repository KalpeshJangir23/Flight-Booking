const { Logger } = require("winston");

class CrudRepositories{
         constructor(model) {
                  this.model = model
         }

         async create(data) {
                  try {
                           const response = await this.model.create(data);   
                           return response;
                  } catch (error) {
                           Logger.error("Something went wrong in create data");
                           throw error;
                  }

         }
         async destroy(data) {
                  try {
                           const response = await this.model.distroy({
                                    where: {
                                             
                                    }
                           });   
                           return response;
                  } catch (error) {
                           Logger.error("Something went wrong in distroy data");
                           throw error;
                  }
         }

         async get(data) {
                   try {
                           const response = await this.model.findByPk(data);   
                           return response;
                  } catch (error) {
                           Logger.error("Something went wrong in get data");
                           throw error;
                  }
         }

          async getAll() {
                   try {
                           const response = await this.model.findAll();   
                           return response;
                  } catch (error) {
                           Logger.error("Something went wrong in getAll data");
                           throw error;
                  }
         }
         async update(id , data ) {
                  try {
                           const response = await this.model.update(data, {
                                    where: {
                                             id : id
                                    }
                           });   
                           return response;
                  } catch (error) {
                           Logger.error("Something went wrong in update data");
                           throw error;
                  }
         }


}

module.exports = CrudRepositories;