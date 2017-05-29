module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
   /* "globals": {
        "resources": true,
        "game": true,
        "RM": true,
        "GM": true,
        "cloudLayer": true,
        "tubeLayer": true
    },*/
    
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "compilerOptions":{
        "ecmaVersion":6
    },
    "rules": {
        
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};