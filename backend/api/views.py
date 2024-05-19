from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer , EspecialidadSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.db.models import Count
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Note, Especialidad


class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class EspecialidadListCreate(generics.ListCreateAPIView):
    serializer_class = EspecialidadSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Especialidad.objects.all()

    def perform_create(self, serializer):
        serializer.save()



class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
class EspecialidadStatsView(APIView):
    permission_classes = [AllowAny] 

    def get(self, request):
        especialidades = Especialidad.objects.all()
        stats = Note.objects.values('especialidad__nombre').annotate(total=Count('especialidad')).order_by('especialidad__nombre')
        stats_dict = {stat['especialidad__nombre']: stat['total'] for stat in stats}
        
        all_stats = []
        for especialidad in especialidades:
            all_stats.append({
                'especialidad__nombre': especialidad.nombre,
                'total': stats_dict.get(especialidad.nombre, 0)
            })
        
        return Response(all_stats)