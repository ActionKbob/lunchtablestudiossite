from rest_framework import serializers
from blog.models import Post

class PostListSerializer( serializers.ModelSerializer ) :
	class Meta :
		model = Post
		fields = [ 'title', 'author' ]

class PostSerializer( serializers.ModelSerializer ) :
	class Meta :
		model = Post
		fields = '__all__'
