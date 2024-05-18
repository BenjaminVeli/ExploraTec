import django.db.models.deletion
from django.db import migrations, models

# Función para crear especialidades
def create_especialidades(apps, schema_editor):
    Especialidad = apps.get_model('api', 'Especialidad')
    # Inserciones de especialidades
    Especialidad.objects.bulk_create([
        Especialidad(nombre='Electricidad y Electrónica'),
        Especialidad(nombre='Gestión y Producción'),
        Especialidad(nombre='Mecánica y Aviación'),
        Especialidad(nombre='Mecatrónica'),
        Especialidad(nombre='Tecnología digital'),
        Especialidad(nombre='Minería, Procesos Químicos y Metalúrgicos'),
    ])

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_note_especialidad'),
    ]

    operations = [
        # Operación para crear la tabla de especialidades
        migrations.CreateModel(
            name='Especialidad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
            ],
        ),
        # Operación para crear las especialidades
        migrations.RunPython(create_especialidades),
        # Operación para modificar el campo de especialidad en la tabla Note
        migrations.AlterField(
            model_name='note',
            name='especialidad',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Especialidad'),
        ),
    ]
