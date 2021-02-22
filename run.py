import os
from flask import Flask, render_template, request, flash, url_for, redirect

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html',
                           page_title='Home')


@app.route('/memory_game')
def memory_game():
    return render_template('memory-game.html',
                           page_title='memory game')


@app.route('/whack_a_mole')
def whack_a_mole():
    return render_template('whack-a-mole.html',
                           page_title='whack a mole')


@app.route('/connect_4')
def connect_4():
    return render_template('connect-4.html',
                           page_title='connect 4')


@app.route('/snake')
def snake():
    return render_template('snake.html',
                           page_title='snake')


@app.route('/space_invaders')
def space_invaders():
    return render_template('space-invaders.html',
                           page_title='space invaders')


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
