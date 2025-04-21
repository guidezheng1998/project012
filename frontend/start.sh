#!/bin/bash

# 检查 Node.js 和 npm 是否安装
if! command -v node &> /dev/null
then
    echo "Node.js 未安装，请先安装 Node.js。"
    exit 1
fi

if! command -v npm &> /dev/null
then
    echo "npm 未安装，请先安装 npm。"
    exit 1
fi

# 安装项目依赖
npm install

# 构建项目
npm run build

# 启动项目
npm start    
