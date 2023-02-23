
module.exports = {

    input: "src/index.js",
    
    output: [

        {

            file: "dist/super-easy-jquery-ajax.js",
            format: "cjs"

        },

        {

            file: "dist/super-easy-jquery-ajax.es.js",
            format: "es"

        }

    ],

    external: ["jquery"]

}