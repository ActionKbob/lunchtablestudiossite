from __future__ import unicode_literals

from django.db import models

class Member( models.Model ) :
	firstName = models.CharField( max_length = 20, default = '' )
	lastName = models.CharField( max_length = 20, default = '' )

	def __str__( self ) :
		return self.lastName + ', ' + self.firstName

	class Meta :
		ordering = [ 'lastName' ]
