from django.db import models
from rest_framework import serializers

# Create your models here.
class divelog(models.Model):

  id = models.BigAutoField(primary_key=True)
  user= models.ForeignKey(
    to = 'users.User', 
    on_delete=models.CASCADE,
    related_name='divelog_owner',
    null = True
    )

  date = serializers.DateField()
  divespot = models.ForeignKey(
    to = 'divespot.divespot', 
    on_delete=models.CASCADE,
    related_name='divespot_divelog',
    null = True
    )
  pickTanks = models.CharField(max_length=255)
  depth = models.CharField(max_length=255)
  divingtime = models.CharField(max_length=255)
  weight = models.CharField(max_length=255)
  temperature = models.CharField(max_length=255)
  visibility = models.CharField(max_length=255)
  suit = models.CharField(max_length=255)
  partner = models.CharField(max_length=255) 
  note = models.TextField(max_length=2000)

  

  def __str__(self):
    return f'{self.date} - {self.divespot}'