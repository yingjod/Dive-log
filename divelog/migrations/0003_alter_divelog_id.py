# Generated by Django 5.0.1 on 2024-01-12 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('divelog', '0002_alter_divelog_depth_alter_divelog_divingtime_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='divelog',
            name='id',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]
