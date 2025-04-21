#!/bin/bash

# 更新系统软件包
sudo apt-get update -y

# 安装 Python3 和 pip
sudo apt-get install -y python3 python3-pip

# 创建虚拟环境
python3 -m venv venv
source venv/bin/activate

# 安装项目依赖
pip install -r requirements.txt

# 启动应用
gunicorn -w 4 -b 0.0.0.0:5000 app:app
