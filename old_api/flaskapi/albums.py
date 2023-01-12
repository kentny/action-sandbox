from flask import Blueprint

blueprint_albums = Blueprint('albums', __name__, url_prefix='/albums')

@blueprint_albums.route('/')
def albums():
    return [
        {
            "title": "Title-A",
            "artist": "Artist-1",
        },
        {
            "title": "Title-B",
            "artist": "Artist-2",
        },
        {
            "title": "Title-C",
            "artist": "Artist-3",
        },
    ]
    