module.exports = function (controller) {

    controller.hears(["ligma"], 'direct_message,direct_mention', function (bot, message) {
        var text = "ligma balls";
        bot.reply(message, text);
    });
    controller.hears(["sugma"], 'direct_message,direct_mention', function (bot, message) {
        var text = "sugma balls";
        bot.reply(message, text);
    });
    controller.hears(["yuri"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Yuri tarded";
        bot.reply(message, text);
    });
    controller.hears(["Joe"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Joe Mama";
        bot.reply(message, text);
    });
    controller.hears(["John"], 'direct_message,direct_mention', function (bot, message) {
        var text = "John says oööoh füuüuckkkk";
        bot.reply(message, text);
    });
    controller.hears(["Doge"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Wow such bot";
        bot.reply(message, text);
    });
    controller.hears(["Sugondese"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Sugondese Nuts";
        bot.reply(message, text);
    });
    controller.hears(["Candice"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Candice Dick fit in yo mouth";
        bot.reply(message, text);
    });


}
