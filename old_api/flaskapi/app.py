from flask import Flask

app = Flask(__name__)

from albums import blueprint_albums

app.register_blueprint(blueprint_albums)

