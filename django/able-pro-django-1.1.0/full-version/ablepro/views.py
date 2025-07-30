from django.shortcuts import render

from django.contrib.auth.decorators import login_required
from django.template import TemplateDoesNotExist


# @login_required
def home_view(request):
    return render(request, f"index.html")

# @login_required
def dynamic_dashbord_view(request, template_name):
    try:
        return render(request, f"dashboard/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")

# @login_required
def dynamic_demo_view(request, template_name):
    try:
        return render(request, f"demo/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")


# @login_required
def dynamic_widget_view(request, template_name):
    try:
        return render(request, f"widget/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")


# @login_required
def dynamic_admins_view(request, template_name):
    try:
        return render(request, f"admins/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")

# @login_required
def dynamic_elements_view(request, template_name):
    try:
        return render(request, f"elements/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")

# @login_required
def dynamic_forms_view(request, template_name):
    try:
        return render(request, f"forms/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")

# @login_required
def dynamic_table_view(request, template_name):
    try:
        return render(request, f"table/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")

# @login_required
def dynamic_chart_view(request, template_name):
    try:
        return render(request, f"chart/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")

# @login_required
def dynamic_application_view(request, template_name):
    try:
        return render(request, f"application/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")

# @login_required
def dynamic_pages_view(request, template_name):
    try:
        return render(request, f"pages/{template_name}.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")

# @login_required
def dynamic_other_view(request):
    try:
        return render(request, f"other/sample-page.html")
    except TemplateDoesNotExist:
        return render(request, f"pages/error-404.html")