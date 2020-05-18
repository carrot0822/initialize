const testData = [{
        "id": 1,
        "pid": 0,
        "name": "默认维度",
        "type": "0"
    },
    {
        "id": 2,
        "pid": 1,
        "name": "上海科技有限公司",
        "type": "1"
    },
    {
        "id": 3,
        "pid": 2,
        "name": "北京科技有限公司",
        "type": "1"
    },
    {
        "id": 4,
        "pid": 2,
        "name": "北京科技有限公司",
        "type": "1"
    },
    {
        "id": 117,
        "pid": 4,
        "name": "测试部门",
        "type": "2"
    },
    {
        "id": 5,
        "pid": 2,
        "name": "徐州科技有限公司",
        "type": "1"
    },
    {
        "id": 6,
        "pid": 2,
        "name": "重庆科技有限公司",
        "type": "1"
    },
    {
        "id": 114,
        "pid": 12,
        "name": "需求分析师",
        "type": "3"
    },
    {
        "id": 7,
        "pid": 2,
        "name": "人力资源部",
        "type": "2"
    },
    {
        "id": 100,
        "pid": 7,
        "name": "修改岗位测试3",
        "type": "3"
    },
    {
        "id": 101,
        "pid": 7,
        "name": "添加岗位测试",
        "type": "3"
    },
    {
        "id": 102,
        "pid": 7,
        "name": "添加岗位测试2",
        "type": "3"
    },
    {
        "id": 103,
        "pid": 8,
        "name": "java开发",
        "type": "3"
    },
    {
        "id": 107,
        "pid": 7,
        "name": "HR",
        "type": "3"
    },
    {
        "id": 8,
        "pid": 2,
        "name": "产品研发部",
        "type": "2"
    },
    {
        "id": 10,
        "pid": 8,
        "name": "统一岗位",
        "type": "3"
    },
    {
        "id": 9,
        "pid": 2,
        "name": "销售部",
        "type": "2"
    },
    {
        "id": 108,
        "pid": 9,
        "name": "销售顾问",
        "type": "3"
    },
    {
        "id": 11,
        "pid": 2,
        "name": "深圳科技有限公司",
        "type": "1"
    },
    {
        "id": 12,
        "pid": 2,
        "name": "咨询服务部",
        "type": "2"
    },
    {
        "id": 106,
        "pid": 12,
        "name": "咨询顾问",
        "type": "3"
    }
]

const testArr2 = [{
        id: 1,
        typeName: "演示专用",
        typeInfo: "",
        fkParentId: 0,
        wordTplAddress: "",
    },
    {
        id: 2,
        typeName: "测试专用",
        typeInfo: "",
        fkParentId: 0,
        wordTplAddress: "",
    },
    {
        id: 5,
        typeName: "财务科",
        typeInfo: "",
        fkParentId: 0,
        wordTplAddress: "",
    },
    {
        id: 10,
        typeName: "测试一",
        typeInfo: "123",
        fkParentId: 2,
        wordTplAddress: "",
    },
    {
        id: 11,
        typeName: "行政科",
        typeInfo: "21",
        fkParentId: 0,
        wordTplAddress: "",
    },
    {
        id: 23,
        typeName: "测试",
        typeInfo: "",
        fkParentId: 0,
        wordTplAddress: "",
    },
    {
        id: 24,
        typeName: "111",
        typeInfo: "",
        fkParentId: 0,
        wordTplAddress: "",
    },
    {
        id: 26,
        typeName: "258",
        typeInfo: "",
        fkParentId: 25,
        wordTplAddress: "",
    },
    {
        id: 27,
        typeName: "长度长度长度长度长度长度",
        typeInfo: "",
        fkParentId: 0,
        wordTplAddress: "",
    },
    {
        id: 28,
        typeName: "鲁大师",
        typeInfo: "",
        fkParentId: 0,
        wordTplAddress: "",
    },
    {
        id: 31,
        typeName: "研发",
        typeInfo: "",
        fkParentId: 0,
        wordTplAddress: "",
    },
    {
        id: 32,
        typeName: "100",
        typeInfo: "",
        fkParentId: 31,
        wordTplAddress: "",
    }
]

function toTree(objects, keyName, parentKeyName) {
    let map = {}
    // 按照传入的元素 转换为字典map keyName是ID 
    objects.forEach(x => {
        map[x[keyName]] = Object.assign({}, x) // Id取出来当键名
    })
    // 记录已经被添加到父项的链  到时候再删去
    var pushed = {}

    for (let key in map) {
        if (map.hasOwnProperty(key)) { // has过滤掉原型链的枚举属性
            const x = map[key]
            if (x && x[keyName] && x[parentKeyName]) { // 如果都存在
                var parent = map[x[parentKeyName]] // 在map中寻找已经存在的父节点
                if (parent) {
                    if (!parent.children) {
                        parent.children = []
                    }
                    parent.children.push(x)
                    pushed[x[keyName]] = true // 这里取到的是ID
                }
            }
        }
    }

    var tree = []
    for(let key in map){
        if(map.hasOwnProperty(key)){
            const x = map[key]
            if(!pushed[x[keyName]]){
                tree.push(x)
            }
        }
    }
    return tree

}

console.log(toTree(testArr2,'id','fkParentId'))

// 使用对象 真的巧妙啊 存的是地址
function toTree2(objects, keyName, parentKeyName) {

    if (!keyName) {
        throw "keyName argument is required";
    }
    if (!parentKeyName) {
        throw "parentKeyName argument is required";
    }

    // 列表项字典 将数组变成以objectId分组的对象，类似于{Vvwkeujpo:{},Rohdsfdofj:{}}
    var map = {};
    objects.forEach(x => (map[x[keyName]] = Object.assign({}, x)));

    // 已添加到父项的键 已经被使用过了 不会是第一层
    var pushed = {};

    // 遍历列表项，将子项添加到父项的 children 数组
    for (const key in map) {
        if (map.hasOwnProperty(key)) { // 这样就可以过滤掉原型链上的可枚举属性了
            const x = map[key];
            if (x && x[keyName] && x[parentKeyName]) {
                var parent = map[x[parentKeyName]];
                if (parent) {
                    if (!parent.children) {
                        parent.children = [];
                    }
                    parent.children.push(x);
                    pushed[x[keyName]] = true; // 记录ID用于查找
                }
            }
        }
    }

    // 排除已添加到父项的项得到树
    var tree = [];
    for (const key in map) {
        if (map.hasOwnProperty(key)) {
            const x = map[key];
            if (!pushed[x[keyName]]) {
                tree.push(x);
            }
        }
    }
    return tree;
}

//console.log(toTree2(testArr2, 'id', 'fkParentId'))

let a = {
    child: []
}
let b = {
    child: []
}
a.child.push(b)
b.child.push('111')


//console.log(a)