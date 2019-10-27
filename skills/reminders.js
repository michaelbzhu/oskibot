module.exports = function (controller) {

    controller.hears(["reminder"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Go to https://midterm-reminders-s8d1h.transposit.io/ to set reminders for your midterms!";
        bot.reply(message, text);
    });
}