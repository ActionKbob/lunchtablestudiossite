from django.conf.urls import url
from blog import views

urlpatterns = [
	url( r'^api$', views.post_list ),
	url( r'^api/(?P<pk>[0-9]+)/$', views.post_detail )
]
