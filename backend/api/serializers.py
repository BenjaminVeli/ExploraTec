from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note, Especialidad

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "username", "password"]
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
        fields = ["id", "title", "content", "created_at", "author", "dni", "telefono", "apellido", "especialidad", "is_accepted"]
        extra_kwargs = {"author": {"read_only": True}}

    def validate(self, attrs):
        attrs = super().validate(attrs)
        user = self.context['request'].user
        last_note = Note.objects.filter(author=user).order_by('-created_at').first()
        if last_note and not last_note.is_accepted:
            raise serializers.ValidationError("No puedes crear más formularios hasta que el formulario anterior sea aceptado.")

        current_accepted_count = Note.objects.filter(is_accepted=True).count()
        
        if current_accepted_count >= 6:
            raise serializers.ValidationError("Se ha alcanzado el límite de formularios aceptados.")
        return attrs

    def create(self, validated_data):
        return super().create(validated_data)