# WBS 4.19 & 4.23: Exercise CRUD API ViewSet
from rest_framework import viewsets
from .models import Exercise
from .serializers import ExerciseSerializer

class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.filter(is_deleted=False).order_by('-id')
    serializer_class = ExerciseSerializer

    def perform_destroy(self, instance):
        # Soft delete preservation
        instance.is_deleted = True
        instance.save()
