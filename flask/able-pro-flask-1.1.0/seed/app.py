from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard/index')
def dashboard_views():  
    return render_template(f"dashboard/index.html")

@app.route('/other/<page>')
def other_views(page):  
    return render_template(f"other/{page}.html")

@app.route('/pages/<page>')
def pages_views(page):  
    return render_template(f"pages/{page}.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template("pages/error-404.html"), 404


if __name__ == '__main__':
    app.run(debug=True)
