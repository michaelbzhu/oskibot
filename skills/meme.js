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
}
