
module.exports = {

    input: "src/index.js",
    
    output: [

        {

            file: "dist/super-easy-ajax.js",
            format: "cjs"

        },

        {

            file: "dist/super-easy-ajax.es.js",
            format: "es"

        }

    ],

    external: ["jquery"]

}