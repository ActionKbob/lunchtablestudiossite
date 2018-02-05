from django.http import HttpResponse, JsonResponse
from about.models import Member
from about.serializers import MemberSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

def member_list( request ) :
	if request.method == 'GET' :
		members = Member.objects.all()
		serializer = MemberSerializer( members, many = True )
		return JsonResponse( serializer.data, safe = False )
