from django.http import HttpResponse, JsonResponse
from blog.models import Post
from blog.serializers import PostSerializer, PostListSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

def post_list( request ) :
	if request.method == 'GET' :
		posts = Post.objects.all()
		serializer = PostListSerializer( posts, many = True )
		return JsonResponse( serializer.data, safe = False )

def post_detail( request, pk ) :
	try :
		post = Post.objects.get( pk = pk )
	except Post.DoesNotExist :
		return HttpResponse( status = 404 )

	if request.method == 'GET' :
		serializer = PostSerializer( post )
		return JsonResponse( serializer.data )

