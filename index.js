const m = require("./m")
module.exports = async function(){
    const model= await m("name1");
    return model;
}
