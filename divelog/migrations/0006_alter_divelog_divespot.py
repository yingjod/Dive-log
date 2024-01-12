# Generated by Django 5.0.1 on 2024-01-12 17:58

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('divelog', '0005_remove_divelog_date'),
        ('divespot', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='divelog',
            name='divespot',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='divespot_divelog', to='divespot.divespot'),
        ),
    ]
