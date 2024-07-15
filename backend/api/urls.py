from django.urls import path
from . import views
from .views import CurrentUserView

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete_note"),
    path("especialidades/", views.EspecialidadListCreate.as_view(), name="especialidad-list"),
    path('especialidad-stats/', views.EspecialidadStatsView.as_view(), name='especialidad-stats'),
    path('users/', views.UserListView.as_view(), name='user-list'),
    path('current-user/', CurrentUserView.as_view(), name='current-user'),
]