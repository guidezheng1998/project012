import os

class Config:
    DEBUG = False
    TESTING = False
    HOST = '0.0.0.0'
    PORT = 5000
    SECRET_KEY = os.environ.get('SECRET_KEY', 'default_secret_key')
    UPLOAD_FOLDER = os.environ.get('UPLOAD_FOLDER', 'uploads')
    OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
    OLLAMA_URL = os.environ.get('OLLAMA_URL', 'http://localhost:11434')

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    pass

config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}    
