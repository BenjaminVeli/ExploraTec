from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note, Especialidad

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class EspecialidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especialidad
        fields = ["id", "nombre"]

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author", "dni", "telefono" , "apellido" , "especialidad"]
        extra_kwargs = {"author": {"read_only": True}}
        
    def create(self, validated_data):
        return Note.objects.create(**validated_data)