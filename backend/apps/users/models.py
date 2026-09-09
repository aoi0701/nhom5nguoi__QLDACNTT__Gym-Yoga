# WBS 4.06 / SCRUM-142: Custom User Model for Fitness Body Metrics
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Administrator'),
        ('trainer', 'Trainer / Coach'),
        ('member', 'Gym / Yoga Member'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='member')
    phone = models.CharField(max_length=15, blank=True, null=True)
    height_cm = models.FloatField(null=True, blank=True, help_text="Height in cm")
    weight_kg = models.FloatField(null=True, blank=True, help_text="Weight in kg")
    fitness_goal = models.CharField(max_length=100, blank=True, null=True)
    health_notes = models.TextField(blank=True, null=True)

    def calculate_bmi(self):
        if self.height_cm and self.weight_kg and self.height_cm > 0:
            h_m = self.height_cm / 100.0
            return round(self.weight_kg / (h_m * h_m), 2)
        return None
