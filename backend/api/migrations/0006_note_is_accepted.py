# Generated by Django 5.0.4 on 2024-05-21 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_especialidad_alter_note_especialidad'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='is_accepted',
            field=models.BooleanField(default=False),
        ),
    ]