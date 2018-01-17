var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
        .then(function(articles) {
            // then insert articles into the db
            return db.Scrapeds.create(articles);
          })

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
          });
      })
    }};