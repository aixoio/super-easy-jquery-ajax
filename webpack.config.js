const path = require("path")

module.exports = {

    mode: "production",

    entry: {

        bundle: path.resolve(__dirname, "src/index.web.js")

    },

    output: {
        
        path: path.resolve(__dirname, "dist"),
        filename: "super-easy-jquery-ajax.web.js"

    }

}
