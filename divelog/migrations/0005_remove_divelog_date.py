# Generated by Django 5.0.1 on 2024-01-12 17:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('divelog', '0004_alter_divelog_divespot'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='divelog',
            name='date',
        ),
    ]
