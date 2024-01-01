const FAQ = require("../models/faqModel");
const BaseRepository = require("./baseRepository");

class FAQRepository extends BaseRepository {
  // Ek özel işlemler ekleyebilirsiniz, örneğin:
  // Özel sorgular, belirli bir kullanıcıya ait soruları getirme, duruma göre filtreleme vb.

  // Örnek: Cevaplanmış soruları getirme
  async getAnsweredQuestions(populateOptions) {
    const query = this.model.find({ status: "cevaplandı" });

    if (populateOptions) {
      query.populate(populateOptions);
    }

    return await query.exec();
  }

  // Örnek: Belirli bir admin tarafından cevaplanmış soruları getirme
  async getAnsweredByAdmin(adminId, populateOptions) {
    const query = this.model.find({ admin: adminId, status: "cevaplandı" });

    if (populateOptions) {
      query.populate(populateOptions);
    }

    return await query.exec();
  }
  // Örnek: Belirli bir tarih aralığındaki soruları getirme
  async getQuestionsByDateRange(startDate, endDate, populateOptions) {
    const query = this.model.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });

    if (populateOptions) {
      query.populate(populateOptions);
    }

    return await query.exec();
  }
}

module.exports = new FAQRepository(FAQ);
