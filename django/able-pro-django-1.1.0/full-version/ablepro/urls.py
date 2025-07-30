"""
URL configuration for ablepro project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from ablepro.views import (
    home_view,
    dynamic_dashbord_view,
    dynamic_demo_view,
    dynamic_widget_view,
    dynamic_admins_view,
    dynamic_elements_view,
    dynamic_forms_view,
    dynamic_table_view,
    dynamic_chart_view,
    dynamic_application_view,
    dynamic_pages_view,
    dynamic_other_view
)

urlpatterns = [
    path("index", home_view, name="home"),
    path("dashboard/<str:template_name>/", dynamic_dashbord_view, name="dashboard"),
    path("demo/<str:template_name>/", dynamic_demo_view, name="demo"),
    path("widget/<str:template_name>/", dynamic_widget_view, name="widget"),
    path("admins/<str:template_name>/", dynamic_admins_view, name="admins"),
    path("elements/<str:template_name>/", dynamic_elements_view, name="elements"),
    path("forms/<str:template_name>/", dynamic_forms_view, name="forms"),
    path("table/<str:template_name>/", dynamic_table_view, name="table"),
    path("chart/<str:template_name>/", dynamic_chart_view, name="chart"),
    path("application/<str:template_name>/", dynamic_application_view, name="application"),
    path("pages/<str:template_name>/", dynamic_pages_view, name="pages"),
    path("other/sample-page/", dynamic_other_view, name="other"),
    path('admin/', admin.site.urls),
    path("", home_view, name="home"),
]
