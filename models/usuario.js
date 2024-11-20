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
    googleUsuarioId:{
        type: String,
        require: false,
    },
    gitHubUsuarioId:{
        type: String,
        require: false,
    },
});

Usuario.index({email: 1});

module.exports = Usuario;