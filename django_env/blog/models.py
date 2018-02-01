from __future__ import unicode_literals
from about.models import Member

from django.db import models

class Post( models.Model ) :
	title = models.CharField( max_length = 50, default = '' )
	body = models.TextField( default = '' )
	author = models.ForeignKey( Member, on_delete = models.DO_NOTHING )

	def __str__( self ) :
		return self.title

	class Meta :
		ordering = [ 'title' ]
