class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async getById(id, populateOptions) {
    if (populateOptions) {
      return await this.model.findById(id).populate(populateOptions);
    } else {
      return await this.model.findById(id);
    }
  }

  async getAll(populateOptions) {
    if (populateOptions) {
      return await this.model.find().populate(populateOptions);
    } else {
      return await this.model.find();
    }
  }

  async update(id, data, populateOptions) {
    const options = { new: true };
    if (populateOptions) {
      options.populate = populateOptions;
    }
    return await this.model.findByIdAndUpdate(id, data, options);
  }

  async delete(id, populateOptions) {
    if (populateOptions) {
      return await this.model.findByIdAndDelete(id).populate(populateOptions);
    } else {
      return await this.model.findByIdAndDelete(id);
    }
  }
}

module.exports = BaseRepository;
