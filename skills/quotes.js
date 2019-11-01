module.exports = function (controller) {

    controller.hears(["quote"], 'direct_message,direct_mention', function (bot, message) {
	var author = "Mark Twain";
	var quote = "\"Age is an issue of mind over matter. If you don't mind, it doesn't matter.\""
	var text = "Here is an inspirational quote for you:\n"+quote+' - '+author;
        bot.reply(message, text);
    });
}
