/* GET 'about' page. */
const about = (req, res) => {
    res.render('generic-text', {
      title: 'About Loc8r',
      content: 'Loc8r was created to help people find places to sid down and get a bit of work done. <br/><br/>Lorem ipsum dolor sit amet, est et vidit mundi decore, wisi liberavisse necessitatibus te ius, quo dicam aeterno et. Ius vivendo maluisset signiferumque ad, eam et sonet invidunt. Te unum sale autem qui, pro nisl repudiare constituto cu. Deserunt voluptatum duo id, sea te euismod ponderum intellegam, nulla tincidunt eos ex. Ea est utamur tritani signiferumque, eum cu tale nulla, qui ei mutat falli voluptatibu.'
    });
  };

  module.exports = {
      about
  };
  