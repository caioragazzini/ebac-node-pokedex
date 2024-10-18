const {Schema} = require("mongoose");

const Usuario = new Schema({
    nome : {
        type : String,
        require : true,
        min : 4,
    },
    email : {
        type : String,
        require: true,
        min : 4,
        unique : true,
        validate: {
            validator : function(v){
                return v.match('@');
            },
            message: props => `${props.value} não é um email valido`
        }
    },
    senha: {
        type: String,
        require: true,
    },
});

Usuario.index({email: 1});

module.exports = Usuario;