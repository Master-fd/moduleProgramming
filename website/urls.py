__author__ = 'fenton-fd.zhu'

from django.conf.urls import url, include
from website import views

urlpatterns = [

    url(r'^main/$', views.main),
    url(r'^backgroup/$', views.backgroup),

]
