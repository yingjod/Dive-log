# Generated by Django 5.0.1 on 2024-01-12 15:58

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('divespot', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='divelog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=django.utils.timezone.now)),
                ('pickTanks', models.CharField(default='0', max_length=255)),
                ('depth', models.CharField(default='0', max_length=255)),
                ('divingtime', models.CharField(default='0', max_length=255)),
                ('weight', models.CharField(default='0', max_length=255)),
                ('temperature', models.CharField(default='0', max_length=255)),
                ('visibility', models.CharField(default='0', max_length=255)),
                ('suit', models.CharField(default='', max_length=255)),
                ('partner', models.CharField(default='', max_length=255)),
                ('note', models.TextField(max_length=2000)),
                ('divespot', models.ForeignKey(default='divespot', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='divespot_divelog', to='divespot.divespot')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='divelog_owner', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
