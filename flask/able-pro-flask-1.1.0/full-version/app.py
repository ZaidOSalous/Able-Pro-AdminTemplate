from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admins/<page>')
def admins_views(page):  
    return render_template(f"admins/{page}.html")

@app.route('/application/<page>')
def application_views(page):  
    return render_template(f"application/{page}.html")

@app.route('/chart/<page>')
def chart_views(page):  
    return render_template(f"chart/{page}.html")

@app.route('/dashboard/<page>')
def dashboard_views(page):  
    return render_template(f"dashboard/{page}.html")

@app.route('/demo/<page>')
def demo_views(page):  
    return render_template(f"demo/{page}.html")

@app.route('/elements/<page>')
def elements_views(page):  
    return render_template(f"elements/{page}.html")

@app.route('/forms/<page>')
def forms_views(page):  
    return render_template(f"forms/{page}.html")

@app.route('/layouts/<page>')
def layouts_views(page):  
    return render_template(f"layouts/{page}.html")

@app.route('/other/<page>')
def other_views(page):  
    return render_template(f"other/{page}.html")

@app.route('/pages/<page>')
def pages_views(page):  
    return render_template(f"pages/{page}.html")

@app.route('/table/<page>')
def table_views(page):  
    return render_template(f"table/{page}.html")

@app.route('/widget/<page>')
def widget_views(page):  
    return render_template(f"widget/{page}.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template("pages/error-404.html"), 404
    



if __name__ == '__main__':
    app.run(debug=True)
