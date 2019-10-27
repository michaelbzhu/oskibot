module.exports = function (controller) {

    controller.hears(["lecture"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Watch CS 61A Lectures at https://mbzhu1.github.io/cs61a-eluvio-trial/";
        bot.reply(message, text);
    });
}