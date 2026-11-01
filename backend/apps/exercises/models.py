# WBS 4.18 / SCRUM-154: Exercise and Muscle Group Catalog Models
from django.db import models

class MuscleGroup(models.Model):
    name = models.CharField(max_length=50, unique=True)
    body_part = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Exercise(models.Model):
    title = models.CharField(max_length=150)
    category = models.CharField(max_length=20, choices=(('gym', 'Gym'), ('yoga', 'Yoga')))
    muscle_group = models.ForeignKey(MuscleGroup, on_delete=models.CASCADE, related_name='exercises')
    difficulty = models.CharField(max_length=20, choices=(('beginner', 'Beginner'), ('intermediate', 'Intermediate'), ('advanced', 'Advanced')))
    equipment = models.CharField(max_length=100, blank=True)
    instructions = models.TextField()
    is_deleted = models.BooleanField(default=False)
