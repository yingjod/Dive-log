from rest_framework import serializers
from django.contrib.auth import get_user_model

User= get_user_model()

class RegisterationSerializer(serializers.ModelSerializer):

  #class attributes preventing serialization
  password = serializers.CharField(write_only=True)
  password_confirmation = serializers.CharField(write_only=True)

  class Meta:
    model = User
    fields = '__all__'
    extra_fields = ['password_confirmation']

  # validating passwords
  def validate(self, data):
    password = data.get('password')
    password_confirmation = data.pop('password_confirmation') #remove password_confirmation from the data object

    # validate passwords
    if password != password_confirmation:
      raise serializers.ValidationError('Passwords do not match.')
    
    #return data without password_confirmation
    return data
  
  def create(self,validate_date):
    user = User.objects.create_user(**validate_date) #this will hash the password field
    return user
  

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['username','email']

