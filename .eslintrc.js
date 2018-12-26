module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
  ],
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": false
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "new-cap": [2, {
        "capIsNewExceptions": ["List", "Map", "Set"]
      }
    ],
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 2,
    "import/extensions": 0,
    "object-shorthand": 0,
    "prefer-template": 0,
    "indent": [2, 2, { "SwitchCase": 1 }], // 缩进
    "comma-spacing": 2,
    "computed-property-spacing": 2,
    "semi": ["error", "always"], //句末加分号
    "space-infix-ops": 2,  // 要求中缀操作符周围有空格
    "space-in-parens": [2, "never"], // 禁止圆括号内的空格
    "quotes": [2, "single"], //单引号
    "no-console": 1, //警告console
    "no-alert": 1, //禁止使用alert confirm prompt
    "no-debugger": 2, //禁用debugger
    "no-var": 1, //对var警告
    "no-irregular-whitespace": 2, //不规则的空白不允许
    "no-trailing-spaces": 1, //一行结束后面有空格就发出警告
    "eol-last": 2, //文件以单一的换行符结束
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}], //不能有声明后未被使用的变量或参数
    "no-underscore-dangle": 0, //标识符不能以_开头或结尾
    "no-lone-blocks": 0, //禁止不必要的嵌套块
    "no-class-assign": 2, //禁止给类赋值
    "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-delete-var": 2, //不能对var声明的变量使用delete操作符
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复
    "no-duplicate-case": 2, //switch中的case标签不能重复
    "no-dupe-args": 2, //函数参数不能重复
    "no-empty": 2, //块语句中的内容不能为空
    "no-func-assign": 2, //禁止重复的函数声明
    "no-invalid-this": 0, //禁止无效的this，只能用在构造器，类，对象字面量
    "no-redeclare": 2, //禁止重复声明变量
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "no-this-before-super": 0, //在调用super()之前不能使用this或super
    "no-undef": 2, //不能有未定义的变量
    "no-use-before-define": 2, //未定义前不能使用
    "camelcase": 0, //强制驼峰法命名
    "no-unreachable": 1, //不能有无法执行的代码
    "comma-dangle": [2, "always-multiline"], //逗号强制使用空格
    "no-mixed-spaces-and-tabs": 0, //禁止混用tab和空格
    "prefer-arrow-callback": 0, //比较喜欢箭头回调
    "arrow-parens": 0, //箭头函数用小括号括起来
    "arrow-spacing": 2, //=>的前/后括号
  },
  "plugins": ["import"],
  "settings": {
    "import/parser": "babel-eslint",
    "import/resolve": {
      "moduleDirectory": ["node_modules", "src"]
    }
  },
  "globals": {
    
  }
}