import os

from django.http import HttpResponse
from django.template import Context, loader
from django.conf import settings

def index( request ) :
	template = loader.get_template( os.path.join( settings.FRONTEND_APP_DIR, 'bin', 'index.html' ) )
	return HttpResponse( template.render() )
