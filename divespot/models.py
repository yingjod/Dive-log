from django.db import models

# Create your models here.

class divespot(models.Model):
  spotname = models.CharField(max_length=255)
  country = models.CharField(max_length=255)
  description = models.TextField(max_length=2000)
  image = models.CharField(max_length=255)

  def __str__(self):
    return f'{self.spotname} - {self.country}'