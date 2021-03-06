const fetch = require("node-fetch");
class Cathyjs {
    /**
     * @constructor
     * @param {String} name chatbot name
     */
    constructor(name, options = { log: true }) {
        this.name = name || "Cathy";
        this.options = options;
    }
    /**
     * startChatting
     * @param {String} message message content
     * @returns {String} - reply message
     */
    async startChatting(message) {
        if (!message) throw new Error("input may not be empty");
        if (typeof message !== "string") throw new SyntaxError("message must be a string");
        if (this.options.log) console.log(`input: ${message}`);
        return handle(message).then(m => m.cnt.replace(/Cathy|cathy/g, this.name));
    }
}
function handle(message) {
    return fetch(`http://api.brainshop.ai/get?bid=10515&key=BceCb6Sq4XYNmxwn&uid=Cathyjs&msg=${message}`)
        .then(res => res.json());
}
module.exports = Cathyjs;
