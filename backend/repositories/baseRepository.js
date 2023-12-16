

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async getById(_id, populateOptions) {
    if (populateOptions) {
      return await this.model.findById(_id).populate(populateOptions);
    } else {
      return await this.model.findById(_id);
    }
    
  }

  async getAll(populateOptions) {
    if (populateOptions) {
      return await this.model.find().populate(populateOptions);
    } else {
      return await this.model.find();
    }
  }

  async update(_id, data, populateOptions) {
    const options = { new: true };
    if (populateOptions) {
      options.populate = populateOptions;
    }
    return await this.model.findByIdAndUpdate(_id, data, options);
  }

  async delete(_id, populateOptions) {
    if (populateOptions) {
      return await this.model.findByIdAndDelete(_id).populate(populateOptions);
    } else {
      return await this.model.findByIdAndDelete(_id);
    }
  }
}

module.exports = BaseRepository;